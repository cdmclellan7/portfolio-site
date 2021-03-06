function Projects() {
  return (
    <>
      <main>
        <h1 className="page-title">My Projects</h1>
        <h2>Full-Stack Apps</h2>
        <div className="projects-container">
          <div className="project">
            {" "}
            <a
              href="https://in-the-l00p.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="project-title">In the Loop</p>
            </a>
            <p>
              A messaging forum where School of code bootcampers can ask and
              answer coding questions. The MVP was made for the School of Code's
              1-week team project. I am continuing to add functionality.
            </p>
            <a
              href="https://github.com/cdmclellan7/in-the-loop"
              target="_blank"
              rel="noopener noreferrer"
            >
              See on GitHub
            </a>
            <ul>
              <li>React</li>
              <li>Node.js / Express</li>
              <li>Postgres</li>
              <li>Auth0 - user authentication</li>
            </ul>
          </div>
          <div className="project">
            {" "}
            <a
              href="https://emoji-garden-timer.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="project-title">Emoji Garden</p>
            </a>
            <p>
              A joyful pomodoro timer using tomato emojis to persistently record
              your working sessions. Sign up and create a personal garden. Click
              anywhere to plant a seed which takes 25 minutes to grow into a
              tomato emoji. All emojis are saved in a database so you can see
              your garden become more and more fruitful as you work.
            </p>
            <a
              href="https://github.com/cdmclellan7/emoji-garden"
              target="_blank"
              rel="noopener noreferrer"
            >
              See on GitHub
            </a>
            <ul>
              <li>HTML / CSS / JS</li>
              <li>EJS</li>
              <li>Node.js / Express</li>
              <li>Postgres</li>
              <li>Passport.js / bcrypt - user authentication</li>
            </ul>
          </div>
        </div>

        <h2>Frontend Apps</h2>
        <div className="projects-container">
          <div className="project">
            {" "}
            <a
              href="https://cdmclellan7.github.io/yummy-brummy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="project-title">Yummy Brummy</p>
            </a>
            <p>
              A recipe finding app using the Edamam API. This project was
              originally a School of Code 1-day hackathon project. I organised a
              group of bootcampers to maintain this project as an open source
              project going forward. The main goal was to provide bootcampers a
              welcoming and supportive introduction to open source contribution
              on GitHub.
            </p>
            <a
              href="https://github.com/cdmclellan7/yummy-brummy"
              target="_blank"
              rel="noopener noreferrer"
            >
              See on GitHub
            </a>
            <ul>
              <li>HTML / CSS / JS</li>
              <li>External API</li>
              <li>UX/UI Design Planning</li>
            </ul>
          </div>
          <div className="project">
            {" "}
            <a
              href="https://minimalist-blog-design.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="project-title">Minimalist Blog</p>
            </a>
            <p>A blog designed with pleasant simplicity in mind.</p>
            <a
              href="https://github.com/cdmclellan7/w10_recap-tasks-cdmclellan7"
              target="_blank"
              rel="noopener noreferrer"
            >
              See on GitHub
            </a>
            <ul>
              <li>React</li>
              <li>Ant Design</li>
              <li>CSS Modules</li>
              <li>Auth0 - user authentication</li>
            </ul>
          </div>
          <div className="project">
            {" "}
            <a
              href="https://lotr-movie-quote-quiz.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="project-title">
                Lord of the Rings Movie Quote Quiz
              </p>
            </a>
            <p>
              A fun Lord of the Rings movie quote quiz. Test your knowledge by
              guessing which character said the quote!
            </p>
            <a
              href="https://github.com/cdmclellan7/lotr-quote-quiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              See on GitHub
            </a>
            <ul>
              <li>React</li>
              <li>External API</li>
              <li>Fetch request with API Bearer Token</li>
            </ul>
          </div>
        </div>
        <h2>D3.js Data Visualisations</h2>
        <div className="projects-container">
          <div className="project">
            <iframe
              height="454"
              style={{ width: "100%" }}
              scrolling="no"
              title="FCC - D3 Tree Map"
              src="https://codepen.io/stressstressstress/embed/PoZoLqL?default-tab=js%2Cresult"
              frameborder="no"
              loading="lazy"
              allowtransparency="true"
              allowfullscreen="true"
            >
              See the Pen{" "}
              <a href="https://codepen.io/stressstressstress/pen/PoZoLqL">
                FCC - D3 Tree Map
              </a>{" "}
              by Casey (
              <a href="https://codepen.io/stressstressstress">
                @stressstressstress
              </a>
              ) on <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </div>
          <div className="project">
            <iframe
              height="454"
              style={{ width: "100%" }}
              scrolling="no"
              title="FCC - D3 Choropleth Map"
              src="https://codepen.io/stressstressstress/embed/LYEoBgO?default-tab=js%2Cresult"
              frameborder="no"
              loading="lazy"
              allowtransparency="true"
              allowfullscreen="true"
            >
              See the Pen{" "}
              <a href="https://codepen.io/stressstressstress/pen/LYEoBgO">
                FCC - D3 Choropleth Map
              </a>{" "}
              by Casey (
              <a href="https://codepen.io/stressstressstress">
                @stressstressstress
              </a>
              ) on <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </div>
          <div className="project">
            <iframe
              height="454"
              style={{ width: "100%" }}
              scrolling="no"
              title="FCC - D3 Heat Map"
              src="https://codepen.io/stressstressstress/embed/WNbqmBW?default-tab=js%2Cresult"
              frameborder="no"
              loading="lazy"
              allowtransparency="true"
              allowfullscreen="true"
            >
              See the Pen{" "}
              <a href="https://codepen.io/stressstressstress/pen/WNbqmBW">
                FCC - D3 Heat Map
              </a>{" "}
              by Casey (
              <a href="https://codepen.io/stressstressstress">
                @stressstressstress
              </a>
              ) on <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </div>
        </div>
      </main>
    </>
  );
}

export default Projects;
