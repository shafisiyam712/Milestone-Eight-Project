import { Helmet } from "react-helmet";
import AboutBanner from "../Components/AboutBanner";


const About = () => {
    return (
        <div>
            <Helmet>
            <title>About | Gadget Heaven</title>
            </Helmet>
            <AboutBanner></AboutBanner>
        </div>
    );
};

export default About;