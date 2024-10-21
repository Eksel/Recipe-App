import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { Reorder, useMotionValue } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import TextareaAutosize from 'react-textarea-autosize';

interface Props {
    content: string;
    id: number;
    handleUpdateSteps: (index: number, newValue: string) => void;
}

export default function StepsItem(props: Props) {
    const { content, id, handleUpdateSteps } = props;
    const [value, setValue] = useState(content);
    const [onEdit, setOnEdit] = useState(false);
    const y = useMotionValue(0);

    function handleEditClick() {
        setOnEdit((prev) => !prev);
        handleUpdateSteps(id, value);
    }
    function handleInputChange(e: any) {
        setValue(e.target.value);
        
    }
    function handleDeleteClick() {
        setValue("");
    }
    return (
        <Reorder.Item id={value} value={value} style={{ y }}>
            <div className="  p-2 m-1 my-3 rounded-md  bg-green-200 shadow-md ">
                <div className=" w-full h-full">
                    {!onEdit ? (
                        <div className="w-full h-full p-1">{value}</div>
                    ) : (
                        <div className="w-full h-full p-1">
                            <TextareaAutosize
                                value={value}
                                className="w-full h-full"
                                minRows={1}
                                onChange={handleInputChange}
                            ></TextareaAutosize>
                        </div>
                    )}
                </div>
                <div className=" flex text-xl text-white">
                    <span onClick={handleEditClick} className='bg-green-700 p-1 m-1 rounded-md hover:cursor-pointer'>
                        {!onEdit ? <CiEdit /> : <FaCheck/>}
                    </span>
                    <span onClick={handleDeleteClick} className='bg-red-700 p-1 m-1  rounded-md hover:cursor-pointer'>
                        <FaRegTrashAlt />
                    </span>
                </div>
            </div>
        </Reorder.Item>
    );
}
