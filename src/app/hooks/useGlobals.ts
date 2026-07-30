import { createContext, useContext } from "react";
import { Member } from "../../lib/types/member";
import exp from "constants";


interface GlobalInterface {
    authMember: Member | null;
    setAuthMember: (member: Member | null) => void;
}


export const GlobalContext = createContext<GlobalInterface | undefined>(undefined)

export const useGlobals = () => {
    const context = useContext(GlobalContext);

    if (context === undefined) throw new Error("usseGlobals within Provider");

    return context;
}
export default useGlobals;