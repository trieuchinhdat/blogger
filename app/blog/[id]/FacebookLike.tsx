import { FacebookProvider, Like } from "react-facebook";

export default function FacebookLike({
  url,
  layout,
  size,
  lazy,
  showFaces,
}: any) {
  return (
    <FacebookProvider appId="841183000941014">
      <Like
        href={url}
        layout={layout}
        size={size}
        lazy={lazy}
        showFaces={showFaces}
      />
    </FacebookProvider>
  );
}
