import { IconCloud } from "../library/IconCloud";


const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "spring",
  "springboot",
  "html5",
  "css3",
  "prisma",
  "amazonaws",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "kubernetes",
  "kafka",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}