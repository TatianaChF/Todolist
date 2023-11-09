import tasksStore from "./tasks-store";

const RootStore = {
    tasks: new tasksStore(),
};

export default RootStore;