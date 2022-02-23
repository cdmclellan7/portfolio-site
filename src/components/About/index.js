function About() {
  return (
    <>
      <main>
        <h1 className="page-title">About Me</h1>
        <div className="about-page-container">
          <p>
            I am a full-stack software engineer currently studying with the
            School of Code, a 16-week bootcamp that focuses on working in an
            agile team, problem solving skills, and design thinking. From this
            course I have experience in the latest web development technologies.
          </p>
          <p>
            I am changing careers from English language teaching to tech.
            Teaching requires clear communication skills, organization, and
            planning, all of which are essential skills in software development.
            My biggest strength is my passion for learning new things.
          </p>
          <h2>My Skills</h2>
          <div className="skills-container">
            <ul className="list-heading">
              Languages
              <li>HTML5 - Semantic HTML</li>
              <li>CSS3</li>
              <li>JavaScript ES6</li>
              <li>Node.js v16.13.0</li>
              <li>TypeScript v4.5.5</li>
              <li>SQL</li>
            </ul>
            <ul className="list-heading">
              Technologies
              <li>React</li>
              <li>Express</li>
              <li>REST</li>
              <li>Socket.io</li>
              <li>PostgreSQL</li>
              <li>Git / GitHub</li>
              <li>Jest</li>
              <li>Auth0</li>
              <li>Passport.js</li>
              <li>Netlify</li>
              <li>Heroku</li>
            </ul>
            <ul className="list-heading">
              Soft Skills
              <li>Problem solving</li>
              <li>Crticial Thinking</li>
              <li>Clear Communication</li>
              <li>Teamwork</li>
              <li>Attention to Detail</li>
              <li>Organisation</li>
              <li>Passion</li>
            </ul>
          </div>
          <h2>My Goals</h2>
          <ul className="list-heading">
            <li>Always write clean, readable, and consistent code.</li>
            <li>
              Keep the documentation for my personal projects updated and
              informative.
            </li>
            <li>
              Write more tests for my projects and get more proficient in
              testing in general.
            </li>
            <li>
              <span className="emphasized-text">
                Create software that can help people and have a positive impact
                on the world.
              </span>
            </li>
          </ul>
          <ul className="list-heading">
            What I'm learning now
            <li>AWS - pursuing the Cloud Practitioner Certification</li>
            <li>GraphQL</li>
            <li>NoSQL databases</li>
            <li>Database design</li>
            <li>Next.js</li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default About;
