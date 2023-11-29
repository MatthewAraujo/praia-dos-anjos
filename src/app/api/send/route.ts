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
    },
  });

  return Response.json(response)


}
