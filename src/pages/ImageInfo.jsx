//rrd
import { Link, useParams } from "react-router-dom";

//costum hooks
import { useFetch } from "../hooks/useFetch";
import {
  FaDownload,
  FaEye,
  FaHeart,
  FaInstagram,
  FaMapMarkedAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
function ImageInfo() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/photos/${id}?client_id=${import.meta.env.VITE_ACCESS_KEY}`,
  );

  if (!data) {
    return <p className="text-center italic">Data is loading...</p>;
  }

  const {
    alt_description,
    created_at,
    description,
    downloads,
    likes,
    user,
    views,
    urls,
  } = data;

  return (
    <div className="align-elements my-5 md:flex md:gap-5">
      <div>
        <div className="max-w-96 border-4 border-primary-content">
          <img
            src={urls.regular}
            className="border-b-4 border-primary-content"
            alt={alt_description}
          />

          <div className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <FaEye className="cursor-pointer text-xl" />
                <span>{views}</span>
              </div>

              <div className="flex flex-col items-center">
                <FaDownload className="cursor-pointer text-xl" />
                <span>{downloads}</span>
              </div>

              <div className="flex flex-col items-center">
                <FaHeart className="cursor-pointer text-xl" />
                <span>{likes}</span>
              </div>
            </div>

            <div className="my-5 flex items-center gap-3">
              <p className="font-medium">Date:</p>
              <span className="italic">
                {new Date(created_at).toLocaleString()}
              </span>
            </div>

            <div className="flex gap-3">
              <p className="font-medium">Description:</p>
              <p className="italic">
                {description ? description : "Not found"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 md:mt-0 md:p-3">
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full ring ring-offset-2"
            src={user.profile_image.large}
          />
          <p className="font-medium">{user.first_name}</p>

          <span>-</span>

          <span className="flex items-center gap-1">
            <span className="italic">
              {user.location ? user.location : "Not found"}
            </span>
            <FaMapMarkedAlt />
          </span>
        </div>

        <div className="my-5">
          <div className="flex items-center gap-3">
            <FaInstagram className="text-3xl" />
            <span className="flex items-center gap-2">
              <p className="font-medium">Username:</p>

              <p className="italic">
                {user.instagram_username
                  ? user.instagram_username
                  : "Not found"}
              </p>
            </span>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <FaTwitter className="text-3xl" />
            <span className="flex items-center gap-2">
              <p className="font-medium">Username:</p>

              <p className="italic">
                {user.twitter_username ? user.twitter_username : "Not found"}
              </p>
            </span>
          </div>

          <div className="link mt-5 flex items-center gap-3">
            <GoHome className="text-3xl" />
            <Link to={"/"}>
              <p className="italic">Back to Homepage</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageInfo;
