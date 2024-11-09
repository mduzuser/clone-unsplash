//rrd
import { Form } from "react-router-dom";
//components
import { FormInput } from "./";

function Search() {
  return (
    <Form
      method="post"
      className="align-elements mb-5 mt-5 flex items-center gap-3"
    >
      <FormInput type="search" placeholder="Search photos" name="search" />
      <button className="btn btn-sm bg-primary-content md:btn-md lg:hidden">
        Search
      </button>
    </Form>
  );
}

export default Search;
