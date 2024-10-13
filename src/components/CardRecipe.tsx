import React from 'react'
import { Recipe } from '../service/types'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { RxDividerVertical } from 'react-icons/rx';
import { useState } from 'react';
import { useRecipeContext } from '../service/providers/RecipeContextProvider';
import { GiConsoleController } from 'react-icons/gi';


type Item = { item: Recipe}


const CardRecipe = ({item}: Item) => {
    const [isFavorite,setIsFavorite] = useState(item.isFavorite)
    const {setModal,setIsModalOpen,isModalOpen,setFavorite,saveData} = useRecipeContext()
    function handleModalOpen(){
        if(!isModalOpen){
            setModal(item)
            setIsModalOpen(true)
        }
        
    }
    
    

    function handleChangeFavoriteButton() {

        const newItem = {
            ...item,
            isFavorite: !isFavorite
        }
        setFavorite(newItem)
        saveData()
        setIsFavorite(!isFavorite)
        
        console.log(isFavorite)
        
        
        
        
    }
    

    return (
    <>
        <div className='w-72 mx-6 my-10 flex flex-col  justify-center rounded-lg shadow-xl hover:cursor-pointer hover:brightness-90'>
            <div className=''  onClick={handleModalOpen}>
                <img src={item.img} className='w-72 aspect-square rounded-t-lg object-cover ' alt="" />
            </div>
            
            <div className='flex justify-between items-center m-3 font-bold '>
                <h1 className=''  onClick={handleModalOpen}>{item.title}</h1>
                
                    
                
                <div onClick={handleChangeFavoriteButton} className='star   text-2xl'>
                    {isFavorite ? <FaStar className='text-yellow-400 hover:text-yellow-500  '/> : <FaRegStar className='text-yellow-400 hover:text-yellow-500'/>}
                </div>
            </div>
            
            
        </div>
        
    </>
    
  )
}

export default CardRecipe
