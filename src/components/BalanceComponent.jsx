import React from "react";

export const BalanceComponent = () => {
  return (
    <section className="balance-sct">
      <div className="sct-wrapper">
        <h1 className="title title-std">your balance</h1>
        <p className="subtitle">$200.00</p>
        <div className="row">
          <div className="col col-6">
            <h3 className="income-title title-std">income</h3>
            <p className="income-subtitle">$250.00</p>
          </div>
          <div className="col col-6">
            <h3 className="expense-title title-std">expense</h3>
            <p className="expense-subtitle">$50.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};
