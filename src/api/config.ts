export const useAPImocks = false;

const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env;
export const BASE_URL = `https://api.airtable.com/v0/${REACT_APP_DB_ID}`;

export const headers = {
  Authorization: `Bearer ${REACT_APP_API_KEY}`
};
