export default function Main (props) {
  return (
    <main>
      <section className="hero">
        <h1>Learn to Code like a Pro</h1>
        <h3>Coding is <u>essential</u> for the present and the future!<br/>Learn the methods and tools used by professionals</h3>
        <br/><br/>
        <button>Sign up</button>
      </section>
      <aside>
        <div>
          <h4>&#9733; Small in-person classes</h4>
          <p>Research conclusively shows we learn much better in person; especially in a small-class setting.</p>
          <a href="/">Learn more &gt;</a>
        </div>
        <div>
          <h4>♛ Superior curriculum</h4>
          <p>Learn advanced skills that are actually in demand and command a premium in the job market</p>
          <a href="#curr">Learn more &gt;</a>
        </div>
        <div>
          <h4>&#9775; Affordable</h4>
          <p>We teach better skills; at a very reasonable cost per hour of instuction</p>
          <a href="/">Learn more &gt;</a>
        </div>
      </aside>
      <article>
        <h1>5 of the top 10 business people<br/>started coding as teenagers</h1>
        <div>
          <div>
            <img src="img/em.jpg" alt="musk" />
            <h5>Elon Musk<br/>Co-founder<br/>Tesla</h5>
          </div>
          <div>
            <img src="img/lp.jpg" alt="page" />
            <h5>Larry Page<br/>Co-founder<br/>Google</h5>
          </div>
          <div>
            <img src="img/sb.jpg" alt="brin" />
            <h5>Sergey Brin<br/>Co-founder<br/>Google</h5>
          </div>
          <div>
            <img src="img/bg.jpg" alt="gates" />
            <h5>Bill Gates<br/>Co-founder<br/>Microsoft</h5>
          </div>
          <div>
            <img src="img/mz.jpg" alt="mz" />
            <h5>Mark Zuckerberg<br/>Co-founder<br/>Meta</h5>
          </div>
        </div>
        <h2>You get it.  Coding offers<br/>unlimited earnings potential.</h2>
        <a href="/">Start your journey now &gt;</a>
      </article>
      <section id="curr">
        <h1>Begin with Web Dev or<br/>test into Software Engineering</h1>
        <div>
          <h2>Web Dev</h2>
          <img src="img/svg/js-c.svg" alt="js" width="40" />
          <img src="img/svg/html-5.svg" alt="html" width="40" />
          <img src="img/svg/css-3.svg" alt="css" width="40" />
          <img src="img/svg/react-c.svg" alt="React" width="40" />
          <img src="img/svg/nodejs-c.svg" alt="node" width="40" />
          <img src="img/svg/mongodb.svg" alt="mongo" width="40" />
          <p>JavaScript, Html, CSS, React, Node.js, MongoDB</p>
          <p><em>This is what most bootcamps cover in 8-10 weeks and charge $10-12k</em></p>
        </div>
        <em>&#10217;</em>
        <div>
          <h2>Software Engineering</h2>
          <img src="img/svg/python-5.svg" alt="Python" width="40" />
          <img src="img/svg/numpy.svg" alt="Numpy" width="40" />
          <img src="img/svg/Pandas.svg" alt="Pandas" width="40" />
          <img src="img/svg/Matplotlib.svg" alt="Matplotlib" width="40" />
          <img src="img/svg/sql.svg" alt="SQL" width="40" />
          <img src="img/svg/Scikit.svg" alt="Scikit" height="40" />
          <p>Python, Numpy, Pandas, Matplotlib, SQL, Scikit-Learn</p>
          <p><em>This is what most Data Science bootcamps cover</em></p>
          <img src="img/svg/python-5.svg" alt="Python" width="40" />
          <img src="img/svg/django.svg" alt="Django" width="35" />
          <img src="img/svg/docker-c.svg" alt="Docker" width="45" />
          <img src="img/svg/aws-c.svg" alt="aws" width="45" />
          <p>Python-advanced, Django, Docker, AWS</p>
          <p><em>Advance skills that are hard to find</em></p>
        </div>
      </section>
      <section className="sharp">
        <div>
          <h1>Python is easy to learn and gives you access to AI, Data Science, Crypto...</h1>
          <h5>Python is the language of Machine learning and Data Science, which generally have higher salaries.  Readable and relatively simple, it's easier to learn than C or Java.  It is powerfull, efficient, fast and has very broad range of applications beyond AI and Data Science.</h5>
          <a href="/">Learn more</a>
        </div>
      </section>
      <section>
        <img src="img/LearningPyramid.png" alt='learning pyramid' />
        <div>
          <h1>Learn by doing and collaborating</h1>
          <p>Practicing and helping others is 5-10x more effective than watching, listening or reading.</p>
          <p>At GoodHacker we spend most of the time coding with advanced professional tools and methods</p>
          <br/>
          <button>Apply now</button>
          <a href="/">Learn more &gt;</a>
        </div>
      </section>
      <section className="tile">
        <h1>To succeed at GoodHacker,<br/>you need 2 things:</h1>
        <div>
          <h2>#1 Growth Mindset</h2>
          <h5>&#10003; &nbsp; Believe talent can be developed by hard work, strategy, and feedback</h5>
          <h5>&#10003; &nbsp; Find lessons and inspiration in the success of others</h5>
          <h5>&#10003; &nbsp; Persist in the face of setbacks</h5>
          <h5>&#10003; &nbsp; Passion for learning</h5>
          <h5>&#10003; &nbsp; Embrace challenges</h5>
          <a href="/">Learn more &gt;</a>
        </div>
        <div>
          <h2>#2 Laptop</h2>
          <h5>&#9643; &nbsp; Up to date OS</h5>
          <h5>&#9643; &nbsp; 8+ GB RAM</h5>
          <h5>&#9643; &nbsp; 64+ GB HD</h5>
          <h5>&#9643; &nbsp; Able to run Linux</h5>
          <a href="/">Learn more &gt;</a>
        </div>
      </section>
    </main>
  );
}