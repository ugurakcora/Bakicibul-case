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

interface HomePageProps {
  searchParams: { status?: string; gender?: string };
}

export default async function HomePage({
  searchParams: initialSearchParams,
}: HomePageProps) {
  const { status, gender } = await initialSearchParams;

  const initialCharacters = await fetchCharacters({ status, gender });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Rick and Morty Characters</h1>
      <CharacterFilter initialStatus={status} initialGender={gender} />
      <CharacterList characters={initialCharacters} />
    </div>
  );
}
