import { useRecipeContext } from '../../service/providers/RecipeContextProvider';
import { useState } from 'react';
import StepsItem from './StepsItem';
import IngredientsItem from './IngredientsItem';
import { Reorder } from "framer-motion"
import { FaRegSave } from "react-icons/fa";
import ImageRecipe from './ImageRecipe';
import InstructionsRecipe from './InstructionsRecipe';
import Other from './Other';
import { Recipe } from '../../service/types';
import { MdDeleteForever } from "react-icons/md";

interface Props {
    localRecipes: Recipe[];
    setLocalRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>
}

const Modal = (props: Props) => {
    const {localRecipes,setLocalRecipes} = props
    
    const {recipes,modal,setIsModalOpen,clearModal,removeRecipe,saveData,setRecipe} = useRecipeContext()
    const [title,setTitle] = useState(modal ? modal.title : "")
    const [image,setImage] = useState(modal ? modal.img : "")
    const [instructions,setInstructions] = useState(modal ? modal.instructions : "")
    const [isFavorite, setIsFavorite] = useState(modal ? modal.isFavorite : false);
    const [Ingredients, setIngredients] = useState( modal ? modal.ingredients : []);
    const [Steps, setSteps] = useState( modal ? modal.steps : []);
    const [energyValue,setEnergyValue] = useState(modal ? modal.energyValue : "")
    const [edited, setEdited] = useState(false);
    
    
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
      }
    
    function handleRecipeDelete(){
        if(modal){
            closeModal()
            removeRecipe(modal)
            saveData()
        }
    }

    function handleChangeFavoriteButton() {
        if(modal){
            const newItem = {
                ...modal,
                isFavorite: !isFavorite
            }
            setRecipe(newItem)
            setLocalRecipes([])
        }
        setIsFavorite( prev => {
            return !prev
        })
    }
    function handleSaveClick(){
        if(modal){
            const newItem = newRecipe()
            setRecipe(newItem)
            setLocalRecipes([])
            saveData()
        }
    }
    const newRecipe = () => {
        return {
            id: modal ? modal.id : getRandomInt(10000),
            title: title,
            ingredients: Ingredients,
            instructions: instructions,
            img: image,
            energyValue: energyValue, 
            steps: Steps, 
            isFavorite: isFavorite
        }
    }
    function closeModal() {
        setIsModalOpen(false)
        clearModal()
    }
    

    
    return (
        <div className='modal flex flex-col items-start top-0 m-12 fixed w-5/6 h-5/6 p-4 bg-zinc-200 rounded-3xl shadow-xl overflow-y-auto max-h-full scrollbar-webkit border-[20px] border-zinc-200'>
            <div className='w-full flex justify-end'>
                <div className='fixed flex flex-row'>
                    <div onClick={handleRecipeDelete} className='hover:text-slate-300 transition-all hover:cursor-pointer hover:bg-red-800 flex gap-2 justify-center items-center text-xl font-bold rounded-md mx-2 px-4 py-2 text-white  bg-red-600'>
                        <MdDeleteForever/> <div>Delete</div> 
                    </div>
                    <div onClick={handleSaveClick} className='hover:text-slate-300 transition-all hover:cursor-pointer hover:bg-green-800 flex gap-2 justify-center items-center text-xl font-bold rounded-md mx-2 px-4 py-2 text-white  bg-green-600'>
                        <FaRegSave /> <div>Save</div> 
                    </div>
                    <div onClick={closeModal} className=' hover:text-slate-300 transition-all hover:cursor-pointer hover:bg-gray-800 flex justify-center items-center text-xl font-bold rounded-md  mx-2 px-4 py-2 text-white  bg-black' >
                        X
                    </div>
                    
                </div>
            
                
            </div>
            <section className='grid grid-cols-3 grid-rows-1 p-4 w-full'>
                <ImageRecipe title={title} setTitle={setTitle} image={image} setImage={setImage}/>
                <InstructionsRecipe instructions={instructions} setInstructions={setInstructions} />
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
                <Other  handleChangeFavoriteButton={handleChangeFavoriteButton} isFavorite={isFavorite} energyValue={energyValue} setEnergyValue={setEnergyValue}/>
            </section>
            
        </div>
    );
      
      
}

export default Modal;
