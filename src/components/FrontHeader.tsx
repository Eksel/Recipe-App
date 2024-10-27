import { Link } from "react-router-dom";

const FrontHeader = () => {
    return (
        <div className="front-box w-full h-screen bg-front-image bg-cover bg-center flex justify-center items-center flex-col">
      
        
        

            <p className='md:text-8xl text-5xl text-center text-white bg-gray-800 bg-opacity-50 rounded-lg font-bold p-8 m-4'>
            Make your own Recipes
            </p>
            <button className='p-3 text-xl bg-blue-600 rounded-md text-white hover:bg-blue-700 transition-colors'>
                <Link to="./my-recipes">Create Recipe</Link> 
            </button> 
        </div>
    );
}

export default FrontHeader;
