import tasksStore from "./tasks-store";

const RootStore = {
    tasksStore: new tasksStore(),
};

export default RootStore;