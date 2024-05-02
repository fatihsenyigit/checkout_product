import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaCartArrowDown } from "react-icons/fa";
import "../css/productBar.css";
import { useState } from "react";
import axios from "axios";

const ProductBar = ({ getProducts }) => {
  const [formObject, setFormObject] = useState({
    productName: "",
    productPrice: "",
    productQuantity: "",
    productImage: "",
  });

  const handleChange = (e) => {
    setFormObject({ ...formObject, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name: formObject.productName,
      image: formObject.productImage,
      price: formObject.productPrice,
      dampingRate: 0.8,
      amount: formObject.productQuantity,
    };
    postProduct(newProduct);
    setFormObject({
      productName: "",
      productPrice: "",
      productQuantity: "",
      productImage: "",
    });
  };

  const postProduct = async (newProduct) => {
    try {
      await axios.post(process.env.REACT_APP_URL, newProduct);
    } catch (error) {
      console.log(error);
    }

    getProducts();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="productBarForm">
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            id="productName"
            value={formObject.productName}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            id="productPrice"
            value={formObject.productPrice}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control
            type="number"
            id="productQuantity"
            value={formObject.productQuantity}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="url"
            placeholder="image URL"
            id="productImage"
            value={formObject.productImage}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="success" type="submit">
            <FaCartArrowDown /> add to cart
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ProductBar;
