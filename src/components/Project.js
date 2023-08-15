import React from 'react'
import image1 from '../assets/images/password-generator-image.PNG'
import image2 from '../assets/images/work-day.png'
import image3 from '../assets/images/code-quiz.png'

function Project() {
  return (
    <section className="project">
      <div className="title">
        <h2>Projects</h2>
      </div>

      <section className="box-1">
        <div className="card-1">
          <img src={image1} alt="Password generator img" />
          <h5>Password Generator</h5>
          <p>
            I have created a password generator using HTML, CSS, and JavaScript, which allows users to generate strong and secure passwords with ease.
          </p>
          <a href="https://miguela14.github.io/password-generator/" target="_blank" rel="noopener noreferrer">
            <button>See More</button>
          </a>
        </div>
      </section>

      <section className="box">
        <div className="card">
          <img src={image2} alt="Workday Schedular img" />
          <h5>Workday Scheduler</h5>
          <p>
            This is a web application that allows you to plan your day by scheduling tasks in hourly time blocks. It uses local storage to save your input and displays the current date and time.
          </p>
          <a href="https://miguela14.github.io/workday-scheduler/" target="_blank" rel="noopener noreferrer">
            <button>See More</button>
          </a>
        </div>
      </section>

      <section className="box">
        <div className="card">
          <img src={image3} alt="Code Quiz img" />
          <h5>Code Quiz</h5>
          <p>
            An application built with HTML, CSS, and JavaScript. It allows users to test their knowledge of coding concepts and provides a score at the end of the quiz.
          </p>
          <a href="https://miguela14.github.io/code-quiz/" target="_blank" rel="noopener noreferrer">
            <button>See More</button>
          </a>
        </div>
      </section>
    </section>
  )
}

export default Project