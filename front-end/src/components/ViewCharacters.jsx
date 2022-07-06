import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

export default function ViewCharacters() {

  const getCharactersURL = 'http://localhost:8082/characters';
    
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const getCharacters = async () => {
    setLoading(true);
    
    fetch(getCharactersURL)
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

  useEffect(() => {
    getCharacters();
  }, []);

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
                  <tr key={character.id}>
                    <td className='border pl-2 text-left'>{character.name}</td>
                    <td className='border pl-2 text-left'>{character.rpgClass}</td>
                    <td className='border pl-2'>
                      <div className='inline-flex rounded-md shadow-sm'>
                      <button className='py-2 px-4 text-sm font-medium rounded-l-md active:bg-cyan-900 bg-gray-800 text-white mt-4 hover:bg-gray-600'>
                        Edit
                      </button>
                      <button className='py-2 px-4 text-sm font-medium rounded-r-md active:bg-cyan-900 bg-gray-800 text-white mt-4 hover:bg-gray-600'>
                        Delete
                      </button>
                      </div>
                    </td>
                  </tr>
                  ))}
                </tbody>
                )}
              </table>
            </div>
        </div>
    </div>
  )
}
