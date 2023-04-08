import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section>
      <h5>Qualification</h5>
      <h2>My Personal Journey</h2>
      <div className="timeline">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2006-2018</h1>
            <p className="card-detail">
              Presidency School ICSE Board : 82% <br></br>(Elkunde Village,Bhiwandi,Thane-421302)
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2018-2021</h1>
            <p className="card-detail">
            K. J. Somaiya Polytechnic Diploma in Computer Engineering : 93.34% <br></br>(VidyaVihar East,Mumbai-400077)
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2021-2024</h1>
            <p className="card-detail">
            K.C. College of Engineering Undergraduate in Computer Engineering <br></br>(Thane East,Mumbai-400603)
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">3 August - 18 September 2022</h1>
            <p className="card-detail">
            Interned at Sahu Technologies: Worked as a Python and WEB Developer for duration of 45 days.
            </p>
          </div>
        </div>
        {/* <div className="card">
          <div className="card-body">
            <h1 className="card-title">December 2022-January 2023</h1>
            <p className="card-detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto exercitationem vel unde tenetur dolores expedita fugit
              voluptate? Eligendi quas maxime, at eius officiis repellat,
              adipisci, vel cum optio minima odit!
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;
