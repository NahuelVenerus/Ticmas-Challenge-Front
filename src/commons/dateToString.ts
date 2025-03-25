export const dateToString = (date: Date): string => {
    const day: number = date.getDay();
    const month: number = date.getMonth();
    const year: number = date.getFullYear();
    const hours = date.getHours()
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();    
    return `${day}/${month}/${year} - ${hours}:${minutes}`;
}