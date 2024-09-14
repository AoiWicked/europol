import cl from "./Header.module.scss";
import burger from "../../assets/burger.svg";
import cross from "../../assets/cross.svg";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [path, isPath] = useState<string>("");
    const [link, isLink] = useState<string>("");
    const where = useLocation();

    useEffect(() => {
        if (where.pathname === "/") {
            isPath("Send form");
            isLink("/contact");
        } else {
            isPath("button");
            isLink("/");
        }
    }, [where]);

    const toggleBurger = () => {
        setIsActive((pred) => !pred);
    };

    return (
        <header className={cl.header}>
            <h1>Site name</h1>
            <div>
                <nav className={cl.header__nav}>
                    <ul>
                        <li>Page</li>
                        <li>Page</li>
                        <li>Page</li>
                        <Link to={link}>
                            <button>{path}</button>
                        </Link>
                    </ul>
                </nav>
                <div>
                    {!isActive ? (
                        <img
                            onClick={() => toggleBurger()}
                            src={burger}
                            alt="burger"
                            className={cl.header__burger}
                        />
                    ) : (
                        <>
                            <nav
                                className={cl.header__modal}
                                onClick={() => toggleBurger()}
                            >
                                <div
                                    className={cl.header__modalcon}
                                    onClick={(event) => event.stopPropagation()}
                                >
                                    <div className={cl.header}>
                                        <h1 className={cl.header__name}>
                                            Site name
                                        </h1>
                                        <img
                                            onClick={() => toggleBurger()}
                                            src={cross}
                                            alt="cross"
                                            className={cl.header__cross}
                                        />
                                    </div>

                                    <ul>
                                        <li>Page</li>
                                        <li>Page</li>
                                        <li>Page</li>
                                    </ul>
                                    <Link to={link}>
                                        <button>{path}</button>
                                    </Link>
                                </div>
                            </nav>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
