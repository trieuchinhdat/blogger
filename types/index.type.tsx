declare interface IBlog {
  id: number;
  attributes: {
    title: string;
    category: string;
    description: string;
    author: string;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: null;
          caption: null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            small: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            large: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            medium: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: null;
          provider: string;
          provider_metadata: null;
          createdAt: Date;
          updatedAt: Date;
        };
      };
    };
  };
}

export interface IHome {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  section1: {
    id: number;
    title1: string;
    title2: string;
    title3: string;
    subTitle: string;
    imageUrl: string;
    button: string;
  };
  section2: {
    id: number;
    title: string;
    content: string;
  };
}
