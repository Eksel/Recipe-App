import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
    instructions: string;
    setInstructions: React.Dispatch<React.SetStateAction<string>>;
}

export default function InstructionsRecipe(props: Props) {
    const { instructions, setInstructions } = props;
  return (
    <div className='col-span-2  mx-4 px-10 py-4 bg-emerald-100 rounded-lg shadow-lg'>
        <h2 className='flex justify-center m-4 p-2 rounded-md  font-bold text-3xl'>
            Recipe:
        </h2>
        <div className='text-center flex justify-center items-center text-lg'>
            {instructions}
        </div>
        <div className=' flex justify-end text-xl text-white'>
            <span className='bg-green-700 p-1 m-1 rounded-md hover:cursor-pointer'>
                <CiEdit />
            </span>
            <span className='bg-red-700 p-1 m-1  rounded-md hover:cursor-pointer'>
                <FaRegTrashAlt />
            </span>
            
        </div>
    </div>
  )
}
