// app/page.tsx
import CharacterFilter from "./components/CharacterFilter";
import CharacterList from "./components/CharacterList";
import { fetchCharacters } from "./api/fetchCharacters";

export interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
}

const HomePage = async ({
  searchParams,
}: {
  searchParams: { status?: string; gender?: string };
}) => {
  const { status, gender } = await searchParams;
  const initialCharacters: Character[] = await fetchCharacters({
    status,
    gender,
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Rick and Morty Characters</h1>
      <CharacterFilter initialStatus={status} initialGender={gender} />
      <CharacterList characters={initialCharacters} />
    </div>
  );
};

export default HomePage;
