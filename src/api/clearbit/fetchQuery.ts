export const fetchQuery = async (searchValue: string): Promise<any[]> => {
  // Fetch data from API based on the searchValue
  const response = await fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${searchValue}`);
  const data = await response.json();
  return data; 
};


/* This is the sample response 
[
  {
    "name": "Segment",
    "domain": "segment.com",
    "logo": "https://logo.clearbit.com/segment.com"
  },
  {
    "name": "Segmentify",
    "domain": "segmentify.com",
    "logo": "https://logo.clearbit.com/segmentify.com"
  }
]
*/