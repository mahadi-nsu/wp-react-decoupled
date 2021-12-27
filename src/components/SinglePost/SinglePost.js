import React from "react";
import { useParams } from "react-router-dom";

const SinglePost = (props) => {
  const { id } = useParams();

  console.log(id);
  return <div>Single post{id}</div>;
};

export default SinglePost;
