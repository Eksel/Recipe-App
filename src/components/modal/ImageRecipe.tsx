import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    image: string;
    setImage:React.Dispatch<React.SetStateAction<string>>;
}

const initialImage = "https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE="

export default function ImageRecipe(props: Props) {
    const { title, setTitle, image, setImage } = props;
  return (
    <div className='flex flex-col mx-4 px-10 py-4 h-fit items-center bg-emerald-100 rounded-lg shadow-lg'>
        <h1 className='flex justify-center m-4 p-2 rounded-md  font-bold text-3xl '>
            {title}
        </h1>   
        <img src={image ? image : initialImage} alt=""  className=' aspect-square object-cover w-1/2 m-6 shadow-2xl rounded-lg'/>
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
