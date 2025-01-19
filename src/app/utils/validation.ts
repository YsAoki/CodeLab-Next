import dayjs, { Dayjs } from "dayjs";

/***過去1ヶ月以内の日付であればtrue */
export const dateIsInBeforeOneMonth = (targetDate: Dayjs): boolean => {
  const oneMonthAgo = dayjs().subtract(1, "month");
  const now = dayjs();
  return targetDate.isAfter(oneMonthAgo) && targetDate.isBefore(now);
};
