import React from 'react';
import { Recipe } from '../service/types';
import { useRecipeContext } from '../service/providers/RecipeContextProvider';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useState,useEffect } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import StepsItem from './StepsItem';
import IngredientsItem from './IngredientsItem';
import {Reorder} from "framer-motion"
import { FaRegSave } from "react-icons/fa";

// type isFavorite = {isFavorite:boolean;setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>}

const Modal = () => {
    
    const {recipes,modal,setIsModalOpen,clearModal,addIngredient,removeIngredient,setRecipes} = useRecipeContext()

    
    const [isFavorite, setIsFavorite] = useState(modal?.isFavorite);
    const [Ingredients, setIngredients] = useState( modal ? modal.ingredients : []);
    const [Steps, setSteps] = useState( modal ? modal.steps : []);
    
    
    
    


    function handleChangeFavoriteButton() {
        setIsFavorite( prev => {
            return !prev
        })
    }
    const closeModal = () => {
        
        setIsModalOpen(false)
        clearModal()
      }
    
    return (
        <div className='modal flex flex-col items-start top-0 m-12 fixed w-5/6 h-5/6 p-4 bg-zinc-200 rounded-3xl shadow-xl overflow-y-auto max-h-full scrollbar-webkit border-[20px] border-zinc-200'>
            <div className='w-full flex justify-end'>
                <div className='fixed flex flex-row'>
                    <div className='hover:text-slate-300 transition-all hover:cursor-pointer hover:bg-green-800 flex gap-2 justify-center items-center text-xl font-bold rounded-md mx-2 px-4 py-2 text-white  bg-green-600'>
                        <FaRegSave /> <div>Save</div> 
                    </div>
                    <div onClick={closeModal} className=' hover:text-slate-300 transition-all hover:cursor-pointer hover:bg-gray-800 flex justify-center items-center text-xl font-bold rounded-md  mx-2 px-4 py-2 text-white  bg-black' >
                        X
                    </div>
                    
                </div>
            
                
            </div>
            <section className='grid grid-cols-3 grid-rows-1 p-4 w-full'>
                <div className='flex flex-col mx-4 px-10 py-4 h-fit items-center bg-emerald-100 rounded-lg shadow-lg'>
                    <h1 className='flex justify-center m-4 p-2 rounded-md  font-bold text-3xl '>
                        {modal?.title}
                    </h1>   
                    <img src={modal?.img} alt=""  className=' aspect-square object-cover w-1/2 m-6 shadow-2xl rounded-lg'/>
                    <div className=' flex justify-end text-xl text-white'>
                        <span className='bg-green-700 p-1 m-1 rounded-md hover:cursor-pointer'>
                            <CiEdit />
                        </span>
                        <span className='bg-red-700 p-1 m-1  rounded-md hover:cursor-pointer'>
                            <FaRegTrashAlt />
                        </span>
                        
                    </div>
                </div>
                <div className='col-span-2  mx-4 px-10 py-4 bg-emerald-100 rounded-lg shadow-lg'>
                    <h2 className='flex justify-center m-4 p-2 rounded-md  font-bold text-3xl'>
                        Recipe:
                    </h2>
                    <div className='text-center flex justify-center items-center text-lg'>
                        {modal?.instructions}
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
            </section>
            
            
            <section className='grid grid-cols-12 grid-rows-1 p-4 w-full '>
                
                
                <div className='col-span-3 mx-4 p-12 bg-emerald-100 rounded-lg shadow-lg '>
                    <h2 className='mx-3 mb-3  text-center text-2xl font-bold'>Ingredients:</h2>
                        <div className='flex flex-col flex-wrap justify-center items-strech'>
                            <Reorder.Group axis="y" values={Ingredients} onReorder={setIngredients}>
                                
                                    {Ingredients.map((item)=>{
                                        return (<IngredientsItem key={item} content={item}/>)
                                    })}
                                
                            </Reorder.Group>
                        </div>
                    <div className='flex  justify-center items-center p-2 m-1 rounded-md  bg-green-500 shadow-md hover:bg-green-600 transition-colors hover:cursor-pointer'>+ Add ingredient</div>
                </div>
                <div className='col-span-6 mx-4 p-12 bg-emerald-100 rounded-lg shadow-lg'>
                <h2 className='mx-3 mb-3 text-center text-2xl font-bold'>Steps:</h2>
                    <div className='flex flex-col flex-wrap justify-center items-strech'>
                        <Reorder.Group axis='y' values={Steps} onReorder={setSteps}>
                            {Steps.map((item)=>{
                                return (<StepsItem content={item} key={item} />)
                            })}
                        </Reorder.Group>
                    
                    </div>
                    <div className='flex  justify-center items-center p-2 m-1 rounded-md  bg-green-500 shadow-md hover:bg-green-600 transition-colors hover:cursor-pointer'>+ Add step</div>
                </div>
                <div className='col-span-3 mx-4 p-6 bg-emerald-100 rounded-lg shadow-lg'>
                    <div onClick={handleChangeFavoriteButton} className=' flex flex-col justify-center items-center p-10 m-4 bg-yellow-100 rounded-lg shadow-md text-3xl hover:cursor-pointer'>
                        <h1 className='text-2xl font-bold' >Favorite:</h1>
                        {isFavorite ? <FaStar className='text-yellow-400 hover:text-yellow-500  '/> : <FaRegStar  className='text-yellow-400 hover:text-yellow-500'/>}
                    </div>
                    <div className=' flex flex-col justify-center items-center p-10 m-4 bg-yellow-100 rounded-lg shadow-md text-2xl'>
                        <h1 className='font-bold'>Energy Value: </h1>
                        {modal?.energyValue}
                        <div className=' flex justify-end text-xl text-white'>
                            <span className='bg-green-700 p-1 m-1 rounded-md hover:cursor-pointer'>
                                <CiEdit />
                            </span>
                            <span className='bg-red-700 p-1 m-1  rounded-md hover:cursor-pointer'>
                                <FaRegTrashAlt />
                            </span>
                            
                        </div>
                    </div>
                    
                </div>
            </section>
            
        </div>
    );
}

export default Modal;
