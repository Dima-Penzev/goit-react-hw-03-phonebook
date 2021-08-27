import React, { Component } from "react";
import shortid from "shortid";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    id: "",
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
    this.handleAddId();
  };

  handleAddId = () => {
    this.setState({
      id: `id-${shortid.generate()}`,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset() {
    this.setState({
      name: "",
      number: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor={this.nameInputId}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={this.state.name}
          required
          onChange={this.handleChange}
          id={this.nameInputId}
          className={s.input}
        />

        <label className={s.label} htmlFor={this.numberInputId}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={this.state.number}
          required
          onChange={this.handleChange}
          id={this.numberInputId}
          className={s.input}
        />

        <button type="submit" className={s.addBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
