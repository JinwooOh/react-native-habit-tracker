export const isDateInCheckList = (checkList, date) =>
  checkList.some(e => e.startOf('day').isSame(date.startOf('day')));
