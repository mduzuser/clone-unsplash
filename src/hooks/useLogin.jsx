//firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

//global context
import { useGlobalContext } from "./useGlobalContext";

//toastify import
import { toast } from "react-toastify";
export function useLogin() {
  const { dispatch } = useGlobalContext();

  const loginWithEmail = (userEmail, userPassword) => {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success(`Welcome, ${user.userName}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error("Email or Password is not correct !");
      });
  };
  return { loginWithEmail };
}
