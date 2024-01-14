import { useEffect } from 'react';
import { Button } from "@nextui-org/button";

interface Logo {
    name: string;
    domain: string;
    icon: string | null;
}
interface InsertLogoButtonProps {
    selectedLogos: Logo[];
}
// InsertLogoButton Component Definition
const InsertLogoButton: React.FC<InsertLogoButtonProps> = ({ selectedLogos }) => {
  
    // Function to insert a logo image into the PowerPoint slide
    const insertLogo = async (image: string) => {
      try {
        // Using Office.js API to set selected data (image) into PowerPoint slide
        Office.context.document.setSelectedDataAsync(
          image,
          { coercionType: Office.CoercionType.Image },
          (asyncResult: Office.AsyncResult<void>) => {
            // Handling success and failure scenarios
            if (asyncResult.status === Office.AsyncResultStatus.Failed) {
              console.error('Failed to insert image:', asyncResult.error.message);
            } else {
              console.log('Image inserted successfully.');
            }
          }
        );
      } catch (error) {
        console.error('Error inserting image:', error);
      }
    };
  
    // Function to handle inserting selected logos into PowerPoint
    const handleInsertLogoToPowerPoint = () => {
      // Checking if Office.js is initialized
      if (window.Office) {
        // Iterating over selected logos and inserting each logo's image
        selectedLogos.forEach((logo) => {
          const imageUrl = logo.icon || 'default-image-url'; // Using default URL if icon is null
          insertLogo(imageUrl); // Calling insertLogo function
        });
      } else {
        console.error('Office.js is not initialized.');
      }
    };
  
    // useEffect hook to handle Office.js initialization and button event
    useEffect(() => {
      // Office.onReady to detect PowerPoint host
      Office.onReady((info) => {
        if (info.host === Office.HostType.PowerPoint) {
          // Hiding sideload message and displaying the main app body
          var sideloadMsg = document.getElementById('sideload-msg');
          var appBody = document.getElementById('app-body');

          if (sideloadMsg && appBody) {
            sideloadMsg.style.display = 'none';
            appBody.style.display = 'flex';

                // Adding event listener for the NextUI Button component using onPress
                var insertImageBtn = document.getElementById('insert-image');
                if (insertImageBtn) {
                    insertImageBtn.addEventListener('press', handleInsertLogoToPowerPoint);
                }
            }
        }
      });
    }, []); // Empty dependency array ensures this useEffect runs once on component mount
  
    // Rendering the NextUI Button component with onPress event handler
    return (
      <Button id="insert-image" onPress={handleInsertLogoToPowerPoint}>
        Insert Logo
      </Button>
    );
};

export default InsertLogoButton; // Exporting InsertLogoButton component
