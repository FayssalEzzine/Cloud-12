import React from 'react';
import './CourseContent.css';

function CourseContent() {
  const percent = 50;

  const CircularProgress = ({ progress }) => {
    const circumference = 50 * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
      <div className="circular-progress">
        <svg className="circle" aria-hidden="true">
          <circle className="circle-background" r="50" cx="60" cy="60" />
          <circle
            className="circle-progress"
            r="50"
            cx="60"
            cy="60"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="progress-text">{progress}%</span>
      </div>
    );
  };

  return (
    <React.Fragment>
      <title>courseContent</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <script src="https://cdn.tailwindcss.com"></script>
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />

      <div className="bg-gray-100">
        <div className="search-icon">
          <div className="absolute">
            <input
              type="text"
              placeholder="Search"
              className="absolute top-5 left-10 w-45 pl-10 ml-20 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-gray-800 fi1"
            />
            <div className="absolute top-5 left-10 mt-2 ml-3 text-gray-800 search-icon">
              <i className="fas fa-search ml-20"></i>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="bg-white w-16 h-screen flex flex-col items-center justify-between">
            {/* Logo */}
            <div className="my-4">
              <img src="assets/icon.png" alt="CRMEFCLOUD" className="w-53 h-38" />
            </div>
            {/* Ligne de séparation */}
            <div className="border border-gray-300 w-16 absolute top-40"></div>

            {/* Icônes du menu */}
            <i className="far fa-calendar-alt absolute top-48"></i>
            <i className="fas fa-signature absolute top-72"></i>
            <i className="fas fa-cog text-gray-800 absolute top-80"></i>
            <i className="fas fa-chart-pie text-gray-800 absolute top-t"></i>
          </div>

          <div>
            <i className="fas fa-bell ic2"></i>
          </div>

          <div className="person">
            <img src="assets/pr.jpg" alt="CRMEFCLOUD" className="E11" />
          </div>
        </div>

        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@2.7.3/dist/alpine.min.js" defer></script>

        <CircularProgress progress={percent} />

        <p className="course-pro">Course progress</p>
      </div>

      <p className="LLC">Learn Linux commands and practice as you progress</p>

      <p className="LLC1">
        This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3
      </p>

      <img src="assets/linux.png" alt="linux" className="ana" />

      <div className="faq-container">
        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-arrow">▼</span> Welcome to the course
          </div>
          <div className="faq-answer">
            <p>
              <b>II</b> Sous-réponse 2.1
            </p>
            <p>
              <b>II</b> Sous-réponse 2.2
            </p>
            <p>
              <b>II</b> Sous-réponse 2.3
            </p>
            <p>
              <b>II</b> Sous-réponse 2.4
            </p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-arrow">▼</span> Setting Up Linux
          </div>
          <div className="faq-answer">
            <p>
              <b>II</b> Sous-réponse 2.1
            </p>
            <p>
              <b>II</b> Sous-réponse 2.2
            </p>
            <p>
              <b>II</b> Sous-réponse 2.3
            </p>
            <p>
              <b>II</b> Sous-réponse 2.4
            </p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-arrow">▼</span> Basic Linux commands
          </div>
          <div className="faq-answer">
            <p>
              <b>II</b> navigation the file system
            </p>
            <p>
              <b>II</b> navigation the file system
            </p>
            <p>
              <b>II</b> navigation the file system
            </p>
            <p>
              <b>II</b> navigation the file system
            </p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-arrow">▼</span> Mastering open source software
          </div>
          <div className="faq-answer">
            <p>
              <b>II</b> Sous-réponse 2.1
            </p>
            <p>
              <b>II</b> Sous-réponse 2.2
            </p>
            <p>
              <b>II</b> Sous-réponse 2.3
            </p>
            <p>
              <b>II</b> Sous-réponse 2.4
            </p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-arrow">▼</span> Course conclusion
          </div>
          <div className="faq-answer">
            <p>
              <b>II</b> Sous-réponse 2.1
            </p>
            <p>
              <b>II</b> Sous-réponse 2.2
            </p>
            <p>
              <b>II</b> Sous-réponse 2.3
            </p>
            <p>
              <b>II</b> Sous-réponse 2.4
            </p>
          </div>
        </div>

      
      </div>
      <div>
        <ul className="liste list-disc pl-8">
          <li>What you'll learn</li>
          <li>Quickly Learn the Linux Command Line <br />from Scratch!</li>
          <li>Use Bash Scripts and Cron Scheduling <br />Software to Automate Boring Tasks!</li>
          <li>Become an Independent User of the Linux <br />Operating System!</li>
          <li>Learn how to Search for, Customise, Install<br /> and Manage Open Source Software with <br />Package Managers!</li>
          <li>Operate a Linux Computer Entirely from the <br />Command Line!</li>
          <li>Gain a Complete Understanding of Linux & fill <br />in any existing knowledge gaps!</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default CourseContent;
