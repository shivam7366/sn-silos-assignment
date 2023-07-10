import React from "react";
import Link from "next/link";
import Image from "next/image";

function List({ product, handleDelete, handleEdit }) {
  //   return (
  //     <li
  //       key={product.id}
  //       className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
  //     >
  //       <div className="relative pb-2/3">
  //         <Image
  //           src={product.image}
  //           alt={product.title}
  //           layout="fill"
  //           className="absolute inset-0 w-full h-full object-cover"
  //         />
  //       </div>
  //       <div className="p-4 flex-grow">
  //         <h2 className="text-xl font-bold mb-2">
  //           <Link href={`products/${product.id}`}>{product.title}</Link>
  //         </h2>
  //         <p className="text-gray-600">${product.price}</p>
  //   <div className="mt-4 flex justify-end">
  //     <button
  //       className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
  //       onClick={() => handleEdit(product)}
  //     >
  //       Edit
  //     </button>
  //     <button
  //       className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
  //       onClick={() => handleDelete(product.id)}
  //     >
  //       Delete
  //     </button>
  //   </div>
  //       </div>
  //     </li>
  //   );
  return (
    <li className="mb-4 p-2">
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          className="h-48 lg:h-auto lg:w-96 flex bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden   border-b border-l border-gray-400 lg:border-t lg:border-gray-400"
          style={{ backgroundImage: `url(${product.image})` }}
          title="Woman holding a mug"
        ></div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <p class="text-sm text-gray-600 flex items-center">
              Category: {product.category}
            </p>
            <div class="text-gray-900 font-bold text-xl mb-2">
              <Link href={`products/${product.id}`}>{product.title} </Link>
            </div>
            <p class="text-gray-700 text-base">{product.description}</p>
          </div>
          <div className="mt-4 flex justify-end">
            {/* <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
              onClick={() => handleEdit(product)}
            >
              Edit
            </button> */}
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default List;
