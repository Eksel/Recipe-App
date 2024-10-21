import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci';
import { FaCheck, FaRegTrashAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

interface Props {
    title: string;
    setTitle:React.Dispatch<React.SetStateAction<string>>;
}

export default function Title(props: Props) {
    const {title,setTitle} = props
    const [onEdit, setOnEdit] = useState(false);
    
    function handleEditClick(){
        setOnEdit(prev => !prev)
    }
    function handleInputChange(e: any){
        setTitle(e.target.value)
    }
    function handleDeleteClick(){
        setTitle("");
        
        
    }
  return (
    <div className='grid grid-cols-1 grid-rows-3 mx-4 p-3 bg-emerald-100 rounded-lg shadow-lg'>
        <div className='row-span-1'></div>
        <h1 className='row-span-1 flex justify-center text-3xl font-bold'>
                {!onEdit ?
                    <div className=''>
                        {title}
                    </div>
                    :
                    <div className='w-full '>
                        <input value={title}  className="w-full rounded-md text-center" onChange={handleInputChange}/>
                            
                        
                    </div>
                }
        </h1>
        <div className='row-span-1 flex flex-row justify-end w-full text-xl text-white'>
            <span onClick={handleEditClick} className='bg-green-700 p-1 m-1 rounded-md hover:cursor-pointer'>
                {!onEdit ? <CiEdit /> : <FaCheck/>}
            </span>
            <span onClick={handleDeleteClick} className='bg-red-700 p-1 m-1  rounded-md hover:cursor-pointer'>
                <FaRegTrashAlt />
            </span>
            
        </div>
    </div>
  )
}
