//ri
import { FaDownload, FaHeart, FaRegHeart } from "react-icons/fa";

//global context
import { useGlobalContext } from "../hooks/useGlobalContext";

//rrd
import { Link } from "react-router-dom";

//toastify
import { toast } from "react-toastify";

//useFirestore
import { useFirestore } from "../hooks/useFirestore";

function Image({ image, added }) {
  const { likedImages, user: authUser } = useGlobalContext();

  const { addDocument, deleteDocument } = useFirestore();

  const { links, urls, alt_description, user } = image;

  const addLikedImages = (image, e) => {
    e.preventDefault();

    const alreadyAdded = likedImages.find((img) => {
      return img.id == image.id;
    });

    if (!alreadyAdded) {
      addDocument("likedImages", { ...image, uid: authUser.uid });
    } else {
      deleteDocument("likedImages", alreadyAdded._id);
    }
  };

  const downloadimage = (e) => {
    e.preventDefault();
    window.open(links.download + "&force=true", "_blank");
    toast.success("Image downloaded successfully!");
    dispatch({ type: "DOWNLOAD", payload: image });
  };

  return (
    <Link to={`/image-info/${image.id}`}>
      <section className="border bg-primary-content">
        <div className="group relative">
          <img
            src={urls.regular}
            alt={alt_description}
            className="cursor-zoom-in"
          />

          {!added && (
            <div className="breakPoint-image">
              <span
                onClick={(e) => addLikedImages(image, e)}
                className="fa-heart border-2"
              >
                <FaRegHeart className="breakPoint-image text-2xl text-white" />
              </span>
            </div>
          )}

          {added && (
            <div className="breakPoint-image">
              <span
                onClick={(e) => addLikedImages(image, e)}
                className="fa-heart bg-white"
              >
                <FaHeart className="text-2xl text-red-600" />
              </span>
            </div>
          )}

          <div className="breakPoint-image">
            <span
              onClick={(e) => downloadimage(e)}
              className="absolute bottom-3 right-3"
            >
              <FaDownload className="invisible cursor-pointer text-3xl text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100" />
            </span>
          </div>

          <div className="breakPoint-image">
            <span className="absolute bottom-3 left-2 flex cursor-pointer items-center gap-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <img
                className="h-7 w-7 rounded-full md:h-11 md:w-11"
                src={user.profile_image.large}
                alt={alt_description}
              />
              <p className="text-xs font-semibold text-white md:text-base">
                {user.username}
              </p>
            </span>
          </div>
        </div>

        <div className="flex cursor-pointer items-center justify-between px-3 py-5 lg:hidden">
          <div className="flex items-center gap-2">
            <img
              src={user.profile_image.large}
              alt={alt_description}
              className="h-10 w-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{user.username}</p>
              <p className="text-xs">
                {new Date(user.updated_at).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            {!added && (
              <div onClick={(e) => addLikedImages(image, e)}>
                <FaRegHeart className="text-3xl" />
              </div>
            )}

            {added && (
              <div onClick={(e) => addLikedImages(image, e)}>
                <FaHeart className="text-3xl text-red-600" />
              </div>
            )}
            <div className="cursor-pointer" onClick={(e) => downloadimage(e)}>
              <FaDownload className="text-2xl" />
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}

export default Image;
