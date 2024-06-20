import React from "react";

export const Highlight = ({ query = "", style, children = "" }) => {
  const parseChildren = children.split("");
  const parseQuery = query.split("");
  return (
    <span>
      { parseChildren.map((char, index) => {
        const hasMark = parseQuery[index]?.toLowerCase() == char.toLowerCase();
        if (hasMark) return (
          <b style={ style } key={ index }>
            { char }
          </b>
        );
        return char;
      }) }
    </span>
  );
}