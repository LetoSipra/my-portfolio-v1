import { client } from "@/utility/GraphQLClient";
import { gql } from "graphql-request";

interface Props {
  resume: {
    url: string;
  };
  developer: Developer[];
}

function resume({ resume }: Props) {
  return (
    <iframe
      src={resume.url}
      className="h-screen w-full"
      title="Yusuf Akçay Resume"
    />
  );
}

export default resume;

const QUERY = gql`
  {
    developer {
      resume {
        url
      }
    }
  }
`;

export const getServerSideProps = async () => {
  const { developer }: Props = await client.request(QUERY);
  const resume = developer[0].resume;
  return {
    props: {
      resume,
    },
  };
};
