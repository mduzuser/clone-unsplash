//costum hooks
import { useGlobalContext } from "../hooks/useGlobalContext";

//ri
import { MdNoPhotography } from "react-icons/md";

//rrd
import { Link } from "react-router-dom";

//components
import { ImageContainer } from "../components";
function LikedImages() {
  const { likedImages } = useGlobalContext();

  if (likedImages.length == 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-center italic">
          You don't choose any photos yet! <br /> Please choose any photos...
        </h1>
        <MdNoPhotography className="mt-10 text-6xl" />

        <Link to={"/"} className="mt-5 italic underline hover:text-blue-400">
          Go home page
        </Link>
      </div>
    );
  }

  return (
    <div>
      {likedImages.length > 0 && <ImageContainer images={likedImages} />}
    </div>
  );
}

export default LikedImages;
