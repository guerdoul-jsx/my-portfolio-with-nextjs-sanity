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

export async function getIPInfo(): Promise<IPInfo | null> {
  const data_info = await fetch("https://ip-score.com/json", {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "sec-ch-ua":
        '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      cookie:
        "_ga=GA1.1.1933880325.1731899052; _cs_c=0; _ga_GXKKG3TRQX=GS1.1.1731899052.1.0.1731899063.0.0.0; _cs_id=b66d800d-d1bc-a466-89db-f68ae98ee1e6.1731899053.1.1731899067.1731899053.1.1765063053702.0; _cs_s=2.0.0.9.1731900868677",
      Referer: "http://localhost:3000/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    next: {
      revalidate: 0,
    },
  });
  const info: IPInfo = await data_info.json();
  return info ? info : null;
}
