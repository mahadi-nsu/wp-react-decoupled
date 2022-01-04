import React, { useState, useEffect } from "react";
import { Grid, Center } from "@chakra-ui/react";
import Post from "../Post/Post";
import styles from "./AllPost.module.css";
import useFetch from "../../services/useApiRequest";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

const AllPost = () => {
  const blogUrl =
    "https://dev-first-wp-test.pantheonsite.io/wp-json/wp/v2/posts";

  const { data, loading, error } = useFetch(blogUrl);

  if (loading && data == null) return <div>Loading...</div>;

  return (
    <Center className={styles.mainContainer}>
      <div className={styles.headerDiv}>
        <h2 className={styles.header}>Tech Blog Site!</h2>
      </div>
      <div className={styles.heroContainer}>
        <div className={styles.addIconContainer}>
          <AddIcon w={12} h={12} color="green.700" className={styles.addIcon} />
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
