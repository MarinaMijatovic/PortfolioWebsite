// dayjs
import dayjs, { Dayjs } from "dayjs";
// type
import { ImageProps } from "types/imageType";
import { ProjectCategory } from "types/categoryType";

export interface ProjectDetails {
  category: ProjectCategory[];
  date: Dayjs;
  id: string;
  images: ImageProps[];
  postFileName: string;
  title: string;
}

export interface Project extends ProjectDetails {
  likes: number;
}

const ProjectConstructor = (props: ProjectDetails): Project => {
  const { category, date, id, images, postFileName, title } = props;

  return {
    category,
    date,
    id,
    title,
    images,
    postFileName,
    get likes() {
      let totalLikes = 0;
      if (this.images.length === 0) return 0;

      this.images.forEach((image) => (totalLikes += image.likes));
      return totalLikes;
    },
  };
};

const projectsData: Project[] = [
  ProjectConstructor({
    category: ["python","flutter"],
    date: dayjs().subtract(4, "week"),
    id: "app",
    postFileName: "app",
    title: "Teaching monitoring application - Python/Flutter&Firebase",
    images: [
      {
        alt: "Teaching monitoring application",
        height: 859,
        likes: 556,
        src: "/projects/app/app.png",
        width: 1204,
      },
      /* {
        alt: "From our classes",
        height: 4032,
        likes: 2343,
        src: "/projects/app/app.jpg",
        width: 3024,
      }, */
    ],
  }),
  ProjectConstructor({
    category: ["html & css & vanillajs", "react & next"],
    date: dayjs().subtract(4, "week"),
    id: "crypto",
    postFileName: "crypto",
    title: "Cryptocurreny wallet - Figma to ReactJS",
    images: [
      {
        alt: "CRYPTOCURRENCY WALLET",
        height: 859,
        likes: 456,
        src: "/projects/crypto/Cryptocurrency.PNG",
        width: 1204,
      },
      /* {
        alt: "From our classes",
        height: 4032,
        likes: 2343,
        src: "/projects/privatnicasovi/italijan.jpg",
        width: 3024,
      }, */
    ],
  }),
  ProjectConstructor({
    category: ["wordpress"],
    date: dayjs().subtract(4, "week"),
    id: "privatnicasovi",
    postFileName: "privatnicasovi",
    title: "Privatni časovi - Wordpress Website",
    images: [
      {
        alt: "Privatni casovi",
        height: 859,
        likes: 123,
        src: "/projects/privatnicasovi/privatni1.PNG",
        width: 1204,
      },
      {
        alt: "From our classes",
        height: 4032,
        likes: 143,
        src: "/projects/privatnicasovi/privatni2.PNG",
        width: 3024,
      }, 
      {
        alt: "Contact",
        height: 4032,
        likes: 243,
        src: "/projects/privatnicasovi/privatni3.PNG",
        width: 3024,
      },
       {
        alt: "Contact",
        height: 4032,
        likes: 234,
        src: "/projects/privatnicasovi/privatni4.PNG",
        width: 3024,
      },
    ],
  }),
  
  ProjectConstructor({
    category: ["wordpress"],
    date: dayjs().subtract(4, "week"),
    id: "hhoada",
    postFileName: "hhoada",
    title: "HHOADA - Wordpress Website",
    images: [
      {
        alt: "HHOADA",
        height: 859,
        likes: 224,
        src: "/projects/hhoada/hhoada5.PNG",
        width: 1204,
      },
       {
        alt: "HHOADA",
        height: 4032,
        likes: 378,
        src: "/projects/hhoada/hhoada1.PNG",
        width: 3024,
      }, 
       {
        alt: "HHOADA",
        height: 4032,
        likes: 343,
        src: "/projects/hhoada/hhoada3.PNG",
        width: 3024,
      }, 
       {
        alt: "HHOADA",
        height: 4032,
        likes: 224,
        src: "/projects/hhoada/hhoada4.PNG",
        width: 3024,
      }, 
    ],
  }),
];

export default projectsData;
