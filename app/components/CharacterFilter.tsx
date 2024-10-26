"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";

interface CharacterFilterProps {
  initialStatus?: string;
  initialGender?: string;
}

export default function CharacterFilter({
  initialStatus,
  initialGender,
}: CharacterFilterProps) {
  const [status, setStatus] = useState<string | undefined>(initialStatus);
  const [gender, setGender] = useState<string | undefined>(initialGender);
  const router = useRouter();

  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    if (status) params.append("status", status);
    if (gender) params.append("gender", gender);
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
      <select
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-gray-800 font-semibold w-full sm:w-auto"
        value={status}
        onChange={(e) => setStatus(e.target.value || undefined)}
      >
        <option value="" disabled>
          Status
        </option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-gray-800 font-semibold w-full sm:w-auto"
        value={gender}
        onChange={(e) => setGender(e.target.value || undefined)}
      >
        <option value="" disabled>
          Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <button
        className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200 font-bold w-full sm:w-auto"
        onClick={handleApplyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
}
