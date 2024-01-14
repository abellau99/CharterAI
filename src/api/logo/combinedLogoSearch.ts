import { fetchBrandfetchQuery } from './brandfetch/fetchQuery';
import { fetchClearbitQuery } from './clearbit/fetchQuery';

export const combinedLogoSearch = async (searchValue: string): Promise<any[]> => {
    // Call the first API
    const brandFetchResults = await fetchBrandfetchQuery(searchValue);
  
    // Call the second API
    const clearbitResults = await fetchClearbitQuery(searchValue);
  
    // Combine and return the results
    const combinedResults = [...brandFetchResults, ...clearbitResults];

    // Remove results where both icon and logo are null
    const filteredResults = combinedResults.filter(result => result.icon !== null || result.logo !== null);

    // Remove results that have the same domain
    const uniqueResults = deduplicateByDomain(filteredResults);

    // Streamline the data to include only name, domain, and image
    const streamlinedResults = uniqueResults.map(result => ({
        name: result.name,
        domain: result.domain,
        icon: result.icon || result.logo, // Use icon for BrandFetch, logo for Clearbit
    }));

    return streamlinedResults;
  };


const deduplicateByDomain = (results: any[]): any[] => {
    const uniqueResults = [];
    const seenDomains = new Set();
    
    // Remove result if the domain is already present
    for (const result of results) {
      const domain = result.domain;
  
      if (!seenDomains.has(domain)) {
        seenDomains.add(domain);
        uniqueResults.push(result);
      }
    }
  
    return uniqueResults;
  };