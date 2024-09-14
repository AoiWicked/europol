import { IData } from "../../../data/data";
import cl from "./Comment.module.scss";

interface IComment {
    commentary: IData;
}

function Comment({ commentary }: IComment) {
    return (
        <div className={cl.comment}>
            <span>{commentary.text}</span>
            <div className={cl.comment__personage}>
                <img src={commentary.avatar} alt="avatar" />
                <div>
                    <span>{commentary.name}</span>
                    <p>{commentary.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Comment;
