import React from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { FlagIcon } from "@heroicons/react/24/outline";
import { CircleStackIcon } from "@heroicons/react/24/outline";
import {Tabs, Tab } from "@nextui-org/react";

export default const Tab = () => {
    return (
        <div className="flex w-full flex-col">
            <Tabs initialValue="tab1">
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
                          <CircleStackIcon/>
                          <span>Icons</span>
                        </div>
                      }
                />
            </Tabs>
        </div>
    )
}