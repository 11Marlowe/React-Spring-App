import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import CharacterRow from './CharacterRow';

export default function ViewCharacters() {

  const charactersURL = 'http://localhost:8082/characters';
    
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      
      fetch(charactersURL)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  
      setLoading(false);
    };
    
    getCharacters();
  }, []);

  const deleteCharacter = async (e, id) => {
    e.preventDefault();

    await fetch(charactersURL + '?id=' + id, {
        method: "DELETE", 
      })
      .then((response) => {
        if (characters) {
          setCharacters((prevElement) => {
            return prevElement.filter((character) => character.id !== id);
          });
        }
      })
      .catch(error => {
        window.alert(error);
        return;
      });
  };

  const editCharacter = (e, id) => {
    e.preventDefault();
    navigate(`/editCharacter/${id}`);
  }; 

  return (
    <div className='max-w-2xl bg-gray-50 shadow-black shadow-sm mx-auto mt-2'>
        <div className='w-full text-center px-8 py-8'>
            <div className='text-2xl'>
                <h1>Characters</h1>
            </div>
            <button onClick={() => navigate('/addCharacter')} className='active:bg-cyan-900 rounded bg-gray-800 text-white px-4 py-2 mt-4 hover:bg-gray-600'>Add Character</button>
            <div className='my-2 border'>
              <table className='w-full'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th className='border pl-2 text-left'>Name</th>
                    <th className='border pl-2 text-left'>Class</th>
                    <th className='border pl-2'>Actions</th>
                  </tr>
                </thead>
                {!loading && (
                <tbody>
                  {characters.map((character) => (
                    <CharacterRow 
                    key={character.id} 
                    character={character} 
                    deleteCharacter={deleteCharacter} 
                    editCharacter={editCharacter}
                    />
                  ))}
                </tbody>
                )}
              </table>
            </div>
        </div>
    </div>
  )
}
