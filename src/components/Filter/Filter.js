import PropTypes from "prop-types";
import s from "./Filter.module.css";
import shortid from "shortid";

function Filter({ value, onChange }) {
  const filterInputId = shortid.generate();

  return (
    <div>
      <label className={s.label} htmlFor={filterInputId}>
        Find contacts by name
      </label>
      <input
        type="text"
        className={s.input}
        id={filterInputId}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
