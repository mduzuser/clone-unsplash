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
    } else {
      dispatch({ type: "UNLIKE", payload: image.id });
    }
  };

  return (
    <div className="group relative">
      {!added && (
        <span
          onClick={() => addLikedImages(image)}
          className="fa-heart border-2"
        >
          <FaRegHeart className="text-2xl text-white" />
        </span>
      )}

      {added && (
        <span
          onClick={() => addLikedImages(image)}
          className="fa-heart bg-white"
        >
          <FaHeart className="text-2xl text-red-600" />
        </span>
      )}
      <img
        src={urls.regular}
        alt={alt_description}
        className="cursor-zoom-in"
      />
      <span className="absolute bottom-3 right-3">
        <FaDownload className="invisible cursor-pointer text-3xl text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100" />
      </span>
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
  );
}

export default Image;
