import React, { useState, useEffect } from "react";
import { Grid, Center } from "@chakra-ui/react";
import Post from "../Post/Post";
import styles from "./AllPost.module.css";
import useFetch from "../../services/useApiRequest";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import Modal from "../common/modal/Modal";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AllPost = () => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const blogUrl =
    "https://dev-first-wp-test.pantheonsite.io/wp-json/wp/v2/posts";

  const { data, loading, error } = useFetch(blogUrl);
  // useEffect(() => {
  //   console.log("Calling....");
  //   setLoading(true);
  //   axios
  //     .get(blogUrl)
  //     .then((response) => {
  //       // console.log(response);
  //       setData(response.data);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  let history = useHistory();
  console.log(data);

  const [isClicked, setIsClicked] = useState(false);

  const postBlogHandler = () => {
    setIsClicked(!isClicked);
  };

  const logoutHandler = () => {
    localStorage.clear();
    history.replace("/");
  };

  if (loading && data == null) return <div>Loading...</div>;

  return (
    <Center className={styles.mainContainer}>
      <div className={styles.headerDiv}>
        <h2 className={styles.header}>Tech Blog Site!</h2>
        <button className={styles.headerButton} onClick={logoutHandler}>
          Logout
        </button>
      </div>
      <div className={styles.heroContainer}>
        <div className={styles.addIconContainer}>
          {!isClicked ? (
            <AddIcon
              w={12}
              h={12}
              color="green.700"
              className={styles.addIcon}
              onClick={postBlogHandler}
            />
          ) : (
            <MinusIcon
              w={12}
              h={12}
              color="red.700"
              className={styles.addIcon}
              onClick={postBlogHandler}
            />
          )}
        </div>

        <div className={styles.modal__appear}>
          {isClicked ? (
            <Modal isClicked={isClicked} setIsClicked={setIsClicked} />
          ) : (
            ""
          )}
        </div>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={1}
          p={4}
          className={styles.grid}
        >
          {data == null ? (
            <div>Loading...</div>
          ) : (
            data.map((post) => <Post data={post} key={post.id} />)
          )}
        </Grid>
      </div>
    </Center>
  );
};

export default AllPost;
