import { createContext, useContext, useMemo, useState } from "react";
import { getPosts, insertPost, deleteRecord } from "../services";

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    getPosts().then(setPosts);
  };

  const addPost = (body) => {
    insertPost(body).then((newPost) => {
      setPosts((prevPosts) => [...prevPosts, newPost]);
    });
  };

  const deletePost = (id) => {
    if (typeof id === "string") {
      deleteRecord(id)
        .then(() => {
          setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression du post :", error);
        });
    } else {
      console.error("ID invalide :", id);
    }
  };

  const value = useMemo(() => {
    return {
      posts,
      fetchPosts,
      addPost,
      deletePost,
    };
  }, [posts, fetchPosts, addPost, deletePost]);

  return <Provider value={value}>{children}</Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
