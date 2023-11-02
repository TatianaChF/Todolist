import { createContext, useContext } from "react";
import { RootStore } from "./roote-store";

export const RootStoreContext = createContext<RootStore | null>(null);

export const useStores = () => {
    const context = useContext(RootStoreContext);

    if (context === null) {
        throw new Error("Ошибка получения данных из стора");
    }

    return context;
}