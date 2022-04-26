export { createContext, useContext } from 'react';
import useLocalStorage from './useLocalStorage';

const dataContext = createContext();

export function DataProvider({ children }) {
	const data = useLocalStorage('data', {
		cart: {},
		history: {},
	});

	return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export function useData() {
	return useContext(dataContext);
}
