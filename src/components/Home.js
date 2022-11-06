import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Home = () => {
  return (
    <ImageList cols={3} rowHeight={200}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const itemData = [
  {
    img: "https://images.pexels.com/photos/5380647/pexels-photo-5380647.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Breakfast",
  },
  {
    img: "https://images.pexels.com/photos/5380614/pexels-photo-5380614.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Burger",
  },
  {
    img: "https://images.pexels.com/photos/5380603/pexels-photo-5380603.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Camera",
  },
  {
    img: "https://images.pexels.com/photos/5380608/pexels-photo-5380608.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Coffee",
  },
  {
    img: "https://images.pexels.com/photos/5380678/pexels-photo-5380678.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Hats",
  },
  {
    img: "https://images.pexels.com/photos/5935787/pexels-photo-5935787.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Honey",
  },
  {
    img: "https://images.pexels.com/photos/5380605/pexels-photo-5380605.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Basketball",
  },
  {
    img: "https://images.pexels.com/photos/5926386/pexels-photo-5926386.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Fern",
  },
  {
    img: "https://images.pexels.com/photos/5935789/pexels-photo-5935789.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Mushrooms",
  },
  {
    img: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Tomato basil",
  },
  {
    img: "https://images.pexels.com/photos/4904558/pexels-photo-4904558.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Sea star",
  },
  {
    img: "https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Bike",
  },
];

export default Home;
