import React, { useState } from "react";

function Paginate({ page, setpage }) {
  const previousHandler = () => {
    if (page > 1) setpage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page < 10) setpage((page) => page + 1);
  };

  const paginateHandler = (event) => {
    console.log(event.target.dataset.value);
    setpage(() => event.target.dataset.value);
  };

  const pages = [];

  for (let i = 1; i <= 10; i++) {
    pages.push(
      <p
        onClick={paginateHandler}
        key={i}
        data-value={i}
        className={
          page === i ? "text-white bg-blue-600 p-2 rounded-full " : "text-white"
        }
      >
        {i}
      </p>
    );
  }

  return (
    <>
      <div className="flex w-5/6 px-3 justify-between items-center m-auto mt-9 mb-20 md:w-96">
        <button
          onClick={previousHandler}
          className={
            page == 1
              ? "opacity-30 text-white w-20 p-1 "
              : "text-blue-950 rounded-lg w-20 p-1 bg-blue-400 hover:bg-blue-600 hover:rounded-lg hover:transition cursor-pointer hover:text-white hover:shadow-sm"
          }
        >
          Previous
        </button>

        {pages}

        <button
          onClick={nextHandler}
          className={
            page == 10
              ? "opacity-30 text-white w-20 p-1"
              : "text-blue-950 rounded-lg w-20 p-1 bg-blue-400 hover:bg-blue-600 hover:rounded-lg hover:transition cursor-pointer hover:text-white  hover:shadow-sm"
          }
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Paginate;
