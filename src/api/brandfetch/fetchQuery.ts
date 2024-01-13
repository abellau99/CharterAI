// Refer to https://docs.brandfetch.com/reference/search-brand for API documentation

export const fetchQuery = async (searchValue: string): Promise<any[]> => {
  // Fetch data from API based on the searchValue
  const response = await fetch(`https://api.brandfetch.io/v2/search/${searchValue}`);
  const data = await response.json();
  return data; // Assuming API returns an array of brand objects
};


/* Example response from the query 
[
  {
    "claimed": false,
    "name": "Google",
    "domain": "google.com",
    "icon": "https://asset.brandfetch.io/search/icon/id6O2oGzv-/idNEgS9h8q/1692272065756",
    "brandId": "id6O2oGzv-"
  },
  {
    "claimed": false,
    "name": "Google",
    "domain": "google.co.in",
    "icon": null,
    "brandId": "ide1LOmubR"
  },
  {
    "claimed": false,
    "name": "Google",
    "domain": "google.com.br",
    "icon": "https://asset.brandfetch.io/search/icon/id5mnb40hS/idPcCPYWUG/1700909353026",
    "brandId": "id5mnb40hS"
  },
  {
    "claimed": false,
    "name": "Google",
    "domain": "google.co.jp",
    "icon": "https://asset.brandfetch.io/search/icon/idpTHPiSzL/idOy-GTR7o/1701964524236",
    "brandId": "idpTHPiSzL"
  },
  {
    "claimed": false,
    "name": "Google",
    "domain": "google.de",
    "icon": "https://asset.brandfetch.io/search/icon/idc-4kdtk4/idDYFvjeFV/1686426772519",
    "brandId": "idc-4kdtk4"
  }
] */

