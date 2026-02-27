import dayjs from "dayjs";

export const getFormatDate = (date: string | Date) => {
  return dayjs(date).format("DD.MM.YYYY");
};
