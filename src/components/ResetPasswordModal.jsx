//rrd
import { Form, useActionData } from "react-router-dom";

//components
import { FormInput } from "./";
import { useEffect } from "react";

//firebase
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

//toastify import
import { toast } from "react-toastify";

function ResetPasswordModal() {
  const data = useActionData();

  useEffect(() => {
    if (data?.resetPasswordByEmail) {
      sendPasswordResetEmail(auth, data.resetPasswordByEmail)
        .then(() => {
          toast.success("Reset password email sent successfully");
          document.getElementById("my_modal_1").close();
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          toast.error("Error ! Please check email");
        });
    }
  }, [data]);
  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="mb-3 text-lg font-bold">Reset password:</h3>
          <Form method="post">
            <FormInput placeholder="Email" name="reset-password-by-email" />

            <div className="mt-5 flex items-center justify-between">
              <button
                className="btn btn-secondary btn-sm md:btn"
                type="button"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Close
              </button>
              <button className="btn btn-primary btn-sm md:btn">Send</button>
            </div>
          </Form>
        </div>
      </dialog>
    </>
  );
}

export default ResetPasswordModal;
