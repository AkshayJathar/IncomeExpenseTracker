import React from "react";

const AccountSummary = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h3 className="mb-4 text-3xl md:text-4xl leading-tight text-coolGray-900 font-bold tracking-tighter">
          Total Income/Expenses of All Accounts
        </h3>
        <p className="text-lg md:text-xl text-coolGray-500 font-medium">
          A list of your company's accounts, either separated by category or in
          chronological order.
        </p>
      </div>
      <section className="bg-coolGray-50 py-4">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-3"></div>
        </div>
      </section>
    </>
  );
};

export default AccountSummary;
