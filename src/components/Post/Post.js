import React from "react";
import { Box, Image, Badge, Center } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const Post = ({ data }) => {
  const history = useHistory();
  const property = [
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      news: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1641067558391-ea0e60fd8e54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Rear view of modern home with pool",
      news: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1640783902698-f74b7ca94ba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      imageAlt: "Rear view of modern home with pool",
      news: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1640013097686-6879c7c4a59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      imageAlt: "Rear view of modern home with pool",
      news: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1572270907014-c31da1c54124?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      imageAlt: "Rear view of modern home with pool",
      news: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
  ];

  const clickHandler = () => {
    history.push(`/${data.id}`);
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={property[Math.floor(Math.random() * property.length)].imageUrl}
        alt={property.imageAlt}
      />

      <Box p="6">
        <Center>
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.news}
              <Badge borderRadius="full" px="2" colorScheme="red">
                Tech News
              </Badge>{" "}
              &bull; {property.baths}{" "}
              <Badge borderRadius="full" px="2" colorScheme="blue">
                Lorem Ipsum
              </Badge>
            </Box>
          </Box>
        </Center>
        <Center>
          <Box
            mt="3"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            bg="yellow"
            borderRadius="full"
            w="140px"
            p="5px"
            cursor="pointer"
            onClick={clickHandler}
          >
            <Center>{data.title.rendered}</Center>
          </Box>
        </Center>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          // isTruncated
        >
          {ReactHtmlParser(data.excerpt.rendered)}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
