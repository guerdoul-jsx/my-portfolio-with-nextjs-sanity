import { getIPInfo } from "@/actions/ip";
import prisma from "@/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const ip_info = await getIPInfo();
    if (ip_info) {
      return NextResponse.json(ip_info);
    } else {
      return NextResponse.json(
        { message: "Failed to get IP info" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log("[IPS]_GET_METHOD] error: ", error);
    return NextResponse.json({
      message: "Internal Server Error",
      status: 500,
      error,
    });
  }
}

export async function POST(req: Request, res: Response) {
  try {
    const { d }: { d: boolean } = await req.json();
    const ip_info = await getIPInfo();
    if (ip_info && d) {
      const ips = await prisma.data.create({
        data: {
          ip: ip_info.ip,
          status: ip_info.status,
          useragent: ip_info.useragent,
          geoip1: JSON.stringify(ip_info.geoip1),
          geoip2: JSON.stringify(ip_info.geoip2),
          isp: ip_info.isp,
          org: ip_info.org,
          asn: ip_info.asn,
        },
      });
      if (ips) {
        return new Response(JSON.stringify(ips), {
          status: 201,
        });
      } else {
        return new Response(
          JSON.stringify({ message: "Failed to create IP" }),
          {
            status: 400,
          }
        );
      }
    }
  } catch (error) {
    console.log("[IPS]_POST_METHOD] error: ", error);
    return NextResponse.json({
      message: "Internal Server Error",
      status: 500,
      error,
    });
  }
}
