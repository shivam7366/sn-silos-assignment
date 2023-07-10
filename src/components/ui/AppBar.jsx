import React from "react";
import Link from "next/link";
import Modal from "./Modal";

const AppBar = () => {
  const [open, setOpen] = React.useState(false);
  const [details, setDetails] = React.useState(null);
  return (
    <>
      <Modal setOpen={setOpen} open={open} details={details} edit={false} />

      <header className="bg-gray-800">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <span className="text-white text-xl font-bold">
                <Link href="/">My App</Link>
              </span>
            </div>
            <div className="md:flex items-center">
              <div className="md:ml-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  onClick={() => setOpen(true)}
                >
                  Add
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default AppBar;
