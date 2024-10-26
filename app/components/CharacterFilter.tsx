import "../globals.css";

interface CharacterFilterProps {
  initialStatus?: string;
  initialGender?: string;
}

export default function CharacterFilter({
  initialStatus,
  initialGender,
}: CharacterFilterProps) {
  return (
    <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
      <select
        name="status"
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-gray-800 font-semibold w-full sm:w-auto"
        defaultValue={initialStatus}
      >
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        name="gender"
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-gray-800 font-semibold w-full sm:w-auto"
        defaultValue={initialGender}
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200 font-bold w-full sm:w-auto"
      >
        Apply Filters
      </button>
    </form>
  );
}
