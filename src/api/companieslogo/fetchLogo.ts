export const fetchQuery = async (domainName: string): Promise<any[]> => {
    // Retrieve the Bearer token from the environment variable
    const bearerToken = process.env.COMPANIESLOGO_KEY;
    // Ensure the Bearer token is available
    if (!bearerToken) {
        throw new Error('Bearer token is not defined in the environment variables.');
    }

    // Fetch data from API based on the domainName
    const response = await fetch(`https://companieslogo.com/api/1.0/?website_domain=${domainName}&api_key=${bearerToken}`);
    const data = await response.json();
    return data; 
  };


/* This is the sample response 
{
    "name": "Editas Medicine",
    "symbol": "EDIT",
    "country": "United States",
    "website_domain": "editasmedicine.com",
    "last_update": "1633227240",
    "png": {
        "icon": {
            "for_bright_background": {
                "32": "\/img2\/32\/EDIT-e3b1018c13ec6d39f1a1fb-da66d47b.png?t=1662767908",
                "64": "\/img2\/64\/EDIT-e3b1018c13ec6d39f1a1fb-b113c844.png?t=1662767908",
                "80": "\/img2\/80\/EDIT-e3b1018c13ec6d39f1a1fb-2c2d7be1.png?t=1662767908",
                "128": "\/img2\/128\/EDIT-e3b1018c13ec6d39f1a1fb-b63fa4a9.png?t=1662767908",
                "orig": "\/img2\/orig\/EDIT-e3b1018c13ec6d39f1a1fb-0f583109.png?t=1662767908"
            },
            "for_dark_background": {
                "32": "\/img2\/32\/EDIT.D-e3b1018c13ec6d39f1a1fb-bce0c6da.png?t=1662767908",
                "64": "\/img2\/64\/EDIT.D-e3b1018c13ec6d39f1a1fb-ed24e995.png?t=1662767908",
                "80": "\/img2\/80\/EDIT.D-e3b1018c13ec6d39f1a1fb-fb2dba68.png?t=1662767908",
                "128": "\/img2\/128\/EDIT.D-e3b1018c13ec6d39f1a1fb-19b50e1d.png?t=1662767908",
                "orig": "\/img2\/orig\/EDIT.D-e3b1018c13ec6d39f1a1fb-97ac7208.png?t=1662767908"
            }
        },
        "big": {
            "for_bright_background": {
                "192": "\/img2\/192\/EDIT-e3b1018c13ec6d39f1a1fb-f430e58d.png?t=1662767908",
                "256": "\/img2\/256\/EDIT-e3b1018c13ec6d39f1a1fb-6816ee2e.png?t=1662767908",
                "512": "\/img2\/512\/EDIT-e3b1018c13ec6d39f1a1fb-8a586044.png?t=1662767908",
                "orig": "\/img2\/orig\/EDIT_BIG-e3b1018c13ec6d39f1a1fb-1a31e4dc.png?t=1662767908"
            },
            "for_dark_background": {
                "192": "\/img2\/192\/EDIT_BIG.D-e3b1018c13ec6d39f1a1fb-75e341be.png?t=1662767908",
                "256": "\/img2\/256\/EDIT_BIG.D-e3b1018c13ec6d39f1a1fb-f31bba14.png?t=1662767908",
                "512": "\/img2\/512\/EDIT_BIG.D-e3b1018c13ec6d39f1a1fb-3afadcdb.png?t=1662767908",
                "orig": "\/img2\/orig\/EDIT_BIG.D-e3b1018c13ec6d39f1a1fb-b0a84f35.png?t=1662767908"
            }
        }
    }
}

*/