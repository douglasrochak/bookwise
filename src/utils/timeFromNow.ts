import dayjs from 'dayjs';

export function timeToNow(time: string) {
  const timeParsed = dayjs(time).fromNow();
  return timeParsed;
}
