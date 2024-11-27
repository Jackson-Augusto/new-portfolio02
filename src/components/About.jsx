import React, { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section About ===================================== --> */}
      <section className="About-section jos" id="about">
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">About Me.</h2>
          <div className="line"></div>
        </div>
        <p className="section-sub-text about-sub-text zoom_in">
          Hi, my name is <span>Jackson Augusto</span> i'm from <spam>Brazil</spam>, i working in areaof Motion Designer along 6 years,
          I have done highly praised 2D and 3D work, I like and enjoy what I do. I currently work as a Feelancer which gives me the opportunity 
          to always create and use new techniques to deliver the project not only on time but also with the quality that my clients deserve.
        </p>
        <div className="about-detail-main">
          <p className="about-detail">Name</p>
          <p className="about-detail-info">Jackson Augusto</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Nationality</p>
          <p className="about-detail-info">BR</p>
        </div>
        <div className="about-detail-main">
         
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <p
            className="about-detail-info email"
            onClick="location.href='jacksonaugusto137@gmail.com'"
          >
            jacksonaugusto137@gmail.com
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Experience</p>
          <p className="about-detail-info">6+ years</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Freelance</p>
          <p className="about-detail-info">Available</p>
        </div>
        
        <div className="about-detail-main">
          <p className="about-detail">Language</p>
          <p className="about-detail-info">English / Portuguese</p>
        </div>
      </section>
      {/* <!-- ====================================== Section About End ===================================== --> */}
    </>
  );
};
export default AboutSection;
