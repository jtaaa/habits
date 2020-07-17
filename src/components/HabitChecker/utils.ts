export const getDays = (dayRecord: Record<string, boolean>) => {
  return Object.entries(dayRecord)
    .filter(([day, isActive]) => {
      return isActive;
    })
    .map((day) => day[0]);
};

export const getShortDays = (dayRecord: Record<string, boolean>) => {
  return Object.entries(dayRecord)
    .filter(([day, isActive]) => {
      return isActive;
    })
    .map(([day, isActive]) => day.slice(0, 3));
};
