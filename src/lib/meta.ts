import type { MetaDescriptor } from "react-router";

interface PageMeta {
  title: string;
  description?: string;
}

export const pageMeta = ({ title, description }: PageMeta) => {
  const tags: MetaDescriptor[] = [
    { title },
    { property: "og:title", content: title },
  ];
  if (description) {
    tags.push(
      { name: "description", content: description },
      { property: "og:description", content: description },
    );
  }
  return tags;
};
