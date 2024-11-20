import React from "react";
// import { useParams } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";

const HomeAuthor: React.FC = () => {
  // const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto">
      <Header />
      <Main />
    </div>
  );
};

export default HomeAuthor;
