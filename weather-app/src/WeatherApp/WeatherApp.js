import axios from "axios";

const apiBaseUrl = `https://api.openweathermap.org/data/2.5/&appid=${process.env.REACT_API_KEY}&units=metric`;

async function fetchDataApi() {
  try {
    const response = await axios.get(apiBaseUrl);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données météorologiques :', error);
    throw error;
  }
}

export default fetchDataApi;
