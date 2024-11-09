//ri
import { FaDownload, FaHeart, FaRegHeart } from "react-icons/fa";

//global context
import { useGlobalContext } from "../hooks/useGlobalContext";

function Image({ image, added }) {
  const { likedImages, dispatch } = useGlobalContext();

  const { links, urls, alt_description, user } = image;

  const addLikedImages = (image) => {
    const alreadyAdded = likedImages.some((img) => {
      return img.id == image.id;
    });

    if (!alreadyAdded) {
      dispatch({ type: "LIKE", payload: image });
      alert("New photo added!");
    } else {
      dispatch({ type: "UNLIKE", payload: image.id });
      alert("Photo removed!");
    }
  };

  return (
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
              onClick={() => addLikedImages(image)}
              className="fa-heart border-2"
            >
              <FaRegHeart className="breakPoint-image text-2xl text-white" />
            </span>
          </div>
        )}

        {added && (
          <div className="breakPoint-image">
            <span
              onClick={() => addLikedImages(image)}
              className="fa-heart bg-white"
            >
              <FaHeart className="text-2xl text-red-600" />
            </span>
          </div>
        )}

        <div className="breakPoint-image">
          <span className="absolute bottom-3 right-3">
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

      <div className="flex cursor-pointer items-center justify-between px-3 py-5 md:hidden">
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
            <div
              onClick={() => addLikedImages(image)}
              className="flex h-9 w-12 cursor-pointer items-center justify-center"
            >
              <FaRegHeart className="text-3xl" />
            </div>
          )}

          {added && (
            <div
              onClick={() => addLikedImages(image)}
              className="flex h-9 w-12 cursor-pointer items-center justify-center rounded-lg bg-white"
            >
              <FaHeart className="text-2xl text-red-600" />
            </div>
          )}
          <div className="cursor-pointer">
            <FaDownload className="text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Image;
