import {createContext} from "react";
import * as Intf from "../interfaces";

export const myContext = createContext<Intf.Context_props | undefined>(undefined);

export default myContext;