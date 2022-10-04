import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sup } from "./styled-components/SignUp.style";
import userData from "../data/userData.json";
import { Form, Input, Col, Row, notification } from "antd";
import PageTransition from "../components/PageTransition";
import WrapView from "../components/WrapView";

function App() {
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(userData);
  }, []);

  const addNotification = (placement, value) => {
    notification.success({
      message: `Hoşgeldin ${value.name}`,
      placement: placement,
      duration: 3,
    });
  };

  const onFinish = (values) => {
    const obj = {
      name: values.name,
      surName: values.surName,
      email: values.email,
      password: values.password,
      role: "user",
      address: [],
      basket: [],
      pastOrder: [],
    };
    console.log(obj);
    navigate("/");
    addNotification("topRight", values);
  };

  const onFinishFailed = (values) => {
    console.log(values);
  };

  return (
    <>
      <WrapView>
        <PageTransition>
          <Sup.Container>
            <Sup.Wrapper>
              <Form
                autoComplete="off"
                onFinish={(values) => onFinish(values)}
                onFinishFailed={(error) => onFinishFailed(error)}
              >
                <Row gutter={[8, 8]}>
                  <Col span={12}>
                    <Sup.Block>
                      <Sup.BlockTitle>Kişisel Bilgiler</Sup.BlockTitle>
                      <Form.Item
                        name="name"
                        label="Adınız"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[
                          {
                            required: true,
                            message: "Ad kısmı boş bırakılamaz !",
                          },
                          {
                            min: 3,
                            message: "Soyad en az 3 harfli olmalıdır !",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        name="surName"
                        label="Soy Adınız"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[
                          {
                            required: true,
                            message: "Soyad boş bırakılamaz !",
                          },
                          {
                            min: 3,
                            message: "Soyad en az 3 harfli olmalıdır !",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input />
                      </Form.Item>
                    </Sup.Block>
                  </Col>
                  <Col span={12}>
                    <Sup.Block>
                      <Sup.BlockTitle>Oturum Bilgileri</Sup.BlockTitle>

                      <Form.Item
                        name="email"
                        label="E-mailiniz"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[
                          {
                            required: true,
                            message: "E-mail alanı boş bırakılamaz !",
                          },
                          {
                            type: "email",
                            message: "Lütfen geçerli bir e-mail adresi girin !",
                          },
                          () => ({
                            validator(_, value) {
                              if (
                                users.filter((e) => e.email === value).length >
                                0
                              ) {
                                return Promise.reject(
                                  "Bu e-mail adresi zaten kayıtlı !"
                                );
                              } else {
                                return Promise.resolve();
                              }
                            },
                          }),
                        ]}
                        hasFeedback
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        name="password"
                        label="Şifreniz"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[
                          {
                            required: true,
                            message: "Şifre boş bırakılamaz !",
                          },
                          {
                            min: 6,
                            message: "Şifre en az 6 karakterli olmalıdır !",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input.Password
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Item>
                      <Form.Item
                        name="confirmPassword"
                        label="Şifreniz (Tekrar)"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        rules={[
                          {
                            required: true,
                            message: "Şifre (Tekrar) boş bırakılamaz !",
                          },
                          () => ({
                            validator(_, value) {
                              if (!value || password === value) {
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                "Şifreler birbiri ile uyuşmuyor !"
                              );
                            },
                          }),
                        ]}
                        hasFeedback
                      >
                        <Input.Password />
                      </Form.Item>
                    </Sup.Block>
                  </Col>
                  <Col span={24}>
                    <Form.Item wrapperCol={{ span: 24 }}>
                      <Sup.Button>KAYIT OL</Sup.Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Sup.Wrapper>
          </Sup.Container>
        </PageTransition>
      </WrapView>
    </>
  );
}

export default App;
