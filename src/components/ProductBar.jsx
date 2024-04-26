import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaCartArrowDown } from "react-icons/fa";

const ProductBar = () => {
  return (
    <div>
      <Form className="productBarForm fixed-input-size">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label Label>Product Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label Label>Product Price</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label Label>Product Quantity</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label Label>Product Image</Form.Label>
          <Form.Control type="url" placeholder="https://example.com/" />
        </Form.Group>
        <div className="text-center">
          <Button variant="danger" type="submit">
            <FaCartArrowDown /> add to cart
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ProductBar;
