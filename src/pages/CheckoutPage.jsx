import Button from "react-bootstrap/Button";
import ProductBar from "../components/ProductBar";
import { useState } from "react";
import ProductList from "../components/ProductList";

const CheckoutPage = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="d-flex gap-3 flex-column justify-content-center align-items-center">
      <h1 className="text-danger">Checkout Page</h1>
      <Button onClick={() => setShow(!show)} className="btn-warning">
        {show ? "hide product bar" : "show product bar"}
      </Button>
      <div className="main">
        {show ? <ProductBar /> : ""}
        <ProductList />
      </div>
    </div>
  );
};

export default CheckoutPage;
