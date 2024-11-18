export interface IPInfo {
  ip: string;
  status: boolean;
  useragent: string;
  geoip1: Geoip1;
  geoip2: Geoip2;
  isp: string;
  org: string;
  asn: string;
}

export interface Geoip1 {
  country: string;
  countrycode: string;
  region: string;
  city: string;
  lat: number;
  lon: number;
  timezone: string;
}

export interface Geoip2 {
  country: string;
  countrycode: string;
  region: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
}
