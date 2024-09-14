import "./style/App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./page/contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
