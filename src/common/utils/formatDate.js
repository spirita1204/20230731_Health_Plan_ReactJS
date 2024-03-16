export const formateToday = (addDay = 0) => {
    // Get current date
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + addDay);
    // Get year, month, and day
    const year = currentDate.getFullYear();
    // Month starts from 0 (January is 0, February is 1, etc.)
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add 1 to month to match human-readable format
    const day = String(currentDate.getDate()).padStart(2, '0');

    // Format the date as 'YYYY-MM-DD'
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
};