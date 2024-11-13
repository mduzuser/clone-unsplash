//global context
import { useGlobalContext } from "../hooks/useGlobalContext";

//react icons
import { MdVerified } from "react-icons/md";

//firebase
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

//toastify import
import { toast } from "react-toastify";

function Profile() {
  const { user } = useGlobalContext();

  const verifiedAccount = () => {
    sendEmailVerification(auth.currentUser, {
      url: "clone-unsplash-uz.netlify.app/profile",
    }).then(() => {
      toast.success(
        "Verification request sent! We'll review your account shortly.",
      );
    });
  };
  return (
    <div className="align-elements my-5">
      <div className="mb-5 flex items-center gap-3">
        <img
          src={user.photoURL}
          alt="User image"
          className="h-20 w-20 rounded-full ring ring-primary"
        />

        <p className="text-2xl font-semibold">{user.displayName}</p>
      </div>
      <div>
        <div className="mb-5 flex items-center gap-3">
          <p className="text-xl font-semibold">User email :</p>
          <p className="italic">{user.email}</p>
        </div>
        <div className="mb-5 flex items-center gap-3">
          <p className="text-xl font-semibold">Account status :</p>
          <p className="italic">
            {user.emailVerified ? (
              <span className="flex items-center gap-2">
                <p>Verified</p>
                <MdVerified className="text-blue-600" />
              </span>
            ) : (
              <sapn className="flex items-center gap-5">
                <p>Not verified</p>
                <button
                  onClick={verifiedAccount}
                  className="btn btn-primary btn-sm"
                >
                  Verify Your Account
                </button>
              </sapn>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
