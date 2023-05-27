import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import Header from './Header/Header';
import Footer from './Footer/Footer';
const Contact = () => {
  return (
    <>
      <Header />
      <div className="container" style={{ minHeight: '66.5vh' }}>

        <div className="row mt-5 ms-5">
          <div className="col-lg-4">
            {<svg className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" ><FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "#E1306C" }} beat /></svg>}
            {/*<a className="bd-placeholder-img rounded-circle" width="140" height="140" href="https://www.instagram.com/i_am___abhi/" target={"_blank"} rel="noopener noreferrer" className="text-white" ><FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "#171515" }} beat /></a>*/}
            <h2>InstaGram</h2>
            <p>Hey Everyone!!!<br></br> I share all my fun events and for casual talk and know what I do in free time/Weekends you can follow me here.</p>
            <p><a className="btn btn-secondary" href="https://www.instagram.com/i_am___abhi/">Follow Me on Insta</a></p>
          </div>
          <div className="col-lg-4">
          <svg className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" ><FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "#0077b5" }} beat /></svg>

            <h2>LinkedIn</h2>
            <p>Greetings!!!<br/> This is the place you can connect with me to have a profesional Queries and to know about my professional Life</p>
            <p><a className="btn btn-secondary" href="https://www.linkedin.com/in/kumar-abhijeet-349734196/">Connect With me on LinkedIn</a></p>
          </div>
          <div className="col-lg-4">
          <svg className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" ><FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "#171515" }} beat /></svg>

            <h2>GitHub</h2>
            <p>You can see all my projects and codes here.</p>
            <p><a className="btn btn-secondary" href="https://github.com/Abhijeet20-bit">Follow Me on GitHub</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Contact;