export default function formatDate(date, showMinutes = false) {
  date = new Date(date);
  let day = date.getDate();
  if (day < 10) day = `0${day}`;
  let month = date.getMonth() + 1;
  if (month < 10) month = `0${month}`;
  let year = date.getFullYear() % 100;
  if (year < 10) year = `0${year}`;
  let time = '';
  if (showMinutes) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < 10) minutes = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    time = `${hours}:${minutes}`;
  }
  return `${time} ${day}/${month}/${year}`;
}
