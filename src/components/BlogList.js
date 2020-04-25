import React from "react";
import Card from "./Card";

const BlogList = ({ list }) => {
    return (
      <ul className="list">
        {list.items.map((item, index) => {
          return <Card key={index} item={item}/>;
        })}
      </ul>
    );
  };

  export default BlogList;