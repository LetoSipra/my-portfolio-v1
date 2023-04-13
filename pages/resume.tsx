import { client } from "@/utility/GraphQLClient";
import { gql } from "graphql-request";
import Head from "next/head";

interface Props {
  developer: Developer[];
}

function resume({ developer }: Props) {
  return (
    <>
      <Head>
        <title>Yusuf Akçay Resume</title>
        <meta
          name="description"
          content="Yusuf Akçay A Full Stack Web Developer Engineer Resume"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={developer[0].logo.url} />
      </Head>
      <iframe
        src={developer[0].resume.url}
        className="h-screen w-full"
        title="Yusuf Akçay Resume"
      />
    </>
  );
}

export default resume;

const QUERY = gql`
  {
    developer {
      resume {
        url
      }
      logo {
        url
      }
    }
  }
`;

export const getServerSideProps = async () => {
  const { developer }: Props = await client.request(QUERY);
  return {
    props: {
      developer,
    },
  };
};
