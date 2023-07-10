import { useState, useEffect } from "react";
import Modal from "../src/components/ui/Modal";
import List from "../src/components/List";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, deleteProduct } from "../src/states/actions";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const products = useSelector((state) => state.products);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

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

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <>
      <Modal setOpen={setOpen} open={open} details={details} edit={edit} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Product List</h1>
        <ul>
          {products.map((product) => (
            <List
              key={product.id}
              product={product}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
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
