import React from "react";
import { Grid, Center } from "@chakra-ui/react";
import Post from "../Post/Post";
import styles from "./AllPost.module.css";

const AllPost = () => {
  return (
    <Center className={styles.mainContainer}>
      <div className={styles.heroContainer}>
        <Grid templateColumns="repeat(6, 1fr)" gap={1} p={4}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Grid>
      </div>
    </Center>
  );
};

export default AllPost;
