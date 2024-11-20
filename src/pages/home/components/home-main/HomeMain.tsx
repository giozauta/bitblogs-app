import React, { useState } from "react";
import FeaturedAuthors from "./components/featured-authors/FeaturedAuthors";
import { blogsData } from "../../components/state";
import PopularTags from "./components/popular-tags/PopularTags";
import Blogs from "./components/blogs";

const Home: React.FC = () => {
  const [state] = useState(blogsData);

  return (
    <div className="homeContainer container  mx-auto flex flex-col md:flex-row gap-8">
      <div className="homeMainSection  md:w-2/3 space-y-8 flex flex-col">
        {state.map((data, index) => {
          return (
            <Blogs
              key={index}
              title={data.title}
              identifer={data.identifierInformation}
              paragrap={data.paragrap}
            />
          );
        })}
      </div>
      <div className="homeAsideSEction md:w-1/3 space-y-8">
        <PopularTags />
        <FeaturedAuthors />
      </div>
    </div>
  );
};

export default Home;
