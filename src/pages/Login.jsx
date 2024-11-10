//rrd
import { Form, Link, useActionData } from "react-router-dom";

//components
import { FormInput } from "../components";

//ri
import { FcGoogle } from "react-icons/fc";

//register hook
import { useRegister } from "../hooks/useRegister";
import { useLogin } from "../hooks/useLogin";

//react hooks
import { useEffect } from "react";

//action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let userEmail = formData.get("userEmail");
  let userPassword = formData.get("userPassword");

  return {
    userEmail,
    userPassword,
  };
};

function Login() {
  const loginData = useActionData();
  const { registerWithGoogle } = useRegister();
  const { loginWithEmail } = useLogin();

  useEffect(() => {
    if (loginData) {
      loginWithEmail(loginData.userEmail, loginData.userPassword);
    }
  }, [loginData]);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 px-5">
      <div className="w-full max-w-96 rounded-lg bg-white px-10 py-5">
        <Form method="post" className="w-full">
          <p className="mb-4 text-center text-2xl font-semibold text-black md:text-3xl">
            Login
          </p>
          <div className="mb-3 flex flex-col gap-3 md:gap-2">
            <FormInput placeholder="Email" name="userEmail" type="text" />
            <FormInput
              placeholder="Password"
              name="userPassword"
              type="password"
            />
          </div>

          <Link to={"/register"}>
            <p className="link text-right text-blue-400">Forgot password?</p>
          </Link>

          <div className="mt-3 md:flex md:items-center md:justify-between">
            <button
              type="submit"
              className="btn btn-sm mb-3 w-full border-none bg-blue-600 text-base text-white md:btn md:mb-0 md:w-[45%]"
            >
              Login
            </button>

            <button
              onClick={registerWithGoogle}
              type="button"
              className="btn btn-sm flex w-full items-center border-none bg-fuchsia-800 text-xs text-white md:btn md:w-[45%] md:text-base"
            >
              <span>
                <FcGoogle className="text-xl" />
              </span>
              Google
            </button>
          </div>
        </Form>
      </div>

      <span className="mt-5 flex items-center gap-1 text-white">
        Don't have an account?
        <Link className="link text-white" to={"/register"}>
          Register
        </Link>
      </span>
    </div>
  );
}

export default Login;
