
import {Link} from 'react-router-dom'
import { LuClipboardList } from "react-icons/lu";

const Navbar = () => {
    return (
        <div className='navbar bg-gray-100 flex justify-between items-center p-3 shadow-md '>
            <Link to="/" className='p-2 transition-colors hover:bg-gray-400 bg-gray-100 rounded-md '>
                <div className="logo flex justify-center text-3xl items-center">
                    
                    <div className="logo-name font-bold">
                        RecipeApp
                    </div>
                    <LuClipboardList className='' />
                </div>
            </Link>
            
            <div className="buttons flex ">
                <Link to="/favorite-recipes" className='p-2 transition-colors  hover:bg-gray-400 bg-gray-100 mx-2 rounded-md'>
                    <div className="btn">
                        Favorite Recipies
                    </div>
                </Link>
                <Link to="/my-recipes" className='p-2 transition-colors  hover:bg-gray-400 bg-gray-100 mx-2 rounded-md'>
                    <div className="btn">
                        My recipes
                    </div>
                </Link>
                <Link to="/contact" className='p-2 transition-colors  hover:bg-gray-400 bg-gray-100 mx-2 rounded-md'>
                    <div className="btn">
                        Contact
                    </div>
                </Link>
            </div>
            
        </div>
    );
}

export default Navbar;
