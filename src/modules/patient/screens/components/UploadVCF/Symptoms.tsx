// dependencies
import React, { useState } from "react";
import { Info, MagnifyingGlass } from "@phosphor-icons/react";

// store
import { usePatientStore } from "@/globalStore";
import { Symptom } from "@/modules/patient/types/patientTypes";

const Symptoms: React.FC = () => {
  const { symptoms, selectedSymptoms, setSelectedSymptoms } = usePatientStore();

  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [filteredSymptoms, setFilteredSymptoms] = useState<Symptom[]>([]);
  const [query, setQuery] = useState("");

  // search symptom by query
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setQuery(userInput);

    if (userInput.length > 0) {
      const filtered = symptoms
        .filter(
          (suggestion) =>
            (suggestion.name.toLowerCase().includes(userInput.toLowerCase()) ||
              (suggestion.synonyms &&
                suggestion.synonyms
                  .toLowerCase()
                  .includes(userInput.toLowerCase()))) &&
            !selectedSymptoms.find((item) => item.name === suggestion.name)
        )
        .slice(0, 10);

      setFilteredSymptoms(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSymptoms([]);
      setShowSuggestions(false);
    }
  };

  const handleSymptomClick = (suggestion: Symptom) => {
    const isItemSelected = selectedSymptoms.find(
      (item) => item.hpoid === suggestion.hpoid
    );

    // If the item is already selected, remove it
    if (isItemSelected) {
      const selectedItemsCopy = [...selectedSymptoms];
      const updatedItems = selectedItemsCopy.filter(
        (item) => item.hpoid !== suggestion.hpoid
      );

      setSelectedSymptoms(updatedItems);
    }
    // If the item is not selected, add it
    else {
      const selectedItemsCopy = [...selectedSymptoms];

      const updatedItems = [...selectedItemsCopy, suggestion];

      setSelectedSymptoms(updatedItems);
    }

    setQuery("");
    setFilteredSymptoms([]);
    setShowSuggestions(false);
  };

  return (
    <div>
      <p>Symptoms</p>
      <div className="flex w-full flex-col gap-5 mt-0.5">
        <div className="relative w-full">
          <div
            className="flex gap-x-2 items-center p-3 bg-blue-50 rounded-lg"
            style={{ paddingBottom: 10, marginBottom: 5 }}
          >
            <Info size={30} />
            <span className="text-blue-900 text-xs">
              We are retrieving symptoms from the report. You may add additional
              symptoms from the list below.
            </span>
          </div>

          <div className="relative flex-1 mt-4">
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Type to search..."
              className="border rounded pl-10 pr-4 py-2 w-full"
            />
            <MagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {showSuggestions && (
            <ul className="absolute w-full z-[99]">
              {filteredSymptoms.map((suggestion) => (
                <li
                  key={suggestion.hpoid}
                  onClick={() => handleSymptomClick(suggestion)}
                  className="suggestion-item cursor-pointer"
                >
                  <span className="suggestion-name">{suggestion.name}</span>
                  <span className="suggestion-synonyms">
                    {suggestion.synonyms}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {selectedSymptoms.map((item) => (
        <div key={item.hpoid} className="selected-item">
          <div className="selected-item-header">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={true}
                onChange={() => handleSymptomClick(item)}
                className="mr-2"
              />
              <p>{item.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Symptoms;
