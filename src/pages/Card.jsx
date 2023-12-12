import React from "react";
import "../style/Card.css";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/SlicesCard";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Card = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);


  return (
    <Helmet title="Card">
      <CommonSection title="Shopping Card" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No item added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                </h6>
                <span className="fs-4 fw-bold">${totalAmount}</span>
              </div>
              <p className="fs-6 mt-2">
                taxes and shipping will calculate in checkout
              </p>
              <div>
                <Link to={"/checkout"}>
                  <button className="buy__btn w-100">Chechout</button>
                </Link>
                <Link to={"/shop"}>
                  <button className="buy__btn w-100 mt-3">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}px</td>
      <td>
        <motion.i
          onClick={deleteProduct}
          className="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Card;
