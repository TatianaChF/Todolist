import { ReactNode, createContext, useContext } from "react";
import { Store } from "../store/store";

let store: Store;

const StoreContext = createContext<Store | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
    const root = store ?? new Store();

    return <StoreContext.Provider value={root}>{ children }</StoreContext.Provider>
}

export function useStore() {
    const context = useContext(StoreContext);

    if (context === undefined) {
        throw new Error("store error")
    }

    return context;
}