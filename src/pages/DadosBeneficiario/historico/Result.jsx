/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import Tabela from "./Tabela";
import Card from "./Card";

export const Result = ({ data, columns }) => {
  const [expanded, setExpanded] = useState([]);

  const handleExpand = (ind) => {
    setExpanded((prev) => {
      if (prev.includes(ind)) {
        return prev.filter((el) => el !== ind);
      } else {
        return [...prev, ind];
      }
    });
  };

  return (
    <Fragment>
      <Tabela
        data={data}
        columns={columns}
        expanded={expanded}
        onExpand={handleExpand}
      />
      <Card
        data={data}
        columns={columns}
        expanded={expanded}
        onExpand={handleExpand}
      />
    </Fragment>
  );
};
