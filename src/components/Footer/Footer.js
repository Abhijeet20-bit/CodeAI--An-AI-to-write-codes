import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-center text-white">
                <div className="container-fluid py-3">
                <div className="nav justify-content-center border-bottom pb-3 mb-3 text-center">
                        ChatGPT
                </div>

                    <div className="d-flex flex-wrap justify-content-between align-items-center ">
                        <div className="col-md-4 d-flex align-items-center">
                            <Link to="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
                                <img src="/QA.ico" className="img-fluid"
                                    width={30}
                                    alt="" />
                            </Link>
                            <span className="mb-3 mb-md-0 text-white">&copy; Build With ❤️ Kumar Abhijeet</span>
                        </div>
                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-5"><a href="https://www.instagram.com/i_am___abhi/" target={"_blank"} rel="noopener noreferrer" className="text-white" ><FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "#171515" }} beat /></a></li>
                            <li className="ms-5"><a href="https://www.instagram.com/i_am___abhi/" target={"_blank"} rel="noopener noreferrer" className="text-white" ><FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "#E1306C" }} beat /></a></li>
                            <li className="ms-5"><a href="https://www.linkedin.com/public-profile/settings" target={"_blank"} rel="noopener noreferrer" className="text-white" ><FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "#0077b5" }} beat /></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;