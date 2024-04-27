import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaCartArrowDown } from "react-icons/fa";
import "../css/productBar.css"

const ProductBar = () => {
  return (
    <div>
      <Form className="productBarForm">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Product Image</Form.Label>
          <Form.Control type="url" placeholder="image URL" />
        </Form.Group>
          <Button className="" variant="success" type="submit">
            <FaCartArrowDown /> add to cart
          </Button>
      </Form>
    </div>
  );
};

export default ProductBar;
