import { useState } from "react";
import Header from "./components/Header";
import SpongGallery from "./components/SpongGallery";

function App() {
  const [spongeBobCharacters, setSpongBobCharacters] = useState([
    {
      id: 1,
      name: "SpongeBob",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png",
      description:
        "A yellow sponge who works as a fry cook at the Krusty Krab and lives in a pineapple under the sea. Known for his optimism and enthusiasm",
    },
    {
      id: 2,
      name: "Patrick Star",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png",
      description:
        "A pink starfish who is SpongeBob's best friend. Lives under a rock and is known for his simple-mindedness and silly personality",
    },
    {
      id: 3,
      name: "Squidward Tentacles",
      image:
        "https://static.wikia.nocookie.net/spongebob/images/d/dc/Patrick_Star_Show_Squidward.png",
      description:
        "A turquoise octopus who works as a cashier at the Krusty Krab, loves playing clarinet, and is SpongeBob's grumpy neighbor",
    },
    {
      id: 4,
      name: "Mr.Krabs",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/1200px-Mr._Krabs.svg.png",
      description:
        "A greedy red crab who owns the Krusty Krab restaurant and loves money. Lives in an anchor with his whale daughter Pearl",
    },
    {
      id: 5,
      name: "Sandy Cheeks",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/1200px-Sandy_Cheeks.svg.png",
      description:
        "A scientist squirrel from Texas who lives in an underwater dome. She's an expert in karate and inventing",
    },
    {
      id: 6,
      name: "Plankton",
      image:
        "https://static.wikia.nocookie.net/spongebob/images/7/77/Plankton_stock_art.png",
      description:
        "A tiny green plankton who owns the Chum Bucket restaurant and constantly tries to steal the Krabby Patty formula",
    },
  ]);

  return (
    <>
      <Header />
      <SpongGallery characters={spongeBobCharacters} setCharacters={setSpongBobCharacters} />
    </>
  );
}

export default App;
