import React, { useEffect, useRef } from "react";
import FigmaImg from "../assets/images/figma-img.png";
import PhotoShopImg from "../assets/images/photoshop-img.png";
import AdobeImg from "../assets/images/AElogo.png";
import C4DImg from "../assets/images/Cinema-4D-Logo.png";
import BlenderImg from "../assets/images/Blender_logo_no_text.svg.png";
import WinnerAward from "../assets/images/html5-logo.png";
import WinnerAward2 from "../assets/images/css-logo.png";
import WinnerAward3 from "../assets/images/JavaScript-Symbol.png";
import WinnerAward4 from "../assets/images/Reactlogo.png";

const Resume = () => {
  const colors = [
    "#BCE70C",
    "#FF759C",
    "#00CC97",
    "#FFDB59",
    "#6F39FD",
    "#FF7D61",
  ];
  const progressRef = useRef(null);
  const hasAnimated = useRef(false); // Track if the animation has already run

  useEffect(() => {
    const progressSection = progressRef.current;
    const items = progressSection.querySelectorAll(".progress-item");
    const observerOptions = { threshold: 0.1 };

    function handleIntersection(entries, observer) {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        items.forEach((item, index) => {
          let num = parseInt(item.dataset.num);
          let count = 0;
          let color = colors[index % colors.length];
          let interval = setInterval(() => {
            if (count === num) {
              clearInterval(interval);
            } else {
              count++;
              item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
              item.setAttribute("data-value", `${count}%`);
              item.innerHTML = `${count}%`;
            }
          }, 15);
        });
        observer.unobserve(progressSection);
        hasAnimated.current = true; // Mark that the animation has run
      }
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    observer.observe(progressSection);

    return () => observer.disconnect();
  }, [colors]);

  return (
    <>
      {/* <!-- ====================================== Section Education Experience ===================================== --> */}
      <section className="education-experience" id="resume">
        <div className="row">
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Education.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Master in Design</p>
                <p className="cursus university">
                  Cambridge University / 2010 - 2014
                </p>
                <p className="cursus">
                  Eu nulla at mauris cursus consectetur posuere iaculis ipsum
                  neque. Morbi felis pellentesque ligula sed dictumst imperdiet
                  nunc vulputate.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Bachelor in Science</p>
                <p className="cursus university">
                  Cambridge University / 2014 - 2016
                </p>
                <p className="cursus">
                  Porttitor euismod at semper ut massa. Lorem varius magna
                  volutpat nunc. Et faucibus scelerisque donec augue eleifenda
                  morbi.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Diploma in Computer</p>
                <p className="cursus university">
                  Cambridge University / 2016 - 2018
                </p>
                <p className="cursus">
                  Adipiscing sed magna tempus arcu morbi. Ipsum pellentesque
                  lorem suscipit in. Hendrerit rhoncus quis tempor urna pharetra
                  ut erat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Experience.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">LEAD DESIGN & DEVELOPMENT</p>
                <p className="cursus university">Envato / 2020 - Current</p>
                <p className="cursus">
                  Ipsum erat duis leo lectus tellus neque dictumst. Dignissim
                  tortor quis nisl mi lectus. Massa facilisis ac eget fermentum
                  vitae. Dictum rutrum sed.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">SENIOR DESIGN & DEVELOPEMNT</p>
                <p className="cursus university">Apple / 2019 - 2020</p>
                <p className="cursus">
                  Congue dolor gravida eu tristique netus posuere dolor.
                  Penatibus imperdiet egestas ut sit scelerisque sapien a lor
                  sjsa.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">JUNIOR DESIGN & DEVELOPMENT</p>
                <p className="cursus university">Twitter / 2018 - 2019</p>
                <p className="cursus">
                  Aliquet at interdum pellentesque non fringilla eget orci
                  suspendisse. A iaculis augue vitae ultricies fusce sit dolor
                  gravida .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
      {/* <!-- ====================================== Section Coding Skill ===================================== --> */}
      <section className="coding-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Coding Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div id="progress" ref={progressRef}>
          <div data-num="79" className="progress-item fade_up">
            sd
          </div>
          <div data-num="92" className="progress-item fade_up">
            sd
          </div>
          <div data-num="85" className="progress-item fade_up">
            sd
          </div>
          <div data-num="70" className="progress-item fade_up">
            sd
          </div>
          <div data-num="76" className="progress-item fade_up">
            ds
          </div>
          <div data-num="83" className="progress-item fade_up">
            ds
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Design Skill ===================================== --> */}
     
      <section className="design-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
          Design Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div className="row awards-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={AdobeImg}
                        alt="winner-award4"
                      />
                      <p className="award-yer">Start in 2020</p>
                    </div>
                    <p className="award-interior">After Effects</p>
                    <p className="award-winner-text">Advanced Level</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                    I have 5 years of experience with After Effects, creating motion graphics and animations for advertising and institutional projects. 
                    I master 97% of the program.
                    </p>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={PhotoShopImg}
                        alt="winner-award2"
                      />
                      <p className="award-yer">Start in 2022</p>
                    </div>
                    <p className="award-interior">Photoshop</p>
                    <p className="award-winner-text">Advanced Level</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                    I have 3 years of experience in Photoshop, working with editing, creating compositions and graphic design. 
                    I master tools such as masks, color adjustments, almost always using them together with After Effects. I master 80% of the program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={C4DImg}
                        alt="winner-award3"
                      />
                      <p className="award-yer">Start in 2022</p>
                    </div>
                    <p className="award-interior">Cinema 4D</p>
                    <p className="award-winner-text">Medium Level</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                    I have 3 years of experience in Cinema 4D, with mastery in modeling, animation and rendering.
                    I use octane render and redshift as render engines. I master 80% of the program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={BlenderImg}
                        alt="winner-award4"
                      />
                      <p className="award-yer">Start in 2021</p>
                    </div>
                    <p className="award-interior">Blender</p>
                    <p className="award-winner-text">Advanced Level</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                    I have 4 years of experience in Blender, with mastery in modeling, animation and rendering.
                    I use Cyles and Eevee as render engines. I master 80% of the program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Award ===================================== --> */}
      <section className="awards-section overflow-hidden">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
          Developer Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div className="row awards-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward}
                        alt="winner-award4"
                      />
                      <p className="award-yer">2025</p>
                    </div>
                    <p className="award-interior">HTML</p>
                    <p className="award-winner-text">Medium Level</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                    I have experience as a junior front-end developer, with average command of HTML.
                     I am able to structure semantic and responsive web pages, following good practices to create clean and functional codes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward2}
                        alt="winner-award2"
                      />
                      <p className="award-yer">2024</p>
                    </div>
                    <p className="award-interior">CSS</p>
                    <p className="award-winner-text">Medium Level</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                    I have experience as a junior front-end developer, with average command of CSS.
                     I can style web pages, create responsive layouts and apply basic animations, always seeking good practices and attention to visual details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward3}
                        alt="winner-award3"
                      />
                      <p className="award-yer">2023</p>
                    </div>
                    <p className="award-interior">Java Script</p>
                    <p className="award-winner-text">Basic Level</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                    I have experience as a junior front-end, with average command of JavaScript. 
                    I can manipulate the DOM, create basic interactivity on pages and solve logic problems, in addition to working with functions and events to improve the user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward4}
                        alt="winner-award4"
                      />
                      <p className="award-yer">2022</p>
                    </div>
                    <p className="award-interior">React JS</p>
                    <p className="award-winner-text">Basic Level</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                    I have experience as a junior front-end developer, with basic knowledge of React.js. 
                    I am able to create functional components, manage states with hooks and build interactive interfaces, always focusing on code organization and reuse.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Award End ===================================== --> */}
    </>
  );
};
export default Resume;
