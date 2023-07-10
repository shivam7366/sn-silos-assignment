import React, { useState } from "react";
import { useRouter } from "next/router";
const Catogery = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

function Form({ cancelButtonRef, setOpen, details, edit }) {
  const router = useRouter();
  const [productName, setProductName] = useState(details ? details.title : "");
  const [price, setPrice] = useState(details ? details.price : "");
  const [description, setDescription] = useState(
    details ? details.description : ""
  );
  const [catogery, setCatogery] = useState(details ? details.catogery : "");
  const [image, setImage] = useState(details ? details.image : "");
  console.log(details);

  const editProduct = async (productData) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );
      const data = await response.json();
      alert("Product Updated Successfully  ");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const addProduct = async (productData) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      const data = await response.json();
      alert("Product Added Successfully");
      router.push("/");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //  validation

    if (!productName || !price || !description || !catogery || !image) {
      alert("Please fill all the fields");
      return;
    }

    const productData = {
      title: productName,
      price: price,
      description: description,
      catogery: catogery,
      image: image,
    };
    if (edit) {
      productData.id = details.id;
      editProduct(productData);
    } else {
      addProduct(productData);
    }

    console.log(productData);
    setOpen(false);
  };

  return (
    <>
      {/* <h3 className="text-center">{edit ? "Edit Product" : "Add Product"}</h3> */}
      <form class="w-full max-w-lg" onSubmit={handleSubmit}>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="product-name"
            >
              Product Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="product-name"
              type="text"
              value={productName}
              placeholder={edit ? "New Product Name" : "Product Name"}
              // value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
            {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="price"
            >
              Price
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="price"
              type="number"
              value={price}
              placeholder={edit ? "New Price" : "Price"}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="description"
            >
              Description
            </label>
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="description"
              type="text"
              value={description}
              rows={5}
              placeholder={edit ? "New Description" : "Description"}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            {/* <p class="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p> */}
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-2/3 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="image-url"
            >
              Image URL
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="description"
              value={image}
              type="url"
              onChange={(e) => {
                setImage(e.target.value);
              }}
              placeholder={edit ? "New Image URL" : "Image URL"}
            />
            {/* <p class="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p> */}
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Catogery
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => {
                  setCatogery(e.target.value);
                }}
              >
                <option>Choose Catogery</option>
                {Catogery.map((catogery) => (
                  <option key={catogery}>{catogery}</option>
                ))}
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              // type="submit"
              className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={() => setOpen(false)}
              ref={cancelButtonRef}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
