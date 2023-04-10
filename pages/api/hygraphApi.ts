import { gql, GraphQLClient } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";

const client = new GraphQLClient(
  "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clg3l7ldk1d6w01t0h5ds7uwf/master"
);

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
