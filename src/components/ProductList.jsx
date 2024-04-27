import Table from "react-bootstrap/Table";
import data from "../helpers/data";
import Button from "react-bootstrap/Button";
import "../css/productList.css";

const ProductList = () => {
  return (
    <div className="productList-container">
      <div className="productListMain">
        {data.map((e) => {
          return (
            <div className="eachProduct" key={e.id}>
              <img src="e.image" alt="" />
              <div>
                <div>{e.name}</div>
                <div>{e.price}</div>
                <div>{e.amount}</div>
                <Button className="btn-danger">remove</Button>
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
