import { FaSearch } from "react-icons/fa";

function FormInput({ type, name, placeholder }) {
  return (
    <label
      className="input input-sm md:input-md grow
        input-bordered flex items-center gap-2"
    >
      <FaSearch className="h-4 w-4 opacity-70" />
      <input
        type={type}
        className="grow"
        placeholder={placeholder}
        name={name}
      />
    </label>
  );
}

export default FormInput;
