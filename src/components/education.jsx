import { useState } from 'react';

export function Education() {
  const [info, setInfo] = useState({
    schoolName: '',
    titleOfStudy: '',
    startDate: '',
    endDate: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
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
        // VIEW MODE
        <div className="education-display">
          <h2>Education Experience</h2>
          <p><b>School name: </b>{info.schoolName}</p>
          <p><b>Title of study: </b>{info.titleOfStudy}</p>
          <p><b>Start date: </b>{info.startDate}</p>
          <p><b>End date: </b>{info.endDate}</p>
          <button type="button" onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        // EDIT MODE
        <form onSubmit={handleSubmit}>
          <h2>Education Experience</h2>
          <label>
            School name:{' '}
            <input
              type="text"
              name="schoolName"
              value={info.schoolName}
              onChange={handleChange}
            />
          </label>
          <label>
            Title of study:{' '}
            <input
              type="text"
              name="titleOfStudy"
              value={info.titleOfStudy}
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
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
}