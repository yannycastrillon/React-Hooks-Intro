import React from "react";

const Form = (props) => {
  const [formData, setFormData] = React.useState({
    name: "",
    age: 0
  });

  const handleChange = (e) => {
    // Must incorporate the spread operator so we don't lose previous state values.
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h1>Form Functional</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} />
        <input type="number" name="age" onChange={handleChange} />
        <input type="submit" name="Submit" onSubmit={handleSubmit} />
      </form>
    </>
  );
};

export default Form;
