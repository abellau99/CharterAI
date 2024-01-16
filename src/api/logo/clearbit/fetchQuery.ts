// Refer to https://dashboard.clearbit.com/docs#autocomplete-api for API documentation

export const fetchClearbitQuery = async (searchValue: string): Promise<any[]> => {
  try {
    // Fetch data from API based on the searchValue
    const response = await fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${searchValue}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch data from Clearbit API. Status: ${response.status}`);
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error in fetchClearbitQuery:', error.message);
    return []; // Return an empty array if there's an error
  }
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