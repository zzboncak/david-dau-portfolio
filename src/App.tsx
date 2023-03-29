import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faSchoolCircleCheck,
  faCertificate,
  faSquareRootVariable,
  faQuestion,
  faChartLine,
  faSquareFull,
  faPercent
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const iconColor = "white";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi there 👋</h1>
        <p>I'm David Dau and I'm here to help.</p>
      </header>
      <main>
        <section className="credentials-section">
          <header>
            <h2>Credentials</h2>
          </header>
          <section className="credentials-grid">
            <article className="credential">
              <p>Currently in my 10th year of teaching high school Math</p>
              <FontAwesomeIcon icon={faSchoolCircleCheck} color={iconColor} />
            </article>
            <article className="credential">
              <FontAwesomeIcon icon={faCertificate} color={iconColor} />
              <p>Certified to teach grades 6-12</p>
            </article>
            <article className="credential">
              <p>
                Degree from Marquette University in Secondary Education and
                Mathematics
              </p>
              <FontAwesomeIcon icon={faGraduationCap} color={iconColor} />
            </article>
            <article className="credential">
              <FontAwesomeIcon icon={faGraduationCap} color={iconColor} />
              <p>
                Masters Degree from Concordia University in Curriculum and
                Instruction
              </p>
            </article>
            <article className="credential">
              <p>
                Masters Degree from Concordia University in Differentiated
                Instruction
              </p>
              <FontAwesomeIcon icon={faGraduationCap} color={iconColor} />
            </article>
            <article className="credential">
              <FontAwesomeIcon icon={faGraduationCap} color={iconColor} />
              <p>
                Masters Degree from American College of Education in Educational
                Technology
              </p>
            </article>
          </section>
        </section>
        <section className="secondary-background">
          <h2>I can help with...</h2>
          <ul className="credentials-list">
            {/** Maybe wrap the icons or symbols in a span to style them and make them stand out */}
            <li>
              <FontAwesomeIcon icon={faSquareRootVariable} />
              6th-8th grade math
            </li>
            <li>
              <FontAwesomeIcon icon={faPercent} />
              Algebra I
            </li>
            <li>
              <FontAwesomeIcon icon={faChartLine} />
              Algebra II/Trig
            </li>
            <li>
              <FontAwesomeIcon icon={faSquareFull} />
              Geometry
            </li>
            <li>&theta; Trigonometry</li>
            <li>∫ Precalculus</li>
            <li>2(x + 3) Integrated Math 1, 2, 3</li>
            <li>
              <FontAwesomeIcon icon={faQuestion} />
              If unsure, feel free to just ask!
            </li>
          </ul>
        </section>
        <section>
          <h2>Testimonials</h2>
          <article>
            <blockquote>
              <p>
                David saved the day for our daughter who was struggling in
                Precalculus. We reached out to him and his response was
                immediate and we set up a time that week. Loved his offer to
                meet in our home. Our daughter's grade was a C but she was able
                to get it up to an A in the next semester. I would give credit
                to David for instilling her confidence in math and helping her
                with greater understanding
              </p>
            </blockquote>
            <cite>Parent of student in Precalculus</cite>
          </article>
          <article>
            <blockquote>
              <p>Mr. Dau explained concepts so that I could understand it.</p>
            </blockquote>
            <cite>Precalculus student</cite>
          </article>
          <article>
            <blockquote>
              <p>
                Mr. Dau tutored me in my precalculus Honors class. I went from
                low Bs to high As on my exams. He walked through all my notes
                and explained everything I didn't understand.
              </p>
            </blockquote>
            <cite>Precalculus student</cite>
          </article>
          <article>
            <blockquote>
              <p>
                I highly recommend David as a math tutor. He helped explain
                complicated concepts in a way my son understood and helped boost
                his confidence. He also came to our home and was flexible to
                accommodate my son's busy sports schedule.
              </p>
            </blockquote>
            <cite>Parent of student</cite>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
