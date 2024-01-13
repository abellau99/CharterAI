import { useState } from 'react';
import { Button } from "@nextui-org/react";

interface InsertLogoButtonProps {
    selectedLogos: Logo[];
  }

const InsertLogoButton: React.FC = () => {
    const handleInsertLogo = () => {
      // Logic to insert the selected logo into the PowerPoint slide or perform any other action
      console.log('Inserting logo...');
    };
  
    return (
      <Button onClick={handleInsertLogo} auto>
        Insert Logo
      </Button>
    );
  };
  
  export default InsertLogoButton;