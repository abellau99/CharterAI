import * as React from "react";
import { useState } from 'react';
import {NextUIProvider} from "@nextui-org/system";

import OptionTabs from "./components/Tabs";
import SearchBar from "./components/SearchBar";
import SelectedLogos from './components/SelectedLogos';
import InsertLogoButton from './components/InsertLogoButton';

// Defining the type for a Logo object
interface Logo {
  name: string;
  domain: string;
  icon: string | null;
}

const App: React.FC = () => {
  // State to store selected logos
  const [selectedLogos, setSelectedLogos] = useState<Logo[]>([]); // Initializing state with an empty array of logos

  // Function to handle the selection of logos
  const handleSelectLogo = (logo: Logo) => {
    setSelectedLogos(prevSelectedLogos => [...prevSelectedLogos, logo]); // Adding the selected logo to the array of selected logos
  };

  return (
    <NextUIProvider>
      <div className="p-4 space-y-2">
        <OptionTabs />
        <SearchBar onSelectLogo={handleSelectLogo}/>
        <SelectedLogos selectedLogos={selectedLogos}/>
        <InsertLogoButton selectedLogos={selectedLogos}/>
      </div>
    </NextUIProvider>
  );
};

export default App;
