import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faSchoolCircleCheck,
  faCertificate,
  faQuestion,
  faChartLine,
  faSquareFull,
  faPercent,
  faCalculator,
  faPlusMinus,
  faInfinity,
  faSuperscript,
  IconDefinition,
  // faSquareRootVariable, // Maybe use later if we want different icons
  // faNotEqual, // Maybe use later if we want different icons
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const iconColor = "white";

interface StickyScrollHelpProps {
  icon: IconDefinition;
  text: string;
  paddingTop: string;
}

function StickyScrollHelp({ icon, text, paddingTop }: StickyScrollHelpProps) {
  return (
    <article
      className="absolute help-item"
      style={{ height: "50vh", paddingTop }}
    >
      <div className="flex align-baseline full-height">
        <div className="sticky">
          <FontAwesomeIcon className="help-icon" icon={icon} />
        </div>
        <p className="help-subject">{text}</p>
      </div>
    </article>
  );
}

const helpItems: Omit<StickyScrollHelpProps, "paddingTop">[] = [
  {
    icon: faPlusMinus,
    text: "6th-8th grade math",
  },
  {
    icon: faPercent,
    text: "Algebra I",
  },
  {
    icon: faSuperscript,
    text: "Algebra II/Trig",
  },
  {
    icon: faCalculator,
    text: "Trigonometry",
  },
  {
    icon: faSquareFull,
    text: "Geometry",
  },
  {
    icon: faChartLine,
    text: "Precalculus",
  },
  {
    icon: faInfinity,
    text: "Integrated Math 1, 2, 3",
  },
  {
    icon: faQuestion,
    text: "If unsure, feel free to just ask!",
  },
];

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
          <section
            className="help-container relative"
            style={{ height: "400vh" }}
          >
            {helpItems.map((item, index) => (
              <StickyScrollHelp
                key={index}
                icon={item.icon}
                text={item.text}
                paddingTop={`${index * 50}vh`}
              />
            ))}
          </section>
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
