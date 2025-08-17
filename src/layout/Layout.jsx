import React from "react";
import Headers from "../Headers/Headers";
function Layout({ children }) {
  return (
    <>
      <Headers />
      {children}
      <footer>
        <div className="bg-blue-500 w-4/5 border border-2 p-3 rounded-2xl border-blue-800 m-auto mb-10 md:w-2/4">
          <p className="text-blue-200 font-bold text-center  ">
            Developed by Hossein Kimiyavi
          </p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
