const Input = ({ htmlFor, labelName, value, type, placeholder, name, handleChange }) => {
  return (
    <>
      <label htmlFor={htmlFor}>{labelName}</label>
      <input value={value} onChange={handleChange} type={type} placeholder={placeholder} name={name} />
    </>
  );
};
export default Input;
