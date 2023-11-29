import internit from "internit-nextjs";
export async function POST(req: Request) {
  const response = await internit.sendEmail({
    body: {
      analytics: {
        campaign: "string",
        medium: "string",
        source: "string",
      },
      email: "string",
      message: "string",
      name: "string",
      phone: "string",
    },
    head: {
      subject: "string",
      to: "matthewaraujo20@gmail.com",
    },

    smtp: {
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "envios@construtoradinamica.com.br",
        pass: "#32185@_)",
      },
    },
  });

  return Response.json(response)


}
