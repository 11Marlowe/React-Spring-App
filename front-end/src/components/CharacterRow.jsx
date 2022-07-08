import React from 'react'

export default function CharacterRow({character, deleteCharacter, editCharacter}) {

    

  return (
        <tr>
            <td className='border pl-2 text-left'>{character.name}</td>
            <td className='border pl-2 text-left'>{character.rpgClass}</td>
            <td className='border pl-2'>
                <div className='inline-flex rounded-md shadow-sm'>
                    <button onClick={(e) => editCharacter(e, character.id)} className='py-2 px-4 text-sm font-medium rounded-l-md active:bg-cyan-900 bg-gray-800 text-white mt-4 hover:bg-gray-600'>
                    Edit
                    </button>
                    <button onClick={(e) => deleteCharacter(e, character.id)} className='py-2 px-4 text-sm font-medium rounded-r-md active:bg-cyan-900 bg-gray-800 text-white mt-4 hover:bg-gray-600'>
                    Delete
                    </button>
                </div>
            </td>
        </tr>
  )
}
