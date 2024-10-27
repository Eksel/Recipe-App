import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci';
import { FaCheck, FaRegTrashAlt } from 'react-icons/fa';

interface Props {
    title: string;
    setTitle:React.Dispatch<React.SetStateAction<string>>;
    addEditor: () => void;
    deleteEditor: () => void;
}

export default function Title(props: Props) {
    const {title,setTitle,addEditor,deleteEditor} = props
    const [onEdit, setOnEdit] = useState(false);
    
    function handleEditClick(){
        setOnEdit(prev => !prev)
        !onEdit ? addEditor() : deleteEditor()
        
    }
    function handleInputChange(e: any){
        setTitle(e.target.value)
    }
    function handleDeleteClick(){
        setTitle("");
        
        
    }
  return (
    <div className='flex flex-col m-4 bg-emerald-100 rounded-lg shadow-lg'>
        
        <h1 className=' flex justify-center text-3xl font-bold text-center h-5/6 mt-10'>
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
        <div className=' flex flex-row items-center justify-end w-full text-xl md:py-3 md:p-5 p-1 text-white h-1/6'>
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
