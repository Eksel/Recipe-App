import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";

interface Props {
    instructions: string;
    setInstructions: React.Dispatch<React.SetStateAction<string>>;
    addEditor: () => void;
    deleteEditor: () => void;
}

export default function InstructionsRecipe(props: Props) {
    const { instructions, setInstructions,addEditor,deleteEditor } = props;
    const [onEdit, setOnEdit] = useState(false);
    

    function handleEditClick(){
        setOnEdit(prev => !prev)
        !onEdit ? addEditor() : deleteEditor()
    }
    function handleInputChange(e: any){
        setInstructions(e.target.value)
    }
    function handleDeleteButton(){
        setInstructions("");
        
        
    }

  return (
    <div className='col-span-2 flex flex-col justify-between   m-4  bg-emerald-100 rounded-lg shadow-lg'>
        <div className="flex flex-col px-10 py-4">
            <h2 className='flex  justify-center m-4 p-2 rounded-md  font-bold text-3xl'>
                Recipe:
            </h2>
            <div className=" py-3 text-start">
            
                {!onEdit ?
                    <div className='  text-lg'>
                        {instructions}
                    </div>
                    :
                    <div className=' w-full h-full flex justify-center items-center text-lg'>
                        <textarea value={instructions}  className="w-full h-full" onChange={handleInputChange}>
                            
                        </textarea>
                    </div>
                }
            </div>
        </div>
        
        
        
        <div className=' flex h-1/6 flex-row items-center justify-end w-full text-xl md:py-3 md:p-5 p-1 text-white'>
            <span onClick={handleEditClick} className='bg-green-700 p-1 m-1 rounded-md hover:cursor-pointer'>
                {!onEdit ? <CiEdit /> : <FaCheck/>}
                
            </span>
            <span onClick={handleDeleteButton} className='bg-red-700 p-1 m-1  rounded-md hover:cursor-pointer'>
                <FaRegTrashAlt />
            </span>
            
        </div>
    </div>
  )
}
