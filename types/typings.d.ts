interface Projects {
  title: string;
  slug: string;
  desc: string;
  cover: {
    url: string;
  };
  tech: string;
  github: string;
  website: string;
  type: string;
  devStatus: boolean;
}

interface Developer {
  name: string;
  slug: string;
  surname: string;
  landing: string;
  aboutEntry: string;
  aboutMid: string;
  aboutFinal: string;
  skills: [];
  photo: {
    url: string;
  };
  logo: {
    url: string;
  };
  contact: string;
  eMail: string;
  linkedin: string;
  github: string;
  twitter: string;
}
