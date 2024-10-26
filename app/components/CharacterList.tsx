import { Character } from "../page";
import Image from "next/image";
import "../globals.css";

interface CharacterListProps {
  characters: Character[];
}

const CharacterList = ({ characters }: CharacterListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map((character) => (
        <div
          key={character.id}
          className="border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
        >
          <Image
            src={character.image}
            alt={character.name}
            width={500}
            height={300}
            className="mb-2 rounded"
          />
          <h2 className="font-bold text-lg">{character.name}</h2>
          <p className="text-gray-600">Status: {character.status}</p>
          <p className="text-gray-600">Gender: {character.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
