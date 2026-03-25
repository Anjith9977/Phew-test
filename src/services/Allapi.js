import commonAPI from "./CommonApi";
import SERVER_URL from "./service_url";


export const getMenusApi = async () => {
  return await commonAPI("GET", `${SERVER_URL}/getMenu`);
};

export const getItemsApi = async (id) => {
  return await commonAPI("GET", `${SERVER_URL}/getItems/${id}`);
};

export const addMenuApi = async (reqbody) => {
  return await commonAPI("POST", `${SERVER_URL}/createMenu`, reqbody);
};

export const addItemApi = async (reqbody) => {
  return await commonAPI("POST", `${SERVER_URL}/createItem`, reqbody);
};