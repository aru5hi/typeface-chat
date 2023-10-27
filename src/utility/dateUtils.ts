export interface TDateDiff {
    hours: number;
    days: number;
}

export function getDateDiff(startDate: Date, endDate: Date): TDateDiff {
  const diffInMs   = Number(endDate) - Number(startDate);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  const diffInHours = diffInMs /(1000 * 60 * 60);
  return {hours: diffInHours, days: diffInDays};
}