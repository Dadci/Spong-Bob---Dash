import React, { useState } from "react";
import EditForm from "./EditForm";

const SpongCard = ({ image, name, description, characters, setCharacters, character, }) => {
    const [showDescription, setShowDescription] = useState(false);
    const [edit, setEdit] = useState(false);
    const [newImage, setNewImage] = useState(image);
    const [newName, setNewName] = useState(name);
    const [newDescription, setNewDescription] = useState(description);

    const toggleDescription = () => setShowDescription(!showDescription);
    const deleteCharacter = (character) => {
        const newCharacters = characters.filter((cha) => cha !== character);
        setCharacters(newCharacters);
    };

    const editMode = () => {
        setEdit(!edit);
    };

    const editCharacter = () => {

        const newCharacters = characters.map((cha) => {
            if (cha.id === character.id) {
                return { ...cha, name: newName, description: newDescription, image: newImage };
            }
            return cha;
        }
        );
        setCharacters(newCharacters);
        setEdit(false);


        if (newName === "" || newDescription === "" || newImage === "") {
            alert("Please fill all the fields");
        }



    };

    return (
        <div>
            {!showDescription ? (
                <div
                    className="flex flex-col items-center justify-start p-4 m-4 bg-blue-100 rounded-lg cursor-pointer transition duration-500 ease-in-out transform hover:bg-blue-200 "
                    onClick={toggleDescription}
                >
                    <img src={image} alt={name} className="w-56" />
                </div>
            ) : edit ? (

                <EditForm newImage={newImage} newName={newName} newDescription={newDescription} setNewImage={setNewImage} setNewName={setNewName} setNewDescription={setNewDescription} editCharacter={editCharacter} editMode={editMode} />
                // <div
                //     className="flex flex-col items-center justify-start gap-4 p-8 m-4 bg-blue-100 rounded-lg transition duration-500 ease-in-out transform hover:bg-blue-200 "
                // >
                //     <div className="w-full flex flex-col items-center justify-center gap-2 ">

                //         <label className=" self-start text-sm font-medium text-blue-950" htmlFor="name">Image URL</label>
                //         <input type="text" value={newImage} onChange={(e) => setNewName(e.target.value)} className="w-full rounded text-blue-950 text-sm p-2 border-2  border-gray-100 " />


                //         <label className=" self-start text-sm font-medium text-blue-950" htmlFor="name">Name</label>
                //         <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} className="w-full rounded text-blue-950 text-sm p-2 border-2  border-gray-100 " />

                //         <label className=" self-start text-sm font-medium text-blue-950" htmlFor="description">Description</label>
                //         <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} className="w-full rounded text-blue-950 p-2 text-sm border-2 border-gray-100" />

                //     </div>

                //     <div className="flex items-center justify-items-start gap-2 w-full">
                //         <button
                //             className="px-4 py-2 self-start text-sm font-medium text-white bg-gray-600 rounded-lg"
                //             onClick={() => editMode()}
                //         >
                //             Cancel
                //         </button>
                //         <button
                //             className="px-4 py-2 self-start text-sm font-medium text-white bg-green-500 rounded-lg"
                //             onClick={editCharacter}
                //         >
                //             Save
                //         </button>
                //     </div>
                // </div>
            ) : (
                <div
                    className="flex flex-col items-center justify-start gap-4 p-8 m-4 bg-blue-100 rounded-lg transition duration-500 ease-in-out transform hover:bg-blue-200 "
                >
                    <img src={image} alt={name} className="w-36" onClick={toggleDescription} />
                    <div className="flex flex-col items-center justify-start gap-1">
                        <h2 className="text-lg font-bold self-start text-blue-950">{name}</h2>
                        <p className="text-sm text-blue-800">{description}</p>
                    </div>
                    <div className="flex items-center justify-items-start gap-2 w-full">
                        <button
                            className="px-4 py-2 self-start text-sm font-medium text-white bg-red-500 rounded-lg"
                            onClick={() => deleteCharacter(character)}
                        >
                            Delete
                        </button>
                        <button
                            className="px-4 py-2 self-start text-sm font-medium text-white bg-blue-800 rounded-lg"
                            onClick={editMode}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpongCard;