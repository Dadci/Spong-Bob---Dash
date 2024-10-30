import React from 'react'

const EditForm = ({ newImage, newName, newDescription, editMode, editCharacter, setNewImage, setNewName, setNewDescription }) => {
    return (
        <div
            className="flex flex-col items-center justify-start gap-4 p-8 m-4 bg-blue-100 rounded-lg transition duration-500 ease-in-out transform hover:bg-blue-200 "
        >
            <div className="w-full flex flex-col items-center justify-center gap-2 ">

                <label className=" self-start text-sm font-medium text-blue-950" htmlFor="name">Image URL</label>
                <input type="text" value={newImage} onChange={(e) => setNewImage(e.target.value)} className="w-full rounded text-blue-950 text-sm p-2 border-2  border-gray-100 " />


                <label className=" self-start text-sm font-medium text-blue-950" htmlFor="name">Name</label>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} className="w-full rounded text-blue-950 text-sm p-2 border-2  border-gray-100 " />

                <label className=" self-start text-sm font-medium text-blue-950" htmlFor="description">Description</label>
                <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} className="w-full rounded text-blue-950 p-2 text-sm border-2 border-gray-100" />

            </div>

            <div className="flex items-center justify-items-start gap-2 w-full">
                <button
                    className="px-4 py-2 self-start text-sm font-medium text-white bg-gray-600 rounded-lg"
                    onClick={() => editMode()}
                >
                    Cancel
                </button>
                <button
                    className="px-4 py-2 self-start text-sm font-medium text-white bg-green-500 rounded-lg"
                    onClick={editCharacter}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default EditForm