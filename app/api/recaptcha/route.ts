import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const postData = await request.json();

  const { gRecaptchaToken } = postData;

  let res;

  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

  try {
    // res = await axios.post(
    //     "https://www.google.com/recaptcha/api/siteverify",
    //     formData,
    //     {
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //         },
    //     }
    // );
    res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    }).then((res) => res.json());
    console.log({ res });
  } catch (e) {
    return NextResponse.json({ success: false, error: e });
  }

  if (res && res?.success && res?.score > 0.5) {
    console.log("res?.score:", res?.score);

    return NextResponse.json({
      success: true,
      score: res.score,
    });
  } else {
    return NextResponse.json({ success: false, message: "Maymknch" });
  }
}
