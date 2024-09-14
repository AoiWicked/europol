import avatar1 from "../assets/avatars/Avatar1.png";
import avatar2 from "../assets/avatars/Avatar2.png";
import avatar3 from "../assets/avatars/Avatar3.png";

export interface IData {
    text: string;
    name: string;
    description: string;
    avatar: string;
}

export const data: IData[] = [
    {
        text: "“A terrific piece of praise”",
        name: "Name",
        description: "description",
        avatar: avatar1,
    },
    {
        text: "“A fantastic bit of feedback”",
        name: "Name",
        description: "description",
        avatar: avatar2,
    },
    {
        text: "“A genuinely glowing review”",
        name: "Name",
        description: "description",
        avatar: avatar3,
    },
];
