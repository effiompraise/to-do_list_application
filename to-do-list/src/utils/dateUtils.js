import { format, compareAsc } from 'date-fns';

export const formatDate = (date) => {
  return format(date, 'yyyy-MM-dd');
};

export const isOverdue = (dueDate) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return compareAsc(new Date(dueDate), today) === -1;
};