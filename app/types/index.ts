export * from './state';

export interface Person {
  id: number;
  first_name: string;
  last_name: string;
  contact: Contact;
  gender: string;
  ip_address: string;
  avatar: string;
  address: Address;
}

export interface Contact {
  email: string;
  phone: string;
}

export interface Address {
  city: string;
  country: string;
  postalCode: string;
  state: string;
  street: string;
}

export interface Prefecture {
  gone: boolean,
  photoPaths: string[]
}

export interface Japan {
  hokkaido: Prefecture
  aomori: Prefecture
  iwate: Prefecture
  miyagi: Prefecture
  akita: Prefecture
  yamagata: Prefecture
  fukushima: Prefecture
  ibaraki: Prefecture
  tochigi: Prefecture
  gunma: Prefecture
  saitama: Prefecture
  chiba: Prefecture
  tokyo: Prefecture
  kanagawa: Prefecture
  niigata: Prefecture
  toyama: Prefecture
  ishikawa: Prefecture
  fukui: Prefecture
  yamanashi: Prefecture
  nagano: Prefecture
  gifu: Prefecture
  shizuoka: Prefecture
  aichi: Prefecture
  mie: Prefecture
  shiga: Prefecture
  kyoto: Prefecture
  osaka: Prefecture
  hyogo: Prefecture
  nara: Prefecture
  wakayama: Prefecture
  tottori: Prefecture
  shimane: Prefecture
  okayama: Prefecture
  hiroshima: Prefecture
  yamaguchi: Prefecture
  tokushima: Prefecture
  kagawa: Prefecture
  ehime: Prefecture
  kochi: Prefecture
  fukuoka: Prefecture
  saga: Prefecture
  nagasaki: Prefecture
  kumamoto: Prefecture
  oita: Prefecture
  miyazaki: Prefecture
  kagoshima: Prefecture
  okinawa: Prefecture
}