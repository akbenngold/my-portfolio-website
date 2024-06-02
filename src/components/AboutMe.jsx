import React from "react";
import SectionTitle from "./SectionTitle";

function AboutMe() {
  return (
    <div className="section-container py-16" id="about-me">
      <SectionTitle
        title="About me."
        subtitle={`"It's not the years, it's the mileage"`}
      />
      <div className="flex flex-col gap-4 mt-10">
        <p>
          Hi again, I'm Ojima, a web developer with a passion for design and a
          knack for keeping things simple.
        </p>
        <p>
          My approach to web development is centered around creating intuitive
          and user-friendly interfaces; I'm always looking for ways to improve my
          skills and share knowledge with others.
        </p>
        <p>
          When I'm not coding, you can find me writing technical articles on{" "}
          <a href="" className="underline">
            my Hashnode blog
          </a>{" "}
          or curating cool playlists{" "}
          <a
            className="underline "
            href="https://music.apple.com/profile/akbenngold?ls"
          >
            on my Apple Music
          </a>
          . I'm a lover of sci-fi movies, an avid reader and an enthusiastic
          cook.
        </p>
        <p>Thanks for stopping by, and let's connect!</p>
      </div>{" "}
    </div>
  );
}

export default AboutMe;
