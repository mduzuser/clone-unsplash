//masonry
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

//components
import { Image } from "./";
import { useGlobalContext } from "../hooks/useGlobalContext";
function ImageContainer({ images }) {
  const { likedImages } = useGlobalContext();
  return (
    <ResponsiveMasonry>
      <Masonry
        gutter="10px"
        columnsCountBreakPoints={{
          350: 1,
          750: 3,
          900: 4,
        }}
        className="mt-5"
      >
        {images.map((image) => {
          return (
            <Image
              key={image.id}
              image={image}
              added={likedImages.some((img) => img.id == image.id)}
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ImageContainer;
