//rrd
import { Form, Link } from "react-router-dom";

//components
import { FormInput } from "../components";

//icons
import { FcGoogle } from "react-icons/fc";

//register hooks
import { useRegister } from "../hooks/useRegister";

function Register() {
  const { registerWithGoogle } = useRegister();
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
          <div className="mt-5 md:flex md:items-center md:justify-between">
            <button
              type="submit"
              className="btn btn-sm w-full border-none bg-blue-600 text-base text-white md:btn md:w-[45%]"
            >
              Register
            </button>

            <button
              onClick={registerWithGoogle}
              type="button"
              className="btn btn-sm mt-3 flex w-full items-center border-none bg-fuchsia-800 text-base text-white md:btn md:mt-0 md:w-[45%]"
            >
              <span>
                <FcGoogle className="text-xl" />
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
