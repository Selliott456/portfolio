import React from "react";
import elixir from "../images/elixir.svg";
import phoenix from "../images/phoenix.svg";
import react from "../images/react.svg";
import javascript from "../images/javascript.svg";
import mongodb from "../images/mongodb.svg";
import node from "../images/node.svg";
import python from "../images/python.svg";
import flask from "../images/flask.svg";
import sass from "../images/sass.svg";
import css from "../images/css.svg";
import github from "../images/github.svg";

// Simple Icons CDN (same filter applied in CSS so they match site colour)
const icon = (slug) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;

// Organised by category from your development folder; each has an icon (local or CDN)
const techByCategory = [
  {
    category: "Frontend",
    items: [
      { src: react, label: "React" },
      { src: javascript, label: "JavaScript" },
      { src: css, label: "CSS" },
      { src: sass, label: "Sass" },
      { src: icon("svelte"), label: "Svelte" },
      { src: icon("typescript"), label: "TypeScript" },
      { src: icon("vite"), label: "Vite" },
      { src: icon("webpack"), label: "Webpack" },
      { src: icon("bootstrap"), label: "Bootstrap" },
      { src: icon("tailwindcss"), label: "Tailwind" },
    ],
  },
  {
    category: "Elixir / Phoenix",
    items: [
      { src: elixir, label: "Elixir" },
      { src: phoenix, label: "Phoenix" },
      { src: icon("phoenixframework"), label: "LiveView" },
      { src: icon("elixir"), label: "Ecto" },
      { src: icon("graphql"), label: "Absinthe" },
    ],
  },
  {
    category: "Python & Ruby",
    items: [
      { src: python, label: "Python" },
      { src: flask, label: "Flask" },
      { src: icon("ruby"), label: "Ruby" },
      { src: icon("rubyonrails"), label: "Rails" },
    ],
  },
  {
    category: "Data & runtime",
    items: [
      { src: node, label: "Node" },
      { src: mongodb, label: "MongoDB" },
      { src: icon("postgresql"), label: "PostgreSQL" },
      { src: icon("mysql"), label: "MySQL" },
    ],
  },
  {
    category: "Tools",
    items: [
      { src: icon("graphql"), label: "GraphQL" },
      { src: icon("strapi"), label: "Strapi" },
      { src: icon("createreactapp"), label: "Create React App" },
    ],
  },
];

function About() {
  return (
    <section className="about-section" aria-label="About">
      <div className="about-boxes">
        <div className="about-box about-box--tech">
          <h3 className="about-box__heading">Tech</h3>
          <div className="about-box__categories">
            {techByCategory.map(({ category, items }) => (
              <div key={category} className="about-box__category">
                <h4 className="about-box__category-heading">{category}</h4>
                <ul className="about-box__list">
                  {items.map(({ src, label }) => (
                    <li key={label} className="about-box__item">
                      {src ? (
                        <span className="about-box__icon-wrap">
                          <img
                            className="about-box__icon"
                            alt=""
                            src={src}
                            aria-hidden="true"
                          />
                        </span>
                      ) : (
                        <span
                          className="about-box__icon-wrap about-box__icon-wrap--text"
                          aria-hidden="true"
                        >
                          <span className="about-box__initial">
                            {label.charAt(0)}
                          </span>
                        </span>
                      )}
                      <span className="about-box__label">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
