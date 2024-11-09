import { FaKey, FaSearch, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function FormInput({ type, name, placeholder }) {
  return (
    <label className="input input-sm input-bordered flex grow items-center gap-2 md:input-md">
      {placeholder == "search" && <FaSearch className="h-4 w-4 opacity-70" />}

      <input
        type={type}
        className="grow"
        placeholder={placeholder}
        name={name}
      />

      {placeholder == "Username" && <FaUser className="h-4 w-4 opacity-70" />}
      {placeholder == "Email" && <MdEmail className="h-4 w-4 opacity-70" />}
      {placeholder == "Password" && <FaKey className="h-4 w-4 opacity-70" />}
      {placeholder == "Confirm password" && (
        <FaKey className="h-4 w-4 opacity-70" />
      )}
    </label>
  );
}

export default FormInput;
