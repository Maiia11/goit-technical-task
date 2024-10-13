import { useState } from 'react';
import css from "./BookingForm.module.css"

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    comment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data: ', formData);
  };

  return (
    <div className={css.containerForm}>
      <h3 className={css.title}>Book your campervan now</h3>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Booking date*"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default BookingForm;