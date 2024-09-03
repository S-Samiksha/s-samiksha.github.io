import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [showFront, setShowFront] = useState(true);

  // Function to handle the end of the animation
  const handleAnimationEnd = () => {
    setShowFront(false);
  };

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={`/portfolio/coffee.png`}
                alt="Cup of Coffee"
                className={styles.image}
              />
            </div>
            <div className={styles.textContainer}>
              <h1>Welcome to My Portfolio</h1>
              <p>
                Hi, I'm Samiksha. Sam for Short! :) I love coffee as much as I
                love coding! Made this simple portfolio for fun and to learn
                front-end, not much of a front end coder. Still in Progress...
                &#128187; <br />
                <br /> Have featured my CS projects in the Computer Science
                Projects Tab. Still working on some of write-ups. I also have
                some Economics Projects, do hope over to the Economics Projects
                Tab as well &#128526;
                <br />
                <br />
                <b>Currently, I am Learning....</b>
                <br />
              </p>

              <ul className={styles.learningList}>
                <li>Chinese</li>
                <li>Front-End Development</li>
              </ul>
              <p>
                <b>My Hobbies are: </b>
              </p>
              <ul className={styles.learningList}>
                <li>Swimming</li>
                <li>Coding</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
