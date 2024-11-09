//rrd
import { useActionData } from "react-router-dom";

//components
import { Search, ImageContainer } from "../components";

//action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let search = formData.get("search");
  return search;
};

//custom hook
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState, useRef } from "react";

function Home() {
  //useStates
  const searchParamFromAction = useActionData();
  const [allImages, setAllImages] = useState([]);
  const [pageParam, setPageParam] = useState(1);

  //useRef
  const prevSearchParam = useRef(searchParamFromAction);

  useEffect(() => {
    if (searchParamFromAction !== prevSearchParam.current) {
      setAllImages([]);
      setPageParam(1);
      prevSearchParam.current = searchParamFromAction;
    }
  }, [searchParamFromAction]);

  // //random photos
  // const apiUrl = searchParamFromAction
  //   ? `https://api.unsplash.com/search/photos?client_id=${
  //       import.meta.env.VITE_ACCESS_KEY
  //     }&query=${searchParamFromAction}&page=${pageParam}`
  //   : `https://api.unsplash.com/photos/random?client_id=${
  //       import.meta.env.VITE_ACCESS_KEY
  //     }&count=10`;

  // const { data, isPending, error } = useFetch(apiUrl);

  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }&query=${searchParamFromAction ?? "all"}&page=${pageParam}`
  );

  useEffect(() => {
    if (data) {
      setAllImages((prevImages) => {
        const newImages = data.results ? data.results : data;
        return pageParam === 1 ? newImages : [...prevImages, ...newImages];
      });
    }
  }, [data]);

  return (
    <section>
      <div>
        <Search />
      </div>
      {isPending && (
        <h2 className="text-center text-sm italic mt-5">loading....</h2>
      )}
      {allImages.length > 0 && <ImageContainer images={allImages} />}
      <div className="align-elements-sm align-elements">
        <button
          onClick={() => {
            setPageParam(pageParam + 1);
          }}
          className="btn bg-primary-content my-10 btn-block"
        >
          Search more
        </button>
      </div>
    </section>
  );
}

export default Home;
