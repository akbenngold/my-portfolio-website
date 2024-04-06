import React from "react";
import Hero from "../components/Hero";
import Button from "../components/Button";

function About() {
  return (
    <div>
      <Hero title="ABOUT ME" subtitle="IT'S A-ME, MARIO" />
      <div className="main about">
        <div className="background">
          <h2>About me</h2>
          <p>
            <span>Frontend developer, technical writer.</span>
            <br />
            <br />
            Technology has always fascinated me and understanding how it works
            under the hood intrigues me more. I have a constant curiosity about
            the creation process and underlying principles behind various
            technologies I encounter and I've not hesitated to learn about them.
          </p>
          <p>
            From No-code Development to Data Analytics to Quality Assurance to
            Technical Writing to Web Design to Web Development. Everything I
            have done, small or big, has been a vital stepping stone for where I
            am today. Web Development is my canvas and I delight in it because
            of the thrill of creating interfaces that seamlessly adapt to
            different devices and screen sizes ensuring a consistent and
            enjoyable user experience across all platforms is incredibly
            satisfying.{" "}
          </p>
          <p>
            Additionally, I relish the opportunity to bring static designs to
            life through interactive elements and subtle animations, ensuring
            smooth transitions, cresting journeys that effortlessly guide users
            towards their goals, optimizing performance, user authentication
            etc. I am dedicated to creating solutions that address the needs of
            both users and clients.
          </p>
          <p>
            The guiding principle I live by generally is "Keep it Simple" Just
            like Antoine de Saint-Exupéry said:
            <q>
              {" "}
              Perfection is achieved, not when there is nothing more to add, but
              when there is nothing left to take away.
            </q>
            This quote emphasizes the importance of simplicity and effectiveness
            in design and creation. It speaks to the idea that true excellence
            is not about adding more complexity, but rather about stripping away
            the unnecessary until only the essential remains. This resonates
            deeply with my philosophy of focusing on what truly matters and
            avoiding doing things for the sake of doing them. I want to add
            value to the world and add it well in whatever I do.
          </p>{" "}
          <p>
            Outside the digital realm, you'll often find me indulging in my
            diverse interests. Reading deeply about healthcare, listening to all
            genres of good music and being a good cook — I experiment with
            different flavors and techniques.
          </p>
        </div>
        {/* <div className="hobbies">
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem
          </p>
        </div> */}
        <Button arrow={String.fromCharCode(8594)} label="Contact me" />
      </div>
    </div>
  );
}

export default About;
