import React from 'react';
import { Recipe } from '../service/types';
import { useRecipeContext } from '../service/providers/RecipeContextProvider';



const Modal = () => {
    
    const {modal,setIsModalOpen,clearModal} = useRecipeContext()
    const closeModal = () => {
        setIsModalOpen(false)
        clearModal()
      }
    
    return (
        <div className='fixed w-5/6 p-12 bg-emerald-200 rounded-3xl'>
            <div className='w-full flex justify-end'>
                <div onClick={closeModal} className='m-4 fixed hover:text-slate-300 transition-all hover:cursor-pointer hover:bg-gray-900 flex justify-center items-center text-xl font-bold rounded-md w-10 h-10 text-white  bg-black' >
                    X
                </div>
            </div>
            <h1 className='flex justify-center m-6 font-bold text-3xl '>
                {modal?.title}
            </h1>
            <div className='flex justify-around items-center'>
                <img src={modal?.img} alt="" className='w-72 aspect-square object-cover m-6 shadow-2xl rounded-lg'/>
                <p className='text-center flex justify-center items-center'>{modal?.instructions}</p>
                <div className='flex flex-col flex-wrap w-4/6 mx-6 justify-center items-center'>
                    <h2 className='font-bold  text-xl'>Ingredients:</h2>
                    {modal?.ingredients.map((item)=>{
                        return (<div className='p-1 m-1 rounded-md w-full bg-red-400'>{item}</div>)
                    })}
                </div>
            </div>
            
        </div>
    );
}

export default Modal;
