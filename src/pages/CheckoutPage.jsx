import Button from "react-bootstrap/Button";
import ProductBar from "../components/ProductBar";

const CheckoutPage = () => {
  return (
    <div className="container ">
      <h1 className="text-center mt-2 text-danger">Checkout Page</h1>
      <Button className="btn-warning mb-5">hide product bar</Button>
      <ProductBar/>
    </div>
  );
};

export default CheckoutPage;
