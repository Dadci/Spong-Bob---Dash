import React from "react";
import SpongCard from "./spongCard";

const SpongGallery = ({ characters, setCharacters }) => {
  return (
    <>

      {characters.length === 0 ? (<div className="flex items-start  justify-center w-screen h-screen">
        <h1 className="text-3xl text-blue-700 font-semibold mt-8 ">The list is empty</h1>
      </div>) : (<div className="grid grid-cols-3 grid-rows-2 w-full p-8">
        {characters.map((character) => (
          <SpongCard
            key={character.id}
            name={character.name}
            image={character.image}
            description={character.description}
            character={character}
            characters={characters}
            setCharacters={setCharacters}
          />
        ))}
      </div>)}
    </>

  );
};

export default SpongGallery;
