const Input = ({ htmlFor, labelName, value, type, placeholder, name, handleChange }) => {
  return (
    <>
      <label htmlFor={htmlFor}>{labelName}</label>
      <input
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        name={name}
        required
        minLength="4"
        min="4"
      />
    </>
  );
};
export default Input;
