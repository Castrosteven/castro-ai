import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
const mailchimp = require("@mailchimp/mailchimp_marketing");

const apiKey = process.env.MAILCHIMP_API;

interface SubscribingUser {
  email: string;
  firstName: string;
  lastName: string;
}

export default async function handler(
  req: GatsbyFunctionRequest<SubscribingUser>,
  res: GatsbyFunctionResponse
) {
  try {
    const { email, firstName, lastName } = req.body;
    console.log(`BODY ${JSON.stringify(req.body)}`);
    console.log("API KEY " + apiKey);
    mailchimp.setConfig({
      apiKey: apiKey,
      server: "us21",
    });
    const listId = "247782c840";
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
  }
}
