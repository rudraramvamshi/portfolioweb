
import {

    meta,
    cpp,
    dsa,
    react,
    ux
} from "../assets";
const trainings = [
    {
        name: "Google UX Design Professional Certificate",
        description:
            "Completed a professional certification from Google via Coursera. Gained hands-on experience in UX principles and Figma with real-world projects.",
        tags: [
            { name: "UX principles", color: "blue-text-gradient" },
            { name: "Figma", color: "green-text-gradient" },
            // { name: "coursera", color: "pink-text-gradient" },
        ],
        image: ux, // replace with your Meta certificate image or a placeholder
        source_code_link: "https://www.coursera.org/account/accomplishments/certificate/BE0MQJLCIG2N", // replace with actual link
    },
    {
        name: "Libraries and Frameworks for Frontend Development",
        description:
            "Mastered the intricacies of React, learning components, state management, and JSX, to craft interactive user interfaces with ease.",
        tags: [
            { name: "React-JS", color: "blue-text-gradient" },
            { name: "State", color: "green-text-gradient" },
            { name: "Props", color: "pink-text-gradient" },
        ],
        image: react, // use a relevant image
        source_code_link: "https://www.coursera.org/account/accomplishments/certificate/AFU791YDXZIQ", // replace with actual link
    },

];

export { trainings };