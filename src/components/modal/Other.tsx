import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { FaRegStar, FaRegTrashAlt, FaStar } from 'react-icons/fa'

interface Props{
    handleChangeFavoriteButton: () => void;
    isFavorite: boolean;
    energyValue: string;
    setEnergyValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Other(props : Props) {
    const {handleChangeFavoriteButton, isFavorite, energyValue, setEnergyValue} = props;
    return (
        <div className='col-span-3 mx-4 p-6 bg-emerald-100 rounded-lg shadow-lg'>
            <div onClick={handleChangeFavoriteButton} className=' flex flex-col justify-center items-center p-10 m-4 bg-yellow-100 rounded-lg shadow-md text-3xl hover:cursor-pointer'>
                <h1 className='text-2xl font-bold' >Favorite:</h1>
                {isFavorite ? <FaStar className='text-yellow-400 hover:text-yellow-500  '/> : <FaRegStar  className='text-yellow-400 hover:text-yellow-500'/>}
            </div>
            <div className=' flex flex-col justify-center items-center p-10 m-4 bg-yellow-100 rounded-lg shadow-md text-2xl'>
                <h1 className='font-bold'>Energy Value: </h1>
                {energyValue}
                <div className=' flex justify-end text-xl text-white'>
                    <span className='bg-green-700 p-1 m-1 rounded-md hover:cursor-pointer'>
                        <CiEdit />
                    </span>
                    <span className='bg-red-700 p-1 m-1  rounded-md hover:cursor-pointer'>
                        <FaRegTrashAlt />
                    </span>
                    
                </div>
            </div>
            
        </div>
  )
}
