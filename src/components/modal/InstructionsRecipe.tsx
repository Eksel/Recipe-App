import { useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface Props {
    instructions: string;
    setInstructions: React.Dispatch<React.SetStateAction<string>>;
}

export default function InstructionsRecipe(props: Props) {
    const { instructions, setInstructions } = props;
    const [onEdit, setOnEdit] = useState(false);
    

    function handleEditClick(){
        setOnEdit(prev => !prev)
    }
    function handleInputChange(e: any){
        setInstructions(e.target.value)
    }
    function handleDeleteButton(){
        setInstructions("");
        
        
    }

  return (
    <div className='col-span-2 h-full flex flex-col justify-between   mx-4 px-10 py-4 bg-emerald-100 rounded-lg shadow-lg'>
        <div className="grid grid-rows-4">
            <h2 className='flex row-span-1 justify-center m-4 p-2 rounded-md  font-bold text-3xl'>
                Recipe:
            </h2>
            <div className="row-span-3 py-3 text-start">
            
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
        
        
        
        <div className=' flex justify-end text-xl text-white'>
            <span onClick={handleEditClick} className='bg-green-700 p-1 m-1 rounded-md hover:cursor-pointer'>
                {!onEdit ? <CiEdit /> : <IoClose/>}
                
            </span>
            <span onClick={handleDeleteButton} className='bg-red-700 p-1 m-1  rounded-md hover:cursor-pointer'>
                <FaRegTrashAlt />
            </span>
            
        </div>
    </div>
  )
}
