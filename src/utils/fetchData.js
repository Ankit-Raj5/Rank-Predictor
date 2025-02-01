const axios = require("axios");

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    throw new Error("Failed to fetch data.");
  }
};

module.exports = fetchData;
