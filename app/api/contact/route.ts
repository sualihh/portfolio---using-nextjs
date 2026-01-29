import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;
  if (!formLink) {
    return new NextResponse("Please configure the env variables", { status: 500 });
  }

  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  try {
    const body = await req.json();
    const { name, email, message, social } = body;

    // Send to Google Form
    await fetch(
      `${formLink}?${fieldIdName}=${encodeURIComponent(name)}&${fieldIdEmail}=${encodeURIComponent(email)}&${fieldIdMessage}=${encodeURIComponent(message)}&${fieldIdSocial}=${encodeURIComponent(social || "")}`,
      {
        method: "POST",
        mode: "no-cors", // Google Forms blocks CORS, so we use no-cors
      }
    );

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
