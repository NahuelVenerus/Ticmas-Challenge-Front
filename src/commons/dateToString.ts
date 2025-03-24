export const dateToString = (date: Date): string => {
    const day: number = date.getDay();
    const month: number = date.getMonth();
    const year: number = date.getFullYear();
    return `${day}/${month}/${year}`
}