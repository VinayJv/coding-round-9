import { createContext,useContext, useState } from "react";
import { database } from "../Database/Data";

const DataContext = createContext(null);

export function ContextWrapper({children}){
    const [data,setData] = useState(database);
    return(<DataContext.Provider value={{data, setData}}>{children}</DataContext.Provider>)
}

export const useDataContext = () => useContext(DataContext);