import React from "react";
import SmallArticle from "./SmallArticle";

const SmallArticleGallery = () => {
  const data = [
    {
      id: 1,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1654699821/di3hkg7jamutgcrph7g7.jpg",
      heading:
        "FAME IS FLEETING,CELEBRITY..",
      category: "Culture",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1651165235/eonq48udslvzzrwv3og9.jpg",
      heading: "LIKE A PRAYER SEARCHING FOR THE LIGHT IN..",
      category: "Culture",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1646237724/tr6izslsd7pu9ublwirz.jpg",
      heading: "TENNISSANCE THE LAWS OF THE COURT",
      category: "Culture",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1644862465/gzhemrotchlqdfj5vv8b.jpg",
      heading: "ALL THE CAMERAS INSIDE MY HOUSE",
      category: "Culture",
    },
  ];
  return (
    <div>
      <hr />
      {data.map((d) => (
        
          <SmallArticle key={d.id} img={d.img} heading={d.heading} category={d.category} />
       
      ))}
    </div>
  );
};

export default SmallArticleGallery;