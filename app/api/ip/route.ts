import { IPInfo } from "@/actions/ip";
import prisma from "@/db";
import { NextResponse } from "next/server";

// export async function GET(req: Request, res: Response) {
//   try {
//     const info = await getIPInfo();
//     if (info) {
//       return NextResponse.json(info);
//     } else {
//       return NextResponse.json(
//         { message: "Failed to get IP info" },
//         { status: 404 }
//       );
//     }
//   } catch (error) {
//     console.log("[IPS]_GET_METHOD] error: ", error);
//     return NextResponse.json({
//       message: "Internal Server Error",
//       status: 500,
//       error,
//     });
//   }
// }

export async function POST(req: Request, res: Response) {
  try {
    const { info }: { info: IPInfo } = await req.json();

    if (info) {
      const ips = await prisma.data.create({
        data: {
          ip: info.ip,
          status: info.status,
          useragent: info.useragent,
          geoip1: JSON.stringify(info.geoip1),
          geoip2: JSON.stringify(info.geoip2),
          isp: info.isp,
          org: info.org,
          asn: info.asn,
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
