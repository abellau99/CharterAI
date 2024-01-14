import React from "react";
import { useState, useCallback, useEffect } from "react";
import { debounce } from "lodash/debounce";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Avatar } from "@nextui-org/avatar";
import { fetchQuery } from "../../api/brandfetch/fetchQuery";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Logo {
  name: string;
  domain: string;
  icon: string | null;
}
interface BrandAutocompleteProps {
  onSelectLogo: (logo: Logo) => void;
}

const SearchBar: React.FC<BrandAutocompleteProps> = ({ onSelectLogo }) => {
  const [inputValue, setInputValue] = useState<string>(''); 
  const [options, setOptions] = useState<Logo[]>([]);  // Update options based on input value

  const handleInputChange = async (value: string) => {
    setInputValue(value);
    if (value.trim() === '') {
      setOptions([]);
      return;
    }
      
    // Fetch data from API using the fetchQuery utility function
    const data: Logo[] = await fetchQuery(value);
    setOptions(data); // Set the fetched data as options
  };
  
  const handleSelectItem = (logo: Logo) => {
    onSelectLogo(logo);
  };


return (
    <Autocomplete
        className="max-w-xs"
        defaultItems = {options}
        value={inputValue}
        onInputChange={handleInputChange}
        placeholder="Enter company name or domain"
        startContent={<MagnifyingGlassIcon className="w-6 h-6"/>}
        // label="Search"
        // variant="bordered"
      >
      {options.map((brand, index) => (
        <AutocompleteItem key={index} value={brand.domain} onClick={() => handleSelectItem(brand)}>
          <div className="flex gap-2 items-center">
            <Avatar alt={brand.name} className="flex-shrink-0" size="sm" src={brand.icon} />
            <div className="flex flex-col">
              <span className="text-small">{brand.name} </span>
              <span className="text-tiny text-default-400">{brand.domain}</span>
            </div>
          </div>
        </AutocompleteItem>
      ))}
    </Autocomplete>
);
};

export default SearchBar;