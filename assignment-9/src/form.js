import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    skills: "",
    email: "",
    phoneNumber: "",
    address: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    alert("Form is Submit");
  };

  return (
    <div>
      <h2>Simple React Form</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" value={data.firstName} onChange={handleChange} required />
        <br />

        <label>Last Name:</label>
        <input type="text" name="lastName" value={data.lastName} onChange={handleChange} required />
        <br />

        <label>Age:</label>
        <input type="number" name="age" value={data.age} onChange={handleChange} required />
        <br />

        <label>Gender:</label>
        <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
        <input type="radio" name="gender" value="other" onChange={handleChange} /> Other
        <br />

        <label>Skills:</label>
        <select name="skills" value={data.skills} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="react">React</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
        <br />

        <label>Email:</label>
        <input type="email" name="email" value={data.email} onChange={handleChange} required />
        <br />

        <label>Phone Number:</label>
        <input type="number" name="phoneNumber" value={data.phoneNumber} onChange={handleChange} required />
        <br />

        <label>Address:</label>
        <textarea name="address" value={data.address} onChange={handleChange} required></textarea>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;