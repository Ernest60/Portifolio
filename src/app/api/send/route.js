import { EmailTemplate } from "../../../componets/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  try {
    const data = await resend.emails.send({
      from: "F/P <onboarding@resend.dev>",
      to: ["emandlate4@gmail.com"],
      subject: "From Portifolio",

      react: EmailTemplate({
        name: body.name || "empty",
        email: body.email || "empty",
        message: body.message || "empty",
      }),
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
