import { IoLeaf } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { FaAppleAlt } from "react-icons/fa";
import { BsCCircleFill } from "react-icons/bs";

import { AiFillGithub } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "인프런",
        icon: <IoLeaf />,
        src: "/inflearn",
        color: "#00c471"
    },
    {
        title: "코딩 애플",
        icon: <FaAppleAlt />,
        src: "/coddingapple",
        color: "#dc143c"
    },
    {
        title: "1234",
        icon: <BsCCircleFill />,
        src: "/codeit",
        color: "#93f"
    },
    {
        title: "Youtube",
        icon: <IoLogoYoutube />,
        src: "/youtube",
        color: "#c4302b" 
    }
];

export const searchKeyword = [
    {
        title: "보안",
        src: "/security"
    },
    {
        title: "chatGPT",
        src: "/chatGPT"
    },
    {
        title: "파이썬",
        src: "/python"
    },
    {
        title: "UX / UI",
        src: "/uxui"
    },
    {
        title: "데이터",
        src: "/data"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com",
        icon: <AiFillYoutube />
    },
    {
        title: "Pinterest",
        url: "https://kr.pinterest.com/ideas/",
        icon: <FaPinterest />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com",
        icon: <AiOutlineInstagram />
    }
];
