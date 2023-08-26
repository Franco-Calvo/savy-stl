export function formatTime(dateTimeString: string): string {
  const date = new Date(dateTimeString);

  if (isNaN(date.getTime())) {
    return "Ahora";
  }

  const hours = date.getHours();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const minutes = date.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes}`;
}
