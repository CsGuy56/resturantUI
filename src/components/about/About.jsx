import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/chefava.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Bittu Burger Wala</h4>
          <p>
            We are Bittu Burger Wala. The place for most tasty burgers on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Chef Sanju</h3>
            </div>

            <p>
              I am Chef Sanju, the founder of Bittu Burger Wala. Affiliated to
              Good Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;