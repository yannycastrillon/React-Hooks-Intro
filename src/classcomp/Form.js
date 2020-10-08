import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type="number"
          name="age"
          value={this.state.age}
          onChange={(e) => this.handleChange(e)}
        />
        <input type="submit" name="Submit" />
      </form>
    );
  }
}

export default Form;
