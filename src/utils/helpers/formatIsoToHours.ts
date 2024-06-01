function formatIsoToHours(iso: string): string {
  const date = new Date(iso);

  const localHours = date.getHours();
  const localMinutes = date.getMinutes();

  const period = localHours >= 12 ? 'PM' : 'AM';
  const hoursIn12HourFormat = localHours % 12 || 12;
  const formattedMinutes = localMinutes < 10 ? `0${localMinutes}` : localMinutes.toString();

  return `${hoursIn12HourFormat}:${formattedMinutes} ${period}`;
}

export default formatIsoToHours;
