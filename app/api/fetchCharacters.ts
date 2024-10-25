import axios from "axios";

interface CharacterFilters {
  status?: string;
  gender?: string;
}

export const fetchCharacters = async (filters: CharacterFilters = {}) => {
  const { status, gender } = filters;
  let url = "https://rickandmortyapi.com/api/character";
  const params = new URLSearchParams();

  if (status) params.append("status", status);
  if (gender) params.append("gender", gender);

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  const response = await axios.get(url);
  return response.data.results;
};
