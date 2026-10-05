import { useState } from 'react';

export function WorkExperience() {
  const [info, setInfo] = useState({
    companyName: '',
    positionTitle: '',
    startDate: '',
    endDate: '',
    tillPresent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setInfo({
      ...info,
      // Checkboxes use 'checked', text/date inputs use 'value'
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  function handleEdit() {
    setIsSubmitted(false);
  }

  return (
    <section className="cv-section">
      {isSubmitted ? (
        // VIEW MODE (Displays after clicking Submit)
        <div className="work-experience">
          <h2>Work Experience</h2>
          <p><b>Company name: </b>{info.companyName}</p>
          <p><b>Position title: </b>{info.positionTitle}</p>
          <p><b>Start date: </b>{info.startDate}</p>
          <p>
            <b>End date: </b>
            {info.tillPresent ? 'Present' : info.endDate}
          </p>
          <button type="button" onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        // EDIT MODE
        <form onSubmit={handleSubmit}>
          <h2>Work Experience</h2>
          <label>
            Company name:{' '}
            <input
              type="text"
              name="companyName"
              value={info.companyName}
              onChange={handleChange}
            />
          </label>
          <label>
            Position title:{' '}
            <input
              type="text"
              name="positionTitle"
              value={info.positionTitle}
              onChange={handleChange}
            />
          </label>
          <label>
            Start date:{' '}
            <input
              type="date"
              name="startDate"
              value={info.startDate}
              onChange={handleChange}
            />
          </label>
          <label>
            End date:{' '}
            <input
              type="date"
              name="endDate"
              value={info.endDate}
              disabled={info.tillPresent}
              onChange={handleChange}
            />
          </label>
          <label>
            Still working here
            <input
              type="checkbox"
              name="tillPresent"
              checked={info.tillPresent}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
}