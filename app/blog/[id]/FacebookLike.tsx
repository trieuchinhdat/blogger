import { FacebookProvider, Like } from "react-facebook";

export default function FacebookLike({ url }: any) {
  return (
    <FacebookProvider appId="841183000941014">
      <Like href={url} colorScheme="dark" />
    </FacebookProvider>
  );
}
