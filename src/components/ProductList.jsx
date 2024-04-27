import Table from "react-bootstrap/Table";
import data from "../helpers/data";
import Button from "react-bootstrap/Button";
import "../css/productList.css";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";

const ProductList = () => {
  const image1 = data[2].image;
  console.log(image1);
  return (
    <div className="productList-container">
      <div className="productListMain">
        {data.map((e) => {
          return (
            <div className="d-flex flex-column gap-1 eachProduct" key={e.id}>
              <div
                className="d-flex justify-content-center
              "
              >
                <img src={image1} alt="" />
              </div>

              <div>{e.name}</div>
              <div className="d-flex align-items-baseline gap-3">
                <h5 className="text-warning ">${e.price*0.8}</h5> <h6 className=" text-decoration-line-through">${e.price}</h6>
              </div>
              <h5 className="d-flex jus align-items-center gap-2">
                <FaRegSquareMinus />
                {e.amount} <FaRegPlusSquare />
              </h5>
              <div className="d-flex justify-content-center">
                <Button className="btn-danger">remove</Button>
              </div>
              <div>
                <p>Product Total:</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="productListTable">
        <Table>
          <tbody>
            <tr>
              <th>Subtotal</th>
              <td className="text-end">1sdfsd088</td>
            </tr>
            <tr>
              <th>Tax(18%)</th>
              <td className="text-end">20</td>
            </tr>
            <tr>
              <th>Shipping</th>
              <td className="text-end">30987654345</td>
            </tr>
            <tr>
              <th>Total</th>
              <td className="text-end">40</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ProductList;
