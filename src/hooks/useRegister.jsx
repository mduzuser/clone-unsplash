//firebase import
import { auth } from "../firebase/firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

//toastify import
import { toast } from "react-toastify";

//global context
import { useGlobalContext } from "./useGlobalContext";
export const useRegister = () => {
  const { dispatch } = useGlobalContext();

  const registerWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success(`Welcome, ${user.displayName}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const registerWithEmail = (userName, userEmail, userPassword) => {
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: `https://api.dicebear.com/9.x/initials/svg?seed=${userName}`,
        });
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("Welcome");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return { registerWithGoogle, registerWithEmail };
};
