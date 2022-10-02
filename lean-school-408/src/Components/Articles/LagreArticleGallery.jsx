import React from "react";
import LargeArticle from "./LargeArticle";

const LagreArticleGallery = () => {
  const data = [
    {
      id: 1,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1663166848/y1f9nhvi6ox2vusfdshm.jpg",
      heading: "THE ART OF SETTING THE TABLE",
      category: "Culture",
      text: "Food writer Alicia Kennedy photographer Brendan George Ko,and set designer Fran Mill..",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1662995144/emdwqkzfxgmhxg77qarm.jpg",
      heading: "SKINCARE HEROES",
      category: "Market",
      text: "Skincare you need,from Barbara Sturm to La Mer",
    },
  ];
  return (
    <div>
      <div className="large-articles1">
        {data.map((d) => (
          <LargeArticle key={d.id}
            img={d.img}
            heading={d.heading}
            category={d.category}
            text={d.text}
          />
        ))}
      </div>
    </div>
  );
};

export default LagreArticleGallery;
