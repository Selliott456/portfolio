import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import siteBg from "./images/andrew-kliatskyi-ZV79vhL6ppk-unsplash.jpg";
import meSun from "./images/me_sun.jpg";
// import Projects from "./components/Projects";

const FADE_THRESHOLDS = Array.from({ length: 21 }, (_, i) => i / 20);
// Contact bg goes dark → white over hero + portrait (slower, white only after photo section)
const CONTACT_BG_SCROLL_RANGE_MULTIPLIER = 1.6; // × viewport height

function lerp(start, end, t) {
  return Math.round(start + (end - start) * t);
}

function App() {
  const [sectionOpacity, setSectionOpacity] = useState({
    hero: 1,
    about: 0,
    portrait: 0,
  });
  const [contactBg, setContactBg] = useState("rgb(26, 26, 30)");
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const range = window.innerHeight * CONTACT_BG_SCROLL_RANGE_MULTIPLIER;
      const t = Math.min(1, window.scrollY / range);
      const r = lerp(26, 255, t);
      const g = lerp(26, 255, t);
      const b = lerp(30, 255, t);
      setContactBg(`rgb(${r}, ${g}, ${b})`);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setSectionOpacity((prev) => {
          const next = { ...prev };
          entries.forEach((entry) => {
            const ratio = entry.intersectionRatio;
            if (entry.target === heroRef.current) next.hero = ratio;
            else if (entry.target === aboutRef.current) next.about = ratio;
            else if (entry.target === portraitRef.current)
              next.portrait = ratio;
          });
          return next;
        });
      },
      { root: null, rootMargin: "0px", threshold: FADE_THRESHOLDS }
    );

    const timeoutId = setTimeout(() => {
      [heroRef.current, portraitRef.current, aboutRef.current].forEach(
        (node) => node && observer.observe(node)
      );
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className="site-bg"
        style={{ backgroundImage: `url(${siteBg})` }}
        aria-hidden="true"
      />
      <main className="app-main">
        <section
          ref={heroRef}
          className="scroll-section scroll-section--hero"
          style={{ opacity: sectionOpacity.hero }}
        >
          <Home />
        </section>
        <div className="sticky-context">
          <Contact background={contactBg} />
          <section
            ref={portraitRef}
            className="scroll-section scroll-section--portrait"
            style={{ opacity: sectionOpacity.portrait }}
          >
            <div className="scroll-section__inner portrait-section">
              <img
                src={meSun}
                alt=""
                className="portrait-section__img"
                aria-hidden="true"
              />
              <p className="portrait-section__statement">I make software</p>
            </div>
          </section>
          <section
            ref={aboutRef}
            className="scroll-section scroll-section--about"
            style={{ opacity: sectionOpacity.about }}
          >
            <div className="scroll-section__inner">
              <About />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
