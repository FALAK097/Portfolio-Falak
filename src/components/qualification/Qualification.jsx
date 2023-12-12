import React, { useState } from 'react';
import './Qualification.css';
import { FaGraduationCap } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { BsFillCalendarFill } from 'react-icons/bs';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h5>Qualification</h5>
      <h2>My Personal Journey</h2>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 2
                ? 'qualification_button qualification_active'
                : 'qualification_button'
            }
            onClick={() => toggleTab(2)}>
            <FaBriefcase /> Expierence
          </div>

          <div
            className={
              toggleState === 1
                ? 'qualification_button qualification_active'
                : 'qualification_button'
            }
            onClick={() => toggleTab(1)}>
            <FaGraduationCap /> Education
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? 'qualification_content qualification_content-active'
                : 'qualification_content'
            }>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Bachelors in Computer Engineering
                </h3>
                <span className="qualification_subtitle">
                  K.C. College of Engineering - 8.82 CGPA
                </span>
                <div className="qualification_calendar">
                  <BsFillCalendarFill className="qualification_icon" />
                  January 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  Diploma in Computer Engineering
                </h3>
                <span className="qualification_subtitle">
                  K. J. Somaiya Polytechnic - 93.34%
                </span>
                <div className="qualification_calendar">
                  <BsFillCalendarFill className="qualification_icon" />
                  August 2018 - May 2021
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">ICSE Board</h3>
                <span className="qualification_subtitle">
                  Presidency School - 82%
                </span>
                <div className="qualification_calendar">
                  <BsFillCalendarFill className="qualification_icon" />
                  June 2006 - March 2018
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification_content qualification_content-active'
                : 'qualification_content'
            }>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Developer Intern</h3>
                <span className="qualification_subtitle">
                  SSingularity Technologies
                </span>
                <div className="qualification_calendar">
                  <BsFillCalendarFill className="qualification_icon" />
                  January 2023 - July 2023
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  Web & Python Developer Intern
                </h3>
                <span className="qualification_subtitle">
                  Sahu Technologies
                </span>
                <div className="qualification_calendar">
                  <BsFillCalendarFill className="qualification_icon" />
                  August 2022 - September 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
