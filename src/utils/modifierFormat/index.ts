import moment from 'moment';
export function safeParse(str: string) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return {};
  }
}

export function formaterDate(date: any) {
  return moment(date).format('DD-MM-YYYY');
}
