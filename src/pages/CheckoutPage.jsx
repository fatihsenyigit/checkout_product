import Button from "react-bootstrap/Button";
import ProductBar from "../components/ProductBar";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";

const CheckoutPage = () => {
  const [show, setShow] = useState(true);
  const [newData, setNewData] = useState();
  const getProducts = async () => {
    try {
      const res = await axios(process.env.REACT_APP_URL);
      setNewData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="d-flex gap-3 flex-column justify-content-center align-items-center">
      <h1 className="text-danger">Checkout Page</h1>
      <Button onClick={() => setShow(!show)} className="btn-warning">
        {show ? "hide product bar" : "show product bar"}
      </Button>
      <div className="main">
        {show ? <ProductBar getProducts={getProducts} /> : ""}
        <ProductList getProducts={getProducts} newData={newData} />
      </div>
    </div>
  );
};

export default CheckoutPage;
