import { FaDownload } from "react-icons/fa6";
import { ImageContainer } from "../components";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";

function DownloadImages() {
  const { downloadImages, dispatch } = useGlobalContext();

  const clearDownloads = () => {
    dispatch({ type: "CLEAR_DOWNLOADS" });
  };

  if (downloadImages.length == 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-center italic">You don't have any photos yet!</h1>
        <FaDownload className="mt-10 text-6xl" />

        <Link to={"/"} className="mt-5 italic underline hover:text-blue-400">
          Go home page
        </Link>
      </div>
    );
  }

  return (
    <div>
      {downloadImages.length > 0 && <ImageContainer images={downloadImages} />}

      <div className="align-elements my-10">
        <button
          onClick={clearDownloads}
          className="btn w-full bg-primary-content text-center"
        >
          Remove All
        </button>
      </div>
    </div>
  );
}

export default DownloadImages;
