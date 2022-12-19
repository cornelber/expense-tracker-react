import React from "react";
import { HistoryDetailsComponent } from "./HistoryDetailsComponent";

export const HistoryComponent = () => {
  return (
    <section className="history-sct">
      <h2 className="title title-std">history</h2>
      <hr className="separator" />
      <ul className="list">
        <HistoryDetailsComponent />
      </ul>
    </section>
  );
};
