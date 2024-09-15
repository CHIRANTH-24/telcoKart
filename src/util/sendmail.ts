import axios from "axios";
import { EmailBodyOptions } from "@/types/msg91";

type MailOtpParams = {
  recipientName: string;
  recipientEmail: string;
  otp: string;
};

const FROM_EMAIL = process.env.FROM_EMAIL!;
const MSG91_DOMAIN = process.env.MSG91_DOMAIN!;
const MSG91_AUTH_KEY = process.env.MSG91_AUTH_KEY!;

export async function sendOTPByMail({
  recipientName,
  recipientEmail,
  otp,
}: MailOtpParams) {
  const data: EmailBodyOptions = {
    domain: MSG91_DOMAIN,
    template_id: "global_otp",
    from: {
      email: FROM_EMAIL,
    },
    to: [
      {
        name: recipientName,
        email: recipientEmail,
      },
    ],
    reply_to: [
      {
        email: "harshavasu463@gmail.com",
      },
    ],
    variables: {
      company_name: "TelcoKart",
      otp,
    },
  };

  try {
    const res = await axios.post(
      "https://control.msg91.com/api/v5/email/send",
      data,
      {
        headers: {
          authkey: MSG91_AUTH_KEY,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Email response: ", res.data);
  } catch (error: any) {
    console.log("Email Error: Failed to send mail!\n", error.response.data);
    return null;
  }
}
