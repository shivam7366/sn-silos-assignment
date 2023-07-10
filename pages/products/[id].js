import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SingleItem from "../../src/components/SingleItem";
import Modal from "../../src/components/ui/Modal";

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = useState(false);

  const [product, setProduct] = useState({});

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const productData = await response.json();
      setProduct(productData);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const handleEdit = () => {
    // Handle edit functionality for the product
    setOpen(true);
  };

  const handleDelete = async () => {
    // Handle delete functionality for the product
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (!product.title) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Modal open={open} setOpen={setOpen} edit={true} details={product} />
      <SingleItem
        product={product}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default ProductDetailPage;
