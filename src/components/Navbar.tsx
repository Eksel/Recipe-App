import { Link } from "react-router-dom";
import { LuClipboardList } from "react-icons/lu";
import { LuMenu } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenuVisible(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

    window.addEventListener("resize", () => {setMenuVisible(false)});
    function Links() {
        return (
            <>
                <Link
                    onClick={close}
                    to="/favorite-recipes"
                    className="m-1 p-2 transition-colors  hover:bg-gray-400 bg-gray-100 mx-2 rounded-md"
                >
                    <div className="btn">Favorite Recipies</div>
                </Link>
                <Link
                    onClick={close}
                    to="/my-recipes"
                    className="m-1 p-2 transition-colors  hover:bg-gray-400 bg-gray-100 mx-2 rounded-md"
                >
                    <div className="btn">My recipes</div>
                </Link>
                <Link
                    onClick={close}
                    to="/contact"
                    className="m-1 p-2 transition-colors  hover:bg-gray-400 bg-gray-100 mx-2 rounded-md"
                >
                    <div className="btn">Contact</div>
                </Link>
            </>
        );
    }
    function handleClick() {
        setMenuVisible(!menuVisible);
    }
    function close(){
        setMenuVisible(false)
    }

    return (
        <div  className="navbar bg-gray-100 flex justify-between items-center p-8 shadow-md  z-50">
            <Link
                to="/"
                className="p-2 transition-colors hover:bg-gray-400 bg-gray-100 rounded-md "
            >
                <div className="logo flex justify-center text-3xl items-center">
                    <div className="logo-name font-bold">RecipeApp</div>
                    <LuClipboardList className="" />
                </div>
            </Link>
            <div
                onClick={handleClick}
                className="buttons md:hidden flex text-3xl rounded-md p-1 bg-gray-100 hover:bg-gray-300 hover:cursor-pointer"
            >
                <LuMenu />
            </div>
            <div className="buttons md:flex hidden">
                <Links />
            </div>
            {menuVisible && (
                <motion.div
                    className="absolute flex flex-col  w-full top-20 right-0 text-center bg-gray-300 rounded-lg py-8 p-4 "
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0,scale: 0 }}
                    ref={menuRef}
                >
                    <Links />
                </motion.div>
            )}
        </div>
    );
};

export default Navbar;
