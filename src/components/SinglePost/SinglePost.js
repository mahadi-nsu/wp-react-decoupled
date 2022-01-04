import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../services/useApiRequest";
import "./SinglePost.css";
import ReactHtmlParser from "react-html-parser";

const SinglePost = (props) => {
  const property = [
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1641067558391-ea0e60fd8e54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Rear view of modern home with pool",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1640783902698-f74b7ca94ba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      imageAlt: "Rear view of modern home with pool",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1640013097686-6879c7c4a59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      imageAlt: "Rear view of modern home with pool",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1572270907014-c31da1c54124?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      imageAlt: "Rear view of modern home with pool",
    },
  ];

  const { id } = useParams();

  const baseUrl =
    "https://dev-first-wp-test.pantheonsite.io/wp-json/wp/v2/posts";
  const { data, loading, error } = useFetch(`${baseUrl}/${id}`);

  if (loading && data == null) return <div>Loading...</div>;

  return (
    <div>
      <div id="container">
        <h2 className="container__hero__header">Details Read</h2>
        {data == null ? (
          <div>Loading...</div>
        ) : (
          <div class="product-details">
            <h1 className="product-details__title">{data.title.rendered}</h1>

            <p class="information">{ReactHtmlParser(data.content.rendered)}</p>

            <div class="control">
              <button class="btn">
                <span class="buy">
                  Date : {new Date().toISOString().slice(0, 10)}
                </span>
              </button>
            </div>
          </div>
        )}

        <div class="product-image">
          <img
            src={property[Math.floor(Math.random() * property.length)].imageUrl}
            alt={property.imageAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
