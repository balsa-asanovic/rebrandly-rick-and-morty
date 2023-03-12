import { createContext, useState } from "react";

const PageContext = createContext({});

export const PageProvider = ({ children }) => {
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState(0)

    return (
        <PageContext.Provider value={{ page, setPage, numOfPages, setNumOfPages }}>{children}</PageContext.Provider>
    )
};

export default PageContext;