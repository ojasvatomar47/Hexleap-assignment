// Sets a value in localStorage
export const setLocalStorageItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

// Retrieves a value from localStorage
export const getLocalStorageItem = (key: string): any => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};
