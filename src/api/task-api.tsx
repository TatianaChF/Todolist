export const getTasksData = async () => {
    let response = await fetch("./tasks.json");
    let data = await response.json();
    return data;
    throw new Error("error");
}