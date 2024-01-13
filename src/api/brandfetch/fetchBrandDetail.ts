

export const fetchBrandDetails = async (domainName: string): Promise<any[]> => {
    // Retrieve the Bearer token from the environment variable
    const bearerToken = process.env.BRANDFETCH_KEY;
    // Ensure the Bearer token is available
    if (!bearerToken) {
        throw new Error('Bearer token is not defined in the environment variables.');
    }

    // Define the options for the fetch request
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        }
    };
    
    // Fetch data from API based on the searchValue
    const response = await fetch(`https://api.brandfetch.io/v2/brands/${domainName}`, options);
    const data = await response.json();
    return data; // Return the fetched data
  }

/* This is the sampel API response
{
    "name": "Brandfetch",
    "domain": "brandfetch.com",
    "claimed": true,
    "description": "Brandfetch is the home for the world's brands. Discover the latest logos, colors, fonts and more.",
    "longDescription": "Brandfetch is a tool that allows users to easily fetch logo images, color codes, and other brand assets for various companies. By inputting a domain name, Brandfetch returns the company's logo, primary colors, and sometimes additional branding information. This streamlined process aids marketers, designers, developers, and other professionals in quickly acquiring branding assets without the need to manually sift through a company's website or branding guidelines. The platform is especially beneficial for those crafting presentations, websites, apps, or any other visual content where brand consistency and accuracy are of utmost importance.",
    "links": [
      {
        "name": "twitter",
        "url": "https://twitter.com/brandfetch"
      },
      {
        "name": "linkedin",
        "url": "https://linkedin.com/company/brandfetch"
      }
    ],
    "logos": [
      {
        "theme": "light",
        "formats": [
          {
            "src": "https://asset.brandfetch.io/idL0iThUh6/id9WE9j86h.svg",
            "background": "transparent",
            "format": "svg",
            "size": 15555
          },
          {
            "src": "https://asset.brandfetch.io/idL0iThUh6/idaYlPM852.webp",
            "background": "transparent",
            "format": "webp",
            "height": 546,
            "width": 2031,
            "size": 34794
          }
        ],
        "tags": [],
        "type": "logo"
      },
      {
        "theme": "dark",
        "formats": [
          {
            "src": "https://asset.brandfetch.io/idL0iThUh6/idWbsK1VCy.png",
            "background": "transparent",
            "format": "png",
            "height": 215,
            "width": 800,
            "size": 33937
          },
          {
            "src": "https://asset.brandfetch.io/idL0iThUh6/idtCMfbWO0.svg",
            "background": "transparent",
            "format": "svg",
            "height": null,
            "width": null,
            "size": 15567
          }
        ],
        "tags": [],
        "type": "logo"
      },
      {
        "theme": "light",
        "formats": [
          {
            "src": "https://asset.brandfetch.io/idL0iThUh6/idXGq6SIu2.svg",
            "background": "transparent",
            "format": "svg",
            "size": 2215
          }
        ],
        "tags": [],
        "type": "symbol"
      },
      {
        "theme": "dark",
        "formats": [
          {
            "src": "https://asset.brandfetch.io/idL0iThUh6/iddCQ52AR5.svg",
            "background": "transparent",
            "format": "svg",
            "size": 2215
          }
        ],
        "tags": [],
        "type": "symbol"
      },
      {
        "theme": "dark",
        "formats": [
          {
            "src": "https://asset.brandfetch.io/idL0iThUh6/idls3LaPPQ.png",
            "background": null,
            "format": "png",
            "height": 400,
            "width": 400,
            "size": 2565
          }
        ],
        "tags": [],
        "type": "icon"
      }
    ],
    "colors": [
      {
        "hex": "#0084ff",
        "type": "accent",
        "brightness": 113
      },
      {
        "hex": "#00193E",
        "type": "brand",
        "brightness": 22
      },
      {
        "hex": "#F03063",
        "type": "brand",
        "brightness": 93
      },
      {
        "hex": "#7B0095",
        "type": "brand",
        "brightness": 37
      },
      {
        "hex": "#76CC4B",
        "type": "brand",
        "brightness": 176
      },
      {
        "hex": "#FFDA00",
        "type": "brand",
        "brightness": 210
      }
    ],
    "fonts": [
      {
        "name": "Poppins",
        "type": "title",
        "origin": "google",
        "originId": "Poppins",
        "weights": []
      },
      {
        "name": "Inter",
        "type": "body",
        "origin": "google",
        "originId": "Inter",
        "weights": []
      }
    ],
    "images": [
      {
        "formats": [
          {
            "src": "https://asset.brandfetch.io/idL0iThUh6/idUuia5imo.png",
            "background": "transparent",
            "format": "png",
            "height": 500,
            "width": 1500,
            "size": 5539
          }
        ],
        "tags": [],
        "type": "banner"
      }
    ]
  }
  */