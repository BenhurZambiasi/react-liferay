import React from "react";
import Accordion from "../Accordion";

export const Info = () => {
  return (
    <div>
      <div className="container d-flex flex-column gap-3">
        <Accordion>
          <div>eira</div>
          <div>eira</div>
          <div>eira</div>
        </Accordion>
        <Accordion />
        <Accordion />
      </div>

      <div>drawer</div>
    </div>
  );
};
