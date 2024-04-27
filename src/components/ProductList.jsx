import Table from "react-bootstrap/Table";
import data from "../helpers/data";
import Button from "react-bootstrap/Button";
import "../css/productList.css"

const ProductList = () => {
  return (
    <div className="productList-container">
      {data.map((e) => {
        return (
          <div key={e.id}>
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
      <Table>
        <tbody>
          <tr>
            <th>Subtotal</th>
            <td>10</td>
          </tr>
          <tr>
            <th>Tax(18%)</th>
            <td>20</td>
          </tr>
          <tr>
            <th>Shipping</th>
            <td>30</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>40</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
