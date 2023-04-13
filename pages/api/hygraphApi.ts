import { client } from "@/utility/GraphQLClient";
import { gql } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";

const QUERY = gql`
  {
    developer {
      name
      slug
      surname
      landing
      aboutEntry
      aboutMid
      aboutFinal
      skills
      photo {
        url
      }
      logo {
        url
      }
      contact
      eMail
      linkedin
      github
      twitter
      resume {
        url
      }
    }
    projects {
      title
      slug
      desc
      cover {
        url
      }
      tech
      type
      github
      website
      devStatus
    }
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const Data = await client.request(QUERY);
  res.status(200).json({ Data });
}
