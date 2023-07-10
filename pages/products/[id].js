import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SingleItem from "../../src/components/SingleItem";
import Modal from "../../src/components/ui/Modal";
import { useSelector, useDispatch } from "react-redux";
import { getOneProduct, deleteProduct } from "../../src/states/actions";

const ProductDetailPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const [open, setOpen] = useState(false);

  // const [product, setProduct] = useState({});

  useEffect(() => {
    if (id) {
      dispatch(getOneProduct(id));
    }
  }, [id]);

  const product = useSelector((state) => state.product);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  const handleEdit = () => {
    // Handle edit functionality for the product
    setOpen(true);
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
    router.push("/");
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
