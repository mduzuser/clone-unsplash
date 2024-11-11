//firebase firestore
import { doc, deleteDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

//toastify
import { toast } from "react-toastify";

export const useFirestore = () => {
  const addDocument = (collectionName, data) => {
    addDoc(collection(db, collectionName), data)
      .then(() => {
        toast.success("New photo added!");
      })
      .catch((error) => {
        toast.error("Failed to add photo ! ❤️");
        console.log(error.message);
      });
  };

  const deleteDocument = (collectionName, id) => {
    deleteDoc(doc(db, collectionName, id))
      .then(() => {
        toast.info("Photo is removed ! 🗑️");
      })
      .catch((error) => {
        toast.error("Failed to add photo!");
        console.log(error.message);
      });
  };

  return { addDocument, deleteDocument };
};
