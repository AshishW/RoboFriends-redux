export const apiCall = async(link) =>{
    const response = await fetch(link);
    const data = await response.json();
    return data;
}