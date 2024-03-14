import React from 'react'

const StickyNote = ({ name }) => {
    return (
        <div className='aspect-square w-[30%] h-auto m-2 p-4 rounded-md border-2 border-gray-400 text-black hover:border-black'>
            {name}
        </div>
    )
}

export default StickyNote