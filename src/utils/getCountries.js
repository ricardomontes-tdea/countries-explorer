const FIELDS = "name,flags,population,region,capital,languages,borders,area,subregion";

const API_URL = `https://restcountries.com/v3.1/all?fields=${FIELDS}`;

export const getCountries = async () => {
  const response = await fetch(API_URL);
  
  if(!response.ok) throw new Error("Error en la respuesta del servidor");

  const data = await response.json();  

  return data;
};
