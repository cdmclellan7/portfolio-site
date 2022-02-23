import githubLogo from "../../logos/GitHub-Mark-Light-64px.png";
import linkedinLogo from "../../logos/linkedin-3-64.png";

function Contact() {
  return (
    <>
      <main>
        <h1>Contact Me</h1>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/cassandra-mclellan-37b221231/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinLogo} alt="Linkedin logo"></img>
        </a>
        <a
          className="social-link"
          href="https://github.com/cdmclellan7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="Github logo"></img>
        </a>
      </main>
    </>
  );
}

export default Contact;
