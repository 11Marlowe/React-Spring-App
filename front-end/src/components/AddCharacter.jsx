import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddCharacter() {

  const saveCharacterURL = 'http://localhost:8082/characters';

  const navigate = useNavigate();

  const initCharState = {
    id:"",
    name:"",
    rpgClass:"",
  };
  const [character, setCharacter] = useState(initCharState);

  const handleChange = (e) => {
    setCharacter({...character, [e.target.name]: e.target.value});
  };

  const saveCharacter = async (e) => {
    e.preventDefault();
  
    await fetch(saveCharacterURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(character),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setCharacter(initCharState);
  };

  return (
    <div className='flex max-w-2xl bg-gray-50 shadow-black shadow-sm mx-auto mt-2'>
        <div className='px-8 py-8'>
            <div className='text-2xl'>
                <h1>Add New Character</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block'>Name</label>
                <input onChange={(e) => handleChange(e)} type='text' name="name" value={character.name} className='h-8 w-96 mt-2 px-2 border border-black' />
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block'>Class</label>
                <select onChange={(e) => handleChange(e)} name='rpgClass' value={character.rpgClass} className='h-8 w-96 mt-2 px-2 border border-black'>
                  <option value=''></option>
                  <option value='Knight'>Knight</option>
                  <option value='Mage'>Mage</option>
                  <option value='Priest'>Priest</option>
                </select>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <button onClick={saveCharacter} className='rounded active:bg-cyan-900 bg-gray-800 text-white px-4 py-2 mt-4 hover:bg-gray-600'>Save</button>
            </div>
        </div>
    </div>
  )
}
