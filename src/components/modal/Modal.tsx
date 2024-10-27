import { useRecipeContext } from "../../service/providers/RecipeContextProvider";
import { useEffect, useState } from "react";
import Step from "./Step";
import IngredientsItem from "./IngredientsItem";
import { Reorder } from "framer-motion";
import { FaRegSave } from "react-icons/fa";
import ImageRecipe from "./ImageRecipe";
import InstructionsRecipe from "./InstructionsRecipe";
import Other from "./Other";
import { Recipe } from "../../service/types";
import { MdDeleteForever } from "react-icons/md";
import Title from "./Title";
import { MdCreate } from "react-icons/md";
import Alert from "./Alert";
import { MdOutlineAdd } from "react-icons/md";

const initialImage =
    "https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE=";

interface Props {
    localRecipes: Recipe[];
    setLocalRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
}

const Modal = (props: Props) => {
    const { setLocalRecipes } = props;

    const {
        modal,
        setIsModalOpen,
        clearModal,
        removeRecipe,
        saveData,
        setRecipe,
        addRecipe,
    } = useRecipeContext();

    const [title, setTitle] = useState(
        modal ? modal.title : "Your recipe title"
    );
    const [image, setImage] = useState(modal ? modal.img : initialImage);
    const [instructions, setInstructions] = useState(
        modal ? modal.instructions : "Instructions"
    );
    const [isFavorite, setIsFavorite] = useState(
        modal ? modal.isFavorite : false
    );
    const [Ingredients, setIngredients] = useState(
        modal ? modal.ingredients : []
    );
    const [Steps, setSteps] = useState(modal ? modal.steps : []);
    const [energyValue, setEnergyValue] = useState(
        modal ? modal.energyValue : "0 kcal"
    );
    const [edited, setEdited] = useState(false);
    const [editors, setEditors] = useState(0);
    const [alertVisible, setAlertVisible] = useState(false);

    useEffect(() => {
        console.log(editors > 0);
        if (editors > 0) {
            setEdited(true);
        }
    }, [editors]);

    function reloadCards() {
        setLocalRecipes([]);
    }

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    function handleRecipeDelete() {
        if (modal) {
            removeRecipe(modal);
            saveData();
            reloadCards();
            handleCloseModal();
        }
    }

    function handleChangeFavoriteButton() {
        if (modal) {
            const newItem = {
                ...modal,
                isFavorite: !isFavorite,
            };
            setRecipe(newItem);
            reloadCards();
        }
        setIsFavorite((prev) => {
            return !prev;
        });
    }
    function handleSaveClick() {
        if (modal) {
            setRecipe(newRecipe());
            reloadCards();
            saveData();
        } else {
            addRecipe(newRecipe());
            saveData();
            reloadCards();
            
            setIsModalOpen(false);
            clearModal();
        }
        setEdited(false);
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
            isFavorite: isFavorite,
        };
    };
    function handleCloseModal() {
        if (edited) {
            toggleAlert();
        } else {
            SaveandClose();
        }
    }
    const handleUpdateIngredient = (
        index: number,
        newValue: string,
        remowing: boolean
    ) => {
        if (remowing) {
            const updatedIngredients = [...Ingredients].filter((item) => {
                if (item === newValue) {
                    return false;
                } else {
                    return true;
                }
            });
            setIngredients(updatedIngredients);
        } else {
            const updatedIngredients = [...Ingredients];
            updatedIngredients[index] = newValue;
            setIngredients(updatedIngredients);
        }
    };
    const handleUpdateSteps = (
        index: number,
        newValue: string,
        remowing: boolean
    ) => {
        if (remowing) {
            const updatedSteps = [...Steps].filter((item) => {
                if (item === newValue) {
                    return false;
                } else {
                    return true;
                }
            });
            setSteps(updatedSteps);
        } else {
            const updatedSteps = [...Steps];
            updatedSteps[index] = newValue;
            setSteps(updatedSteps);
        }
    };
    function addIngredient() {
        setIngredients([...Ingredients, "Empty"]);
    }
    function addStep() {
        setSteps([...Steps, "Empty"]);
    }
    function SaveandClose() {
        handleSaveClick();
        setIsModalOpen(false);
        clearModal();
    }
    function toggleAlert() {
        alertVisible ? setAlertVisible(false) : setAlertVisible(true);
    }
    function addEditor() {
        setEditors(editors + 1);
    }
    function deleteEditor() {
        setEditors(editors + 1);
    }

    return (
        <>
            <div className="modal z-50 flex flex-col items-start top-0 m-12 fixed w-5/6 h-5/6 md:p-4 bg-zinc-200 rounded-3xl shadow-xl transition-transform overflow-y-auto max-h-full scrollbar-webkit border-[20px] border-zinc-200">
                <div className="w-full flex justify-end">
                    <div className="absolute flex flex-row  text-xl">
                        {modal ? (
                            <>
                                <div
                                    onClick={handleSaveClick}
                                    className="hover:text-slate-300 transition-all hover:cursor-pointer hover:bg-green-800 flex gap-2 justify-center items-center  font-bold rounded-md md:mx-2 mx-1 px-4 py-2 text-white  bg-green-600"
                                >
                                    <FaRegSave /> <div className="hidden sm:block">Save</div>
                                </div>
                                <div
                                    onClick={handleRecipeDelete}
                                    className="hover:text-slate-300 transition-all hover:cursor-pointer hover:bg-red-800 flex gap-2 justify-center items-center font-bold rounded-md md:mx-2 mx-1 px-4 py-2 text-white  bg-red-600"
                                >
                                    <MdDeleteForever /> <div className="hidden sm:block">Delete</div>
                                </div>
                            </>
                        ) : (
                            <div
                                onClick={handleSaveClick}
                                className="hover:text-slate-300 transition-all hover:cursor-pointer hover:bg-green-800 flex gap-2 justify-center items-center  font-bold rounded-md md:mx-2 mx-1 px-4 py-2 text-white  bg-green-600"
                            >
                                <MdCreate /> <div className="hidden sm:block">Create</div>
                            </div>
                        )}

                        <div
                            onClick={handleCloseModal}
                            className=" hover:text-slate-300 transition-all hover:cursor-pointer hover:bg-gray-800 flex justify-center items-center  font-bold rounded-md  md:mx-2 mx-1 px-4 py-2 text-white  bg-black"
                        >
                            X
                        </div>
                    </div>
                </div>
                <section className=" md:px-4 w-full ">
                    <Title
                        title={title}
                        setTitle={setTitle}
                        addEditor={addEditor}
                        deleteEditor={deleteEditor}
                    />
                </section>
                <section className="lg:grid lg:grid-cols-3 lg:grid-rows-1 flex flex-col md:px-4 w-full">
                    <ImageRecipe
                        image={image}
                        setImage={setImage}
                        addEditor={addEditor}
                        deleteEditor={deleteEditor}
                    />
                    <InstructionsRecipe
                        instructions={instructions}
                        setInstructions={setInstructions}
                        addEditor={addEditor}
                        deleteEditor={deleteEditor}
                    />
                </section>

                <section className="xl:grid xl:grid-cols-12 xl:grid-rows-1 flex flex-col md:px-4 w-full ">
                    <div className="col-span-4 m-4 p-2 md:p-4 md:px-12 bg-emerald-100 rounded-lg shadow-lg ">
                        <h2 className="md:m-6 m-3 text-center text-2xl font-bold">
                            Ingredients:
                        </h2>
                        <div className="flex flex-col flex-wrap justify-center items-strech">
                            <Reorder.Group
                                axis="y"
                                values={Ingredients}
                                onReorder={setIngredients}
                            >
                                {Ingredients.map((item, index) => {
                                    return (
                                        <IngredientsItem
                                            key={item}
                                            id={index}
                                            content={item}
                                            handleUpdateIngredient={
                                                handleUpdateIngredient
                                            }
                                            addEditor={addEditor}
                                            deleteEditor={deleteEditor}
                                        />
                                    );
                                })}
                            </Reorder.Group>
                        </div>
                        <div
                            onClick={addIngredient}
                            className="flex  justify-center items-center p-2 m-1 rounded-md  bg-green-500 shadow-md hover:bg-green-600 transition-colors hover:cursor-pointer"
                        >
                            <MdOutlineAdd/> Add ingredient
                        </div>
                    </div>
                    <div className="col-span-5 m-4 p-2 md:p-4 md:px-12 bg-emerald-100 rounded-lg shadow-lg">
                        <h2 className="md:m-6 m-3 text-center text-2xl font-bold">
                            Steps:
                        </h2>
                        <div className="flex flex-col flex-wrap justify-center items-strech">
                            <Reorder.Group
                                axis="y"
                                values={Steps}
                                onReorder={setSteps}
                            >
                                {Steps.map((item, index) => {
                                    return (
                                        <Step
                                            key={item}
                                            id={index}
                                            content={item}
                                            handleUpdateSteps={
                                                handleUpdateSteps
                                            }
                                            addEditor={addEditor}
                                            deleteEditor={deleteEditor}
                                        />
                                    );
                                })}
                            </Reorder.Group>
                        </div>
                        <div
                            onClick={addStep}
                            className="flex  justify-center items-center p-2 m-1 rounded-md  bg-green-500 shadow-md hover:bg-green-600 transition-colors hover:cursor-pointer"
                        >
                             <MdOutlineAdd/> Add step
                        </div>
                    </div>
                    <Other
                        handleChangeFavoriteButton={handleChangeFavoriteButton}
                        isFavorite={isFavorite}
                        energyValue={energyValue}
                        setEnergyValue={setEnergyValue}
                        addEditor={addEditor}
                        deleteEditor={deleteEditor}
                    />
                </section>
            </div>
            {alertVisible && (
                <Alert handleSave={SaveandClose} toggleAlert={toggleAlert} />
            )}
        </>
    );
};

export default Modal;
