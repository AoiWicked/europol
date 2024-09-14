import cl from "./Home.module.scss";
import delicious from "../../assets/delicious meal.png";
import Comment from "../../components/UI/comment/Comment";
import { data, IData } from "../../data/data";
import { Link } from "react-router-dom";

function Home() {
    return (
        <main className={cl.main}>
            <article>
                <section className={cl.main__landing}>
                    <h2>Landing page title</h2>
                    <p>And a subheading describing your site, too</p>
                    <Link to="/contact">
                        <button>Send form</button>
                    </Link>
                </section>
                <section className={cl.main__img}>
                    <img src={delicious} alt="delicious meal" />
                </section>
                <section className={cl.main__posts}>
                    <div className={cl.main__postsName}>
                        <h2>Heading</h2>
                        <p>Subheading to introduce testimonials</p>
                    </div>

                    <div className={cl.main__commentaries}>
                        {data.map((el: IData, index) => (
                            <Comment key={index} commentary={el} />
                        ))}
                    </div>

                    <div className={cl.main__dash} />
                </section>
            </article>
        </main>
    );
}

export default Home;
