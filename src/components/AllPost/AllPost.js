import React, { useState, useEffect } from "react";
import { Grid, Center } from "@chakra-ui/react";
import Post from "../Post/Post";
import styles from "./AllPost.module.css";
import useFetch from "../../services/useApiRequest";

const AllPost = () => {
  const blogUrl =
    "https://dev-first-wp-test.pantheonsite.io/wp-json/wp/v2/posts";

  const { data, loading, error } = useFetch(blogUrl);

  console.log(data);
  // console.log(loading);
  // console.log(error);

  if (loading && data == null) return <div>Loading...</div>;

  return (
    <Center className={styles.mainContainer}>
      <div className={styles.heroContainer}>
        <Grid templateColumns="repeat(6, 1fr)" gap={1} p={4}>
          {data == null ? (
            <div>Loading...</div>
          ) : (
            data.map((post) => <Post data={post} />)
          )}
        </Grid>
      </div>
    </Center>
  );
};

export default AllPost;
