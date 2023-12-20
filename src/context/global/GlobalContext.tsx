import { createContext } from "react";

export const ShowNavContext = createContext({
    showNav: false,
    toggleShowNav: (active)=>{}
});
