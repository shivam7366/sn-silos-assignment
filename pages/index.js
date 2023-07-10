import { useState, useEffect } from "react";
import Modal from "../src/components/ui/Modal";
import Alert from "../src/components/ui/Alert";
import Link from "next/link";

const ProductsPage = () => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Error fetching products");

        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="container mx-auto text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto text-center text-red-500">{error}</div>
    );
  }

  const handleEdit = (product) => {
    // Handle edit functionality for the product
    setEdit(true);
    setDetails(product);
    setOpen(true);
  };

  const handleDelete = async (productId) => {
    // Handle delete functionality for the product and update the UI
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      console.log(data);
      setProducts(products.filter((product) => product.id !== productId));

      console.log("Delete product:", productId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal setOpen={setOpen} open={open} details={details} edit={edit} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Product List</h1>
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
            >
              <div className="relative pb-2/3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-bold mb-2">
                  <Link href={`products/${product.id}`}>{product.title}</Link>
                </h2>
                <p className="text-gray-600">${product.price}</p>
                <div className="mt-4 flex justify-end">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
      },
    };
  }
}

export default ProductsPage;
