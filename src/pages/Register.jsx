//rrd
import { Form, Link } from "react-router-dom";

//components
import { FormInput } from "../components";
import { FcGoogle } from "react-icons/fc";

function Register() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 px-5">
      <div className="w-full max-w-96 rounded-lg bg-white px-10 py-5">
        <Form method="post" className="w-full">
          <p className="mb-4 text-center text-2xl font-semibold text-black md:text-3xl">
            Register
          </p>
          <div className="flex flex-col gap-3 md:gap-5">
            <FormInput placeholder="Username" name="userName" type="text" />
            <FormInput placeholder="Email" name="userEmail" type="email" />
            <FormInput
              placeholder="Password"
              name="userPassword"
              type="password"
            />
            <FormInput placeholder="Confirm password" type="password" />
          </div>
          <div className="mt-5 flex items-center justify-between">
            <button
              type="submit"
              className="btn btn-sm w-[45%] border-none bg-blue-600 text-xs text-white md:btn md:text-base"
            >
              Register
            </button>

            <button
              type="button"
              className="btn btn-sm flex w-[45%] items-center border-none bg-fuchsia-800 text-xs text-white md:btn md:text-base"
            >
              <span>
                <FcGoogle className="md:text-xl" />
              </span>
              Google
            </button>
          </div>
        </Form>
      </div>

      <Link to={"/login"}>
        <p className="link mt-5 text-white">Already have an account?</p>
      </Link>
    </div>
  );
}

export default Register;
