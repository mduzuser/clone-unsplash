//rrd
import { Form } from "react-router-dom";
//components
import { FormInput } from "./";

function Search() {
  return (
    <Form
      method="post"
      className="align-elements  flex gap-3 items-center mt-5 mb-5"
    >
      <FormInput type="search" placeholder="Search photos" name="search" />
      <button className="btn bg-primary-content btn-sm md:btn-md md:hidden">
        Search
      </button>
    </Form>
  );
}

export default Search;
