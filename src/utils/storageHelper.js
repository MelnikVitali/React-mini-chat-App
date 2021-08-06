export const getStorage = (key) => JSON.parse(sessionStorage.getItem(key));
export const setStorage = (key, data) => sessionStorage.setItem(key, JSON.stringify(data,  null, 2));