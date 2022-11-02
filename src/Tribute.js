import React from "react";
import "./Tribute.css";

export default function Tribute() {
  return (
    <div className="container">
      <h1 className="title">Taylor Hawkins</h1>
      <p>From Texas to "Best Rock Drummer" in 2005</p>
      <span className="img-div">
        <img
          src="https://www.rollingstone.com/wp-content/uploads/2022/03/taylor-hawkins.jpg"
          alt="Foo Fighters band"
        />
        <span className="img-caption">Foo Fighters' drummer</span>
      </span>

      <span className="tribute-info">
        <h3 className="headline">Taylor Hawkinks' brief story:</h3>
        <ul>
          <li>
            {" "}
            Oliver Taylor Hawkins was an American musician, widely known as the
            drummer for the rock band Foo Fighters, with whom he recorded eight
            studio albums between 1999 and 2021. Before joining the band in
            1997, he was the touring drummer for Sass Jordan and for Alanis
            Morissette, as well as the drummer in the progressive experimental
            band Sylvia.
          </li>
          <li>
            {" "}
            In 2004, Hawkins formed his own side project, Taylor Hawkins and the
            Coattail Riders, in which he played drums and sang, releasing three
            studio albums between 2006 and 2019. He formed the supergroup NHC
            with Jane's Addiction members Dave Navarro and Chris Chaney in 2020,
            where he also took on lead vocal and drumming duties.[1] The band's
            sole album is due for release in 2022.{" "}
          </li>
          <li>
            {" "}
            Hawkins was inducted into the Rock and Roll Hall of Fame in 2021 as
            a member of Foo Fighters. He was voted "Best Rock Drummer" in 2005
            by the British drumming magazine Rhythm. He died on March 25, 2022,
            in Bogotá, Colombia, after suffering from chest pain.
          </li>
        </ul>
      </span>

      <div className="quotation">
        <p>
          "Taylor was playing with Alanis Morissette, who was selling out
          stadiums all over the world,I imagined that for him, to play drums in
          the Foo Fighters would be considered a demotion"..."The first time we
          had a beer together, we were like, 'We're gonna be best friends for
          the rest of our lives,'. And it's true, really, we're like this."
        </p>
        <cite> - Dave Grohl for Radio X in 2017.</cite>
      </div>

      <h3>
        If you are interested in reading more about Taylor's life,{" "}
        <a
          id="tribute-link"
          href="https://en.wikipedia.org/wiki/Taylor_Hawkins#Career"
          target="_blank"
          rel="noreferrer"
        >
          click here
        </a>
        .
      </h3>
      <hr />

      <footer>
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/laurassanches"
          target="_blank"
          rel="noreferrer"
        >
          LSanches
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/LSSanches/tribute-page"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://tributepagebylaura.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}
