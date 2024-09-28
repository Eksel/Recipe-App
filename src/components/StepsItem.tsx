import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

type props = {content: string; index: number}

export default function StepsItem({content,index}:props) {
  return (
    <div className='p-2 m-1 rounded-md  bg-green-200 shadow-md '>
        <div>
             {content}
        </div>
        <div className='flex text-xl text-white'>
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
