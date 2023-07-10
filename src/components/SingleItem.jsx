import React from "react";

function SingleItem({ product, handleEdit, handleDelete }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">{product.title}</h1>
        <div className="flex justify-center md:justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={product.image} alt={product.title} className="w-full" />
        </div>
        <div>
          <p className="text-gray-600 mb-4">Category: {product.category}</p>
          <p className="text-gray-600 mb-4">Price: ${product.price}</p>
          <p className="text-gray-600 mb-4">
            Description: {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
