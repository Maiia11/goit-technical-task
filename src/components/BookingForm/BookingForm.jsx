import { useRef, useState } from "react";
import css from "./BookingForm.module.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    date: e.target.date.value,
    comment: e.target.comment.value,
  };

  console.log("Form Data: ", formData);

  // Після успішного відправлення форми
  alert("Booking successful!");
  };



  return (
    <div className={css.containerForm}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.parag}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <input
          className={css.input}
          type={formData.date ? "date" : "text"} // Меняем тип на 'date', если уже выбрана дата
          name="date"
          placeholder="Booking date*"
          onFocus={(e) => (e.target.type = "date")} // При фокусе поле становится типа 'date'
          onBlur={(e) => {
            if (!formData.date) e.target.type = "text"; // Если дата не выбрана, возвращаем тип на 'text'
          }}
          value={formData.date}
          onChange={handleInputChange}
          required
        />
        <textarea
          className={css.comment}
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleInputChange}
        />
        <div className={css.btnContainer}>
          <button className={css.btn} type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
export default BookingForm;
