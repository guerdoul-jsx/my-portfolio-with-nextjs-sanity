"use server";

import { v4 as uuidv4 } from "uuid";

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
  const data_info = await fetch("https://ip-score.com/json");
  const info: IPInfo = await data_info.json();
  return info ? info : null;
}

export async function getBinInfo(): Promise<{
  record: {
    guerdoul: {
      id: string;
      data: IPInfo;
      createAt: string;
    }[];
  };
  metadata: {
    id: string;
    private: boolean;
    collectionId: string;
    createdAt: string;
  };
}> {
  const getBinInfo = await fetch(
    "https://api.jsonbin.io/v3/b/673a8bc7acd3cb34a8aa35c3",
    {
      headers: {
        "X-Master-Key": `${process.env.MASTER_API_KEY!}`,
      },
    }
  );
  const bins = await getBinInfo.json();
  return bins;
}

export async function UpdateIpsData(ipinfo: IPInfo | null) {
  const bin_infos = await getBinInfo();
  console.log("bin_infos.record", bin_infos.record);
  const objectToAdd = {
    guerdoul: [
      ...bin_infos.record.guerdoul,
      {
        id: uuidv4(),
        data: { ...ipinfo },
        createdAt: new Date().toISOString(),
      },
    ],
  };

  const update_bin = await fetch(
    "https://api.jsonbin.io/v3/b/673a8bc7acd3cb34a8aa35c3",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": `${process.env.MASTER_API_KEY!}`,
      },
      body: JSON.stringify(objectToAdd),
    }
  );
  const update_res = await update_bin.json();
  return update_res;
}
