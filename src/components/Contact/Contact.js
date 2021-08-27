import PropTypes from "prop-types";

function Contact({ name, number }) {
  return (
    <p>
      {name}: {number}
    </p>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
