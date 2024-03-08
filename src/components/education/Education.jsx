import './Education.css';

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
              Presidency School ICSE Board : 82% <br></br>(Bhiwandi,Thane)
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2018-2021</h1>
            <p className="card-detail">
              K. J. Somaiya Polytechnic Diploma in Computer Engineering : 93.34%{' '}
              <br></br>(VidyaVihar East,Mumbai)
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2021-2024</h1>
            <p className="card-detail">
              K.C. College of Engineering Undergraduate in Computer Engineering{' '}
              <br></br>(Thane East,Mumbai)
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">3 August - 18 September 2022</h1>
            <p className="card-detail">
              Interned at Sahu Technologies: Worked as a Python and WEB
              Developer for duration of 45 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
