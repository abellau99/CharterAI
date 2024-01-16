// searchLogoVariants.ts

// Import necessary fetch functions
import { fetchBrandfetchLogo } from "./brandfetch/fetchLogo";
import { fetchCompanieslogoLogo } from "./companieslogo/fetchLogo";
import { fetchVectorlogoLogo } from "./vectorlogo/fetchLogo";

// Define the Variant and Logo interfaces
interface Variant {
    type:'logo' | 'icon' | null;    
    theme: 'light' | 'dark' | null;
    format: 'png' | 'svg' | 'jpeg' | null; 
    background: 'transparent' | null; 
    src: string;
}

interface Logo {
    name: string;
    domain: string;
    icon: string;
    description: string | null;
    variants: Variant[];
  }

// Function to fetch variants for a given logo
export async function fetchLogoVariants(logo: Logo): Promise<Variant[]> {
    const { name, domain, icon } = logo;
    const variants: Variant[] = [];
  
    // Fetch Brandfetch variants and transform into standard Variant format
    const brandfetchVariants = await fetchBrandfetchLogo(domain);

    if (brandfetchVariants) {
        brandfetchVariants.logos.forEach((logo) => {
            if (logo.formats) {
                logo.formats.forEach((format) => {
                    const variant: Variant = {
                        type: logo.type || null,
                        theme: format.theme || null,
                        format: format.format || null,
                        background: format.background || null,
                        src: format.src || "",
                        description: null,
                    };
                    variants.push(variant);
                });
            }
        });
    }

    // Fetch Companieslogo variants and transform into standard Variant format
    const companieslogoVariants = await fetchCompanieslogoLogo(domain);

    // Fetch VectorLogo variants and transform into standard Variant format
    const vectorlogoVariants = await fetchVectorlogoLogo(name);
  
  
    // Add the main logo with the provided icon
    const mainLogoVariant: Variant = {
      type: 'logo',
      theme: 'light', // Assuming a default theme for the main logo
      format: 'png', // Assuming a default format for the main logo
      background: 'transparent', // Assuming a default background for the main logo
      src: icon,
      description: 'Main logo variant',
    };
  
    // Add the main logo variant to the beginning of the array
    variants.unshift(mainLogoVariant);
  
    return variants;
  }
}
  