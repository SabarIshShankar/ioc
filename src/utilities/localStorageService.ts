import {debounce} from 'lodash';

export const createRecord = (key: string, value: string): {
    error?: string
} | void => {
    if(!key || !value){
        return {
            error: 'Store to local storage failed.'
        };
    }
    localStorage.setItem(key, value);
};

export const readRecord = (key: string): string | null => {
    return localStorage.getItem(key);
};

export const updateRecord = (key: string, value: string): {
    error?: string
} | void => {
    if(!key || !value) {
        return {
            error: 'Store to local storage failed'
        };
    }
    localStorage.setItem(key, value);
};
export const deleteRecord = (key: string): {
    error?: string
} | void => {
    if(!key){
        return {
            error: 'Delete from local storage. Invalid key'
        };
    }
    localStorage.removeItem(key)
}

export const clearAll = (): void => localStorage.clear();

export const hasStoredItem = (): boolean => localStorage.length > 0;

export const isLocalStoragesupported = (): boolean => !!window.localStorage;
