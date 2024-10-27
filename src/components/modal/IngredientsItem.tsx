import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import {Reorder, useMotionValue} from "framer-motion"
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import TextareaAutosize from 'react-textarea-autosize';

interface Props{
    content: string;
    id: number;
    handleUpdateIngredient: (index: number, newValue: string, remowing:boolean) => void;
    addEditor: () => void;
    deleteEditor: () => void;
}

export default function IngredientsItem(props:Props) {
    const {content,id,handleUpdateIngredient,addEditor,deleteEditor} = props
    const [value,setValue] = useState(content)
    const y = useMotionValue(0);
    const [onEdit, setOnEdit] = useState(false);
    

    function handleEditClick(){
        setOnEdit(prev => !prev)
        handleUpdateIngredient(id,value,false)
        !onEdit ? addEditor() : deleteEditor()
    }
    function handleInputChange(e: any){
        setValue(e.target.value)
        
        
    }
    function handleDeleteClick(){
        handleUpdateIngredient(id,value,true)
        
            
    }
  return (
    <Reorder.Item  id={value} value={value} style={{y}}>
          
        
        <div className='flex flex-row justify-between items-center p-2 m-1 my-3 rounded-md  bg-green-200 shadow-md'>
                {!onEdit ?
                    <div className='w-full h-full'>
                        {value}
                    </div>
                    :
                    <div className='w-full h-full'>
                        <TextareaAutosize
                            value={value}
                            className="w-full h-full "
                            minRows={1}
                            onChange={handleInputChange}
                        ></TextareaAutosize>
                            
                        
                    </div>
                }
            <div className='flex text-xl text-white'>
                <span onClick={handleEditClick} className='bg-green-700 p-1 m-1 rounded-md hover:cursor-pointer'>
                    {!onEdit ? <CiEdit /> : <FaCheck/>}
                </span>
                <span onClick={handleDeleteClick} className='bg-red-700 p-1 m-1  rounded-md hover:cursor-pointer'>
                    <FaRegTrashAlt />
                </span>
                
            </div>
        </div>
    </Reorder.Item>
  )
}
