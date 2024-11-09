import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const dataFromLocalStorage = () => {
  return (
    JSON.parse(localStorage.getItem("liked-images")) || {
      likedImages: [],
    }
  );
};

const changState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LIKE":
      return {
        ...state,
        likedImages: [...state.likedImages, payload],
      };
    case "UNLIKE":
      return {
        ...state,
        likedImages: state.likedImages.filter((image) => image.id != payload),
      };
    default:
      return state;
  }
};
export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changState, dataFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("liked-images", JSON.stringify(state));
  }, [state]);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
