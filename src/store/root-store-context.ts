import { createContext, useContext } from "react";
import RootStore  from "./roote-store";

export const RootStoreContext = createContext(RootStore);

export const useStores = () => {
    const context = useContext<typeof RootStore>(RootStoreContext);

    if (context === null) {
        throw new Error("Ошибка получения данных из стора");
    }

    return context;
}