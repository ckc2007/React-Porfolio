import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    if (!value.trim()) {
      // [name]: "This field is required": This uses computed property names to dynamically set the property name in the object. name is a variable holding the name of the form field (e.g., "name", "email", or "message"). By wrapping name in square brackets [name], it becomes a dynamic property name based on the value of the name variable.
      setErrors({ ...errors, [name]: "This field is required" });
    } else if (name === "email" && !validateEmail(value)) {
      // setErrors({...errors, [name]: "This field is required" }): This sets the errors state with an updated object. It takes the shallow copy of the existing errors object and adds/updates a property with the name as the key and the value of "This field is required". If a property with the same name already exists in the errors state, it will be replaced with the new value.
      setErrors({ ...errors, email: "Invalid email address" });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form data:", formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.name && <div>{errors.name}</div>}
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.email && <div>{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.message && <div>{errors.message}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
