import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { getProductList, getUserList } from "./store/reducers/Admin";
import axios from "axios";
import Home from "./views/Home";
import Products from "./views/Products";
import Detail from "./views/Detail";
import SignUp from "./views/SignUp";
import Login from "./components/Login";
import User from "./views/User";
import Admin from "./views/Admin";
import AdminLogin from "./views/AdminLogin";
import Payment from "./views/Payment";
import PaymentConfirm from "./views/PaymentConfirm";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { isLoggedIn, user } = useSelector((state) => state.User);
  const { isAdminLoggedIn, productList } = useSelector((state) => state.Admin);
  const dispatch = useDispatch((state) => state.Admin);

  useEffect(() => {
    const fetchData = async () => {
      const users = await axios.get(
        `http://${process.env.REACT_APP_IP}/users/getUsers`
      );
      const products = await axios.get(
        `http://${process.env.REACT_APP_IP}/product`
      );
      const temp = users.data.users;
      const filterUsers = temp.filter((item) => item.role === "user");

      dispatch(getProductList(products.data.product));
      dispatch(getUserList([...filterUsers]));
    };

    fetchData();
  }, [dispatch]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <React.Fragment>
      <AnimatePresence exitBeforeEnter>
        {isLoggedIn ? (
          <>
            <Login
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
            <Routes>
              <Route path="/" element={<Home login={showModal} />} />
              <Route
                path="/products"
                element={<Products login={showModal} products={productList} />}
              />
              <Route
                path="/products/:slug"
                element={<Detail login={showModal} products={productList} />}
              />
              <Route path={`/user/${user._id}`} element={<User />} />
              <Route path={"/payment"} element={<Payment />} />
              <Route path={"/payment/confirm"} element={<PaymentConfirm />} />
            </Routes>
          </>
        ) : (
          <>
            <Login
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
            <Routes>
              <Route path="/" element={<Home login={showModal} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/products"
                element={<Products login={showModal} products={productList} />}
              />
              <Route
                path="/products/:slug"
                element={<Detail login={showModal} products={productList} />}
              />
            </Routes>
          </>
        )}
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              isAdminLoggedIn ? (
                <Admin />
              ) : (
                <Navigate replace to="/admin/login" />
              )
            }
          />
        </Routes>
      </AnimatePresence>
    </React.Fragment>
  );
};

export default App;
