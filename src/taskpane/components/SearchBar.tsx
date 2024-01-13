import React from "react";
import { useState } from "react";
import { Autocomplete, AutocompleteItem, Avatar} from "@nextui-org/react";
import { fetchQuery } from "../../api/brandfetch/fetchQuery";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


const SearchBar: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [options, setOptions] = useState<any[]>([]); // Define type for options based on API response
  
    const handleInputChange = async (value: string) => {
      setInputValue(value);
      if (value.trim() === '') {
        setOptions([]);
        return;
      }
      
      // Fetch data from API using the fetchQuery utility function
      const data = await fetchQuery(value);
      setOptions(data); // Set the fetched data as options
    };


return (
    <Autocomplete
        defaultItems = {options}
        className="max-w-xs"
        value={inputValue}
        onInputChange={handleInputChange}
        placeholder="Enter company name or domain"
        startContent={<MagnifyingGlassIcon className = "test-xl"/>}
        // label="Search"
        // variant="bordered"
    >
      {(brands) => (
        <AutocompleteItem key={brands.name}>
          <div className="flex gap-2 items-center">
            <Avatar alt={brands.name} className="flex-shrink-0" size="sm" src={brands.icon} />
            <div className="flex flex-col">
              <span className="text-small">{brands.name}</span>
              <span className="text-tiny text-default-400">{brands.domain}</span>
            </div>
          </div>
        </AutocompleteItem>
      )}
    </Autocomplete>
);
};

export default SearchBar;