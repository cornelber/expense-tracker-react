import React from "react";

export const AddTransactionComponent = () => {
  return (
    <div className="transaction-modal">
      <div className="modal-wrapper">
        <p className="modal-title">Add Transaction</p>
        <div className="row">
          <div className="col col-12">
            <label className="transaction-label">
              Message:
              <input className="transaction-input" type="text" />
            </label>
          </div>
          <div className="col col-12">
            <label className="transaction-label">
              Amount:
              <input className="transaction-input" type="number" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
