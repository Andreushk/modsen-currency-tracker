function getPreviousDates(days: number = 30): string[] {
  const dates: string[] = [];
  const today = new Date();

  for (let i = 0; i < days; ) {
    const previousDate = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
    dates.push(previousDate.toISOString().slice(0, 10));
    i += 1;
  }

  return dates.reverse();
}

export default getPreviousDates;
