import React from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { FlagIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Tab, Tabs } from "@nextui-org/tabs";

const OptionTabs: React.FC = () => {
    const [selected, setSelected] = React.useState("")

    // Custom function to handle tab selection
    const handleSelectionChange = (newSelectedKey: React.Key) => {
    setSelected(newSelectedKey as string); // Assuming React.Key is compatible with string
    };

    return (
        <div className="flex w-full flex-col">
            <Tabs
                aria-label="Options"
                selectedKey = {selected}
                onSelectionChange = {handleSelectionChange}
                >
                <Tab 
                    key="logos"
                    title={
                        <div className="flex items-center space-x-2"> 
                          <PhotoIcon/>
                          <span>Logos</span>
                        </div>
                      }
                />
                <Tab 
                    key="flags"
                    title={
                        <div className="flex items-center space-x-2">
                          <FlagIcon/>
                          <span>Flags</span>
                        </div>
                      }
                />
                <Tab 
                    value="icons"
                    title={
                        <div className="flex items-center space-x-2">
                          <CheckCircleIcon/>
                          <span>Icons</span>
                        </div>
                      }
                />
            </Tabs>
        </div>
    )
}

export default OptionTabs;