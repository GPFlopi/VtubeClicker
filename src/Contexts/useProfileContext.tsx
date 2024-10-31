import {useContext} from "react";
import {myContext} from "./myContext";

export const useProfileContext = () => {
    const context = useContext(myContext);
    if (!context) {
        throw new Error("Cannot find ContextProvider");
    }
    return context;
};

export default useProfileContext
