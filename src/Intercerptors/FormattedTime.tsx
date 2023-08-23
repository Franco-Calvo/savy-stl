export function formatTime(dateTimeString: string): string {
    const date = new Date (dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes()
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${formattedMinutes}`
}

