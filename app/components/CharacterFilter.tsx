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
    <div className="flex space-x-4 mb-4">
      <select
        className="border p-2"
        value={status}
        onChange={(e) => setStatus(e.target.value || undefined)}
      >
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        className="border p-2"
        value={gender}
        onChange={(e) => setGender(e.target.value || undefined)}
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleApplyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
}
