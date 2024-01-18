import NavBar from "./NavBar";
import Footer from "./Footer";
import LandingPage from "./Landing";
import BackToTopButton from "./backtotop";
const main = () => {
    return (
        <div className="overflow-x-hidden">
            <NavBar />
            <LandingPage />
            <Footer />
            <BackToTopButton/>
        </div>
    );
    };

export default main;