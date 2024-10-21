import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { CiEdit } from "react-icons/ci";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { IoClose } from 'react-icons/io5';

interface Props {
    image: string;
    setImage:React.Dispatch<React.SetStateAction<string>>;
}

const initialImage = "https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE="
const addImage = "https://www.shutterstock.com/image-vector/premium-picture-icon-logo-line-600nw-749843974.jpg"
const addingImage = "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png"

export default function ImageRecipe(props: Props) {
    const { image, setImage } = props;
    const [onEdit, setOnEdit] = useState(false);
    
    const onDrop = useCallback(<T extends File>(acceptedFiles: T[]) => {
        const file = new FileReader
        file.onload = () => {
            setImage(file.result as string)
        }
        file.readAsDataURL(acceptedFiles[0])
        setOnEdit(prev => !prev)

      }, [])
      const {acceptedFiles ,getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    function handleEditClick(){
        setOnEdit(!onEdit)
        
    }
    function handleDeleteClick(){
        setOnEdit(false)
        setImage("")
    }

  return (
    <div className='grid grid-cols-1 grid-rows-5 justify-between h-full mx-4   items-center bg-emerald-100 rounded-lg shadow-lg'>
        
         <div className='row-span-1'></div>
        
        {!onEdit ? 
            <div className='row-span-3 flex justify-center'>
                <img src={image ? image : initialImage} alt=""  className=' aspect-square object-cover w-1/2 m-1 shadow-2xl rounded-lg'/>
            </div>
            :
            <div {...getRootProps()} className=' row-span-3 flex justify-center'>
            <input {...getInputProps()} />
                {
                isDragActive ?
                <img src={addingImage} alt=""  className=' aspect-square object-cover w-1/2 m-1 shadow-2xl rounded-lg'/>
                :
                <img src={addImage} alt=""  className=' aspect-square object-cover w-1/2 m-1 shadow-2xl rounded-lg'/>
                }
          </div>
        } 
        
        
        <div className='row-span-1 flex flex-row justify-end w-full text-xl px-10 text-white'>
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
