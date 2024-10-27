import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { CiEdit } from "react-icons/ci";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";


interface Props {
    image: string;
    setImage:React.Dispatch<React.SetStateAction<string>>;
    addEditor: () => void;
    deleteEditor: () => void;
}


const addImage = "https://www.shutterstock.com/image-vector/premium-picture-icon-logo-line-600nw-749843974.jpg"
const addingImage = "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png"

export default function ImageRecipe(props: Props) {
    const { image, setImage,addEditor,deleteEditor } = props;
    
    const [onEdit, setOnEdit] = useState(false);
    
    const onDrop = useCallback(<T extends File>(acceptedFiles: T[]) => {
        const file = new FileReader
        file.onload = () => {
            setImage(file.result as string)
        }
        file.readAsDataURL(acceptedFiles[0])
        setOnEdit(prev => !prev)

      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    function handleEditClick(){
        setOnEdit(!onEdit)
        !onEdit ? addEditor() : deleteEditor()
    }
    function handleDeleteClick(){
        setOnEdit(false)
        setImage("")
    }

  return (
    <div className='flex flex-col  m-4   items-center bg-emerald-100 rounded-lg shadow-lg '>
        
         
        
        {!onEdit ? 
            <div className=' flex justify-center items-center h-5/6 py-10'>
                <img src={image} alt=""  className=' aspect-square object-cover w-1/2 shadow-2xl rounded-lg'/>
            </div>
            :
            <div {...getRootProps()} className=' flex justify-center items-center h-5/6 py-10'>
            <input {...getInputProps()} />
                {
                isDragActive ?
                <img src={addingImage} alt=""  className=' aspect-square object-cover w-1/2 m-1 shadow-2xl rounded-lg'/>
                :
                <img src={addImage} alt=""  className=' aspect-square object-cover w-1/2 m-1 shadow-2xl rounded-lg'/>
                }
          </div>
        } 
        
        
        <div className=' flex h-1/6 flex-row items-center justify-end w-full text-xl md:py-3 md:p-5 p-1 text-white'>
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
