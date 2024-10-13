import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import {Reorder, useMotionValue} from "framer-motion"
type props = {content: string;}

export default function IngredientsItem({content}:props) {

    const y = useMotionValue(0);
  return (
    <Reorder.Item  id={content} value={content} style={{y}}>
          
        
        <div className='flex flex-row justify-between items-center p-2 m-1 my-3 rounded-md  bg-green-200 shadow-md '>
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
    </Reorder.Item>
  )
}
