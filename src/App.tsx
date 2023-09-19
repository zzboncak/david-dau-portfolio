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
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import IntroVideo from "./assets/David_Intro.mp4";
import "./App.css";

const iconColor = "white";

interface StickyScrollHelpProps {
  icon: IconDefinition;
  text: string;
  paddingTop: string;
  sticky?: boolean;
}

interface TestimonialProps {
  citation: string;
  children: React.ReactNode;
}

function Testimonial({ citation, children }: TestimonialProps) {
  return (
    <article>
      <blockquote>
        <p>{children}</p>
      </blockquote>
      <cite>{citation}</cite>
    </article>
  );
}

function StickyScrollHelp({
  icon,
  text,
  paddingTop,
  sticky,
}: StickyScrollHelpProps) {
  return (
    <article
      className="absolute help-item"
      style={{ height: "50vh", paddingTop }}
    >
      <div className="flex align-baseline full-height">
        <div className={sticky ? "sticky" : undefined}>
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
          <video controls>
            <source src={IntroVideo} />
          </video>
          <header>
            <h2>Credentials</h2>
          </header>
          <section className="credentials-grid">
            <article className="credential">
              <FontAwesomeIcon icon={faSchoolCircleCheck} color={iconColor} />
              <p>Currently in my 10th year of teaching high school Math</p>
            </article>
            <article className="credential">
              <FontAwesomeIcon icon={faCertificate} color={iconColor} />
              <p>Certified to teach grades 6-12</p>
            </article>
            <article className="credential">
              <FontAwesomeIcon icon={faGraduationCap} color={iconColor} />
              <p>Degrees from</p>
            </article>
            <article className="credential">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faScroll} color={iconColor} />
                  <p>
                    Marquette University - B.A. in Secondary Education and
                    Mathematics
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faScroll} color={iconColor} />
                  <p>
                    Concordia University - M.A. in Curriculum and Instruction
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faScroll} color={iconColor} />
                  <p>
                    Concordia University - M.A. in Differentiated Instruction
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faScroll} color={iconColor} />
                  <p>
                    American College of Education - M.A. in Educational
                    Technology
                  </p>
                </li>
              </ul>
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
                sticky={index !== helpItems.length - 1}
              />
            ))}
          </section>
          <p className="text-align-center">
            Contact me at{" "}
            <a href="mailto:David.dau25@gmail.com?subject=Tutoring Inquiry">
              David.dau25@gmail.com
            </a>{" "}
            for more information.
          </p>
        </section>
        <section>
          <h2>Testimonials</h2>
          <Testimonial citation="Parent of student in Precalculus">
            David saved the day for our daughter who was struggling in
            Precalculus. We reached out to him and his response was immediate
            and we set up a time that week. Loved his offer to meet in our home.
            Our daughter's grade was a C but she was able to get it up to an A
            in the next semester. I would give credit to David for instilling
            her confidence in math and helping her with greater understanding.
          </Testimonial>

          <Testimonial citation="Precalculus student">
            Mr. Dau explained concepts so that I could understand it.
          </Testimonial>

          <Testimonial citation="Precalculus student">
            Mr. Dau tutored me in my precalculus Honors class. I went from low
            Bs to high As on my exams. He walked through all my notes and
            explained everything I didn't understand.
          </Testimonial>

          <Testimonial citation="Parent of student">
            I highly recommend David as a math tutor. He helped explain
            complicated concepts in a way my son understood and helped boost his
            confidence. He also came to our home and was flexible to accommodate
            my son's busy sports schedule.
          </Testimonial>
        </section>
      </main>
    </div>
  );
}

export default App;
