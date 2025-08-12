export const formatDate = (date: string) => {
    const dateObj: Date = new Date(date);
    const formattedDate: string = dateObj.toLocaleDateString("en-us", { year: "numeric", month: "numeric", day: "numeric" });

    return formattedDate;
};