import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaCheck, FaRegStar, FaRegTrashAlt, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import TextareaAutosize from 'react-textarea-autosize';

interface Props {
    handleChangeFavoriteButton: () => void;
    isFavorite: boolean;
    energyValue: string;
    setEnergyValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Other(props: Props) {
    const {
        handleChangeFavoriteButton,
        isFavorite,
        energyValue,
        setEnergyValue,
    } = props;
    const [onEdit, setOnEdit] = useState(false);

    function handleEditClick() {
        setOnEdit((prev) => !prev);
    }
    function handleInputChange(e: any) {
        setEnergyValue(e.target.value);
    }
    function handleDeleteButton() {
        setEnergyValue("");
    }

    return (
        <div className="col-span-3 mx-4 p-6 bg-emerald-100 rounded-lg shadow-lg">
            <div
                onClick={handleChangeFavoriteButton}
                className=" flex flex-col justify-center items-center p-10 m-4 bg-yellow-100 rounded-lg shadow-md text-3xl hover:cursor-pointer"
            >
                <h1 className="text-2xl font-bold">Favorite:</h1>
                {isFavorite ? (
                    <FaStar className="text-yellow-400 hover:text-yellow-500  " />
                ) : (
                    <FaRegStar className="text-yellow-400 hover:text-yellow-500" />
                )}
            </div>
            <div className=" flex flex-col justify-center items-center text-center p-10 m-4 bg-yellow-100 rounded-lg shadow-md text-2xl">
                <h1 className="font-bold">Energy Value: </h1>
                {!onEdit ? (
                    <div className="w-full h-full">{energyValue}</div>
                ) : (
                    <div className="w-full h-full">
                        <TextareaAutosize
                            minRows={1}
                            value={energyValue}
                            className="w-full h-full text-center"
                            onChange={handleInputChange}
                        ></TextareaAutosize>
                    </div>
                )}
                <div className=" flex justify-end text-xl text-white">
                    <span
                        onClick={handleEditClick}
                        className="bg-green-700 p-1 m-1 rounded-md hover:cursor-pointer"
                    >
                        {!onEdit ? <CiEdit /> : <FaCheck/>}
                    </span>
                    <span
                        onClick={handleDeleteButton}
                        className="bg-red-700 p-1 m-1  rounded-md hover:cursor-pointer"
                    >
                        <FaRegTrashAlt />
                    </span>
                </div>
            </div>
        </div>
    );
}
