export function formatDate(dateString) {
  return new Date(dateString).toLocaleString("ru-RU", {
    timeZone: "Europe/Moscow",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
