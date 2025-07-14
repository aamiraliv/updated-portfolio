import { Marquee } from "../library/Marque";

const skills = [
  // Languages
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "C",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },

  // Libraries & Frameworks
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TailwindCSS",
    image:
      "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
  },
  {
    name: "Redux",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Bootstrap",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Spring Boot",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },

  // Databases & Tools
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "SQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    image: "https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF",
  },
  {
    name: "Vercel",
    image: "https://simpleicons.org/icons/vercel.svg",
  },
  {
    name: "Figma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Postman",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Cloudinary",
    image:
      "https://cdn.prod.website-files.com/64d41aab8183c7c3324ddb29/674f5ed6ef4a6bb77f9723ba_0-glyph-square.svg",
  },
];

// Split skills into three rows
const firstRow = skills.slice(0, 7);
const secondRow = skills.slice(7, 14);
const thirdRow = skills.slice(14);

function SkillCard({ name, image }: { name: string; image: string }) {
  return (
    <div className="inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm w-fit whitespace-nowrap shrink-0 gap-2 overflow-hidden text-white border-white/20 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-neutral-800/60">
      <img
        src={image}
        alt={name}
        className="w-4 h-4 object-contain"
        height={16}
        width={16}
      />
      <span>{name}</span>
    </div>
  );
}

export function ITSkillsMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-transparent py-8 gap-5">
      {/* First Row */}
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>

      {/* Second Row - Reverse */}
      <Marquee reverse pauseOnHover className="[--duration:35s]">
        {secondRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>

      {/* Third Row */}
      <Marquee pauseOnHover className="[--duration:25s]">
        {thirdRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>
    </div>
  );
}
