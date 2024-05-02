import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../css/productList.css";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";

const ProductList = ({ getProducts, newData }) => {
  const handleAmount = async (productId, change) => {
    const productAmount = newData?.filter((item) => item.id === productId)[0]
      .amount;
    const editAmount = Math.max(productAmount + change, 0);
    const editObject = { amount: editAmount };
    try {
      await axios.put(`${process.env.REACT_APP_URL}/${productId}`, editObject);
    } catch (error) {
      console.log(error);
    }
    getProducts();
    // setNewData((info) =>
    //   info.map((item) =>
    //     item.id === productId
    //       ? { ...item, amount: Math.max(item.amount + change, 0) }
    //       : item,
    //   ),
    // );
  };
  const subTotal = Number(
    newData
      ?.reduce((acc, val) => acc + val.price * 0.8 * val.amount, 0)
      ?.toFixed(2),
  );
  const tax = Number((subTotal * 0.18)?.toFixed(2));
  const shipping = subTotal === 0 ? 0 : 25;
  const total = Number((subTotal + tax + shipping)?.toFixed(2));

  const handleRemove = async (item) => {
    try {
      await axios.delete(`${process.env.REACT_APP_URL}/${item.id}`);
    } catch (error) {
      console.log(error);
    }
    getProducts();
  };

  return (
    <div className="productList-container">
      {newData?.length === 0 ? (
        "there is no product to show"
      ) : (
        <>
          <div className="productListMain">
            {newData?.map((e) => {
              return (
                <div
                  className="d-flex flex-column gap-1 eachProduct"
                  key={e.id}
                >
                  <div
                    className="d-flex justify-content-center
              "
                  >
                    <img src={e.image} alt="" />
                  </div>

                  <div>{e.name}</div>
                  <div className="d-flex align-items-baseline gap-3">
                    <h5 className="text-warning ">
                      ${(e.price * 0.8).toFixed(2)}
                    </h5>
                    <h6 className=" text-decoration-line-through">
                      ${e.price}
                    </h6>
                  </div>
                  <h5 className="d-flex jus align-items-center gap-2">
                    <FaRegSquareMinus
                      onClick={() => handleAmount(e.id, -1)}
                      className=" text-success btnAmount"
                    />
                    {e.amount}
                    <FaRegPlusSquare
                      onClick={() => handleAmount(e.id, 1)}
                      className=" text-success btnAmount"
                    />
                  </h5>

                  <div className="d-flex justify-content-center">
                    <Button
                      className="btn-danger d-flex gap-2 align-items-center"
                      onClick={() => handleRemove(e)}
                    >
                      <FaRegTrashAlt />
                      remove
                    </Button>
                  </div>
                  <div>
                    <p>
                      Product Total: ${(e.price * 0.8 * e.amount).toFixed(2)}
                    </p>
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
                  <td className="text-end">${subTotal}</td>
                </tr>
                <tr>
                  <th>Tax(18%)</th>
                  <td className="text-end">${tax}</td>
                </tr>
                <tr>
                  <th>Shipping</th>
                  <td className="text-end">${shipping}</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td className="text-end">${total}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
