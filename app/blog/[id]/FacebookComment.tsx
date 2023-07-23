import React from "react";
import { FacebookProvider, Comments } from "react-facebook";

const FacebookComments = ({ url }: any) => {
  return (
    <FacebookProvider appId="841183000941014">
      <Comments href={url} />
    </FacebookProvider>
  );
};

export default FacebookComments;
