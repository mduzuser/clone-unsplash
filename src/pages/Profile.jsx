//global context
import { useGlobalContext } from "../hooks/useGlobalContext";

//react icons
import { MdVerified } from "react-icons/md";

//firebase
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

//toastify import
import { toast } from "react-toastify";
import { useState } from "react";

function Profile() {
  const { user, loading } = useGlobalContext();
  const [imageBase64, setImageBase64] = useState(null);

  const verifiedAccount = () => {
    sendEmailVerification(auth.currentUser, {
      url: "clone-unsplash-uz.netlify.app/profile",
    }).then(() => {
      toast.success(
        "Verification request sent! We'll review your account shortly.",
      );
    });
  };

  const imageChangeBase64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file.size % 1024 < 1024) {
      reader.addEventListener("load", () => {
        setImageBase64(reader.result);
      });

      reader.readAsDataURL(file);
    } else {
      toast.error("Image size should be less than 1MB(1024kb).");
    }
  };

  const removedPhoto = () => {
    setImageBase64(null);
  };
  return (
    <div className="align-elements my-5 flex flex-col items-center gap-5">
      <div className="mb-5">
        <div className="flex flex-col items-center gap-5">
          <figure className="relative flex justify-center">
            {loading && (
              <span className="absolute inline-block h-full w-full rounded-full bg-black opacity-30">
                <span className="loading loading-spinner loading-lg absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-primary"></span>
              </span>
            )}
            <img
              src={imageBase64 ?? user.photoURL}
              alt="User image"
              className="h-40 w-40 rounded-full ring ring-primary md:h-60 md:w-60"
            />
          </figure>

          {!imageBase64 && (
            <input
              type="file"
              onChange={imageChangeBase64}
              accept=".png,.jpeg, .jpg, .gif"
              className="file-input file-input-bordered file-input-primary file-input-sm w-full max-w-xs md:file-input"
            />
          )}

          {imageBase64 && (
            <div className="flex items-center gap-5">
              <button
                onClick={removedPhoto}
                className="btn btn-secondary btn-sm grow md:grow-0"
              >
                Remove Photo
              </button>
              <button className="btn btn-primary btn-sm grow md:grow-0">
                Save
              </button>
            </div>
          )}
        </div>

        <p className="mt-5 text-xl font-semibold md:text-2xl">
          {user.displayName}
        </p>
      </div>
      <div>
        <div className="mb-5 flex items-center gap-3">
          <p className="text-base font-bold md:text-xl md:font-semibold">
            User email :
          </p>
          <p className="text-sm italic md:text-base">{user.email}</p>
        </div>
        <div className="mb-5 flex items-center gap-3">
          <p className="text-base font-bold md:text-xl md:font-semibold">
            Account status :
          </p>
          <p className="italic">
            {user.emailVerified ? (
              <span className="flex items-center gap-2">
                <p className="text-sm italic md:text-base">Verified</p>
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
