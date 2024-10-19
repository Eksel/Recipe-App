import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import {Reorder, useMotionValue} from "framer-motion"
import { useState } from "react";
import { IoClose } from "react-icons/io5";
interface Props{
    content: string;
    id: number;
    key: number;
    handleUpdateIngredient: (index: number, newValue: string) => void
}

export default function IngredientsItem(props:Props) {
    const {content,id,handleUpdateIngredient} = props
    const [value,setValue] = useState(content)
    const y = useMotionValue(0);
    const [onEdit, setOnEdit] = useState(false);
    

    function handleEditClick(){
        setOnEdit(prev => !prev)
    }
    function handleInputChange(e: any){
        setValue(e.target.value)
        handleUpdateIngredient(id,e.target.value)
        
    }
    function handleDeleteClick(){
        setValue("");
        
            
    }
  return (
    <Reorder.Item  id={content} value={content} style={{y}}>
          
        
        <div className='flex flex-row justify-between items-center p-2 m-1 my-3 rounded-md  bg-green-200 shadow-md '>
                {!onEdit ?
                    <div className='w-full h-full'>
                        {value}
                    </div>
                    :
                    <div className='w-full h-full'>
                        <textarea value={value}  className="w-full h-full" onChange={handleInputChange}>
                            
                        </textarea>
                    </div>
                }
            <div className='flex text-xl text-white'>
                <span onClick={handleEditClick} className='bg-green-700 p-1 m-1 rounded-md hover:cursor-pointer'>
                    {!onEdit ? <CiEdit /> : <IoClose/>}
                </span>
                <span onClick={handleDeleteClick} className='bg-red-700 p-1 m-1  rounded-md hover:cursor-pointer'>
                    <FaRegTrashAlt />
                </span>
                
            </div>
        </div>
    </Reorder.Item>
  )
}
