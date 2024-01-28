import { createContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    let [data, setData] = useState({data:{}, loading:false});

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;