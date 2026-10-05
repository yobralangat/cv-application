import { useState } from 'react';

export function PersonalInfo() {
  const [info, setInfo] = useState({
    fullName: '',
    email: '',
    country: '',
    phone: '',
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
        <div className="info-display">
          <h2>General Information</h2>
          <p><b>Full name: </b>{info.fullName}</p>
          <p><b>Email: </b>{info.email}</p>
          <p><b>Country: </b>{info.country}</p>
          <p><b>Phone: </b>{info.phone}</p>
          <button type="button" onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        // EDIT MODE
        <form onSubmit={handleSubmit}>
          <h2>General Information</h2>
          <label>
            Full name:{' '}
            <input
              type="text"
              name="fullName"
              value={info.fullName}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:{' '}
            <input
              type="email"
              name="email"
              value={info.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Country:{' '}
            <input
              type="text"
              name="country"
              value={info.country}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:{' '}
            <input
              type="tel"
              name="phone"
              value={info.phone}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
}