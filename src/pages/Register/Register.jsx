import React from "react";
import "./Register.css";
import imageMain from "../../assets/images/register-image-main.png";
import Point from "../../components/ui/point/Point";
import { useContext, useState } from "react";
import { UserData } from "../../contexts/user";
import { urlBd } from "../../configs/urls";
import ButtonSend from "../../components/ui/buttonSend/ButtonSend";
import { useNavigate } from "react-router-dom";

export default function Register(props) {
  const getMethodsUser = useContext(UserData);
  const setUser = getMethodsUser[0];
  const getHome = useNavigate();
  const [valueField, setValueField] = useState({
    login: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  function setDataUser(e) {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append('login', valueField.login);
    dataForm.append('email', valueField.email);
    dataForm.append('password', valueField.password);
    dataForm.append('register', true);
     setUser(urlBd, dataForm);
    //   getHome('/');
    //  window.location.reload();
  }

  return (
    <main className="page">
      <section className="register">
        <div className="register__image">
          <h1 className="register__title">Регистрация</h1>
          <img src={imageMain} alt="" />
        </div>
        <div className="register__content">
          <form
            onSubmit={setDataUser}
            className="form-register"
            active={urlBd}
            method="post"
          >
            <ul className="form-register__lists">
              <li className="form-register__item">
                <div className="form-register__body-info">
                  <Point
                    className="form-register__point"
                    text="1"
                    size="46"
                    width="90"
                    height="90"
                    background="#ff420e"
                  />
                  <div className="form-register__info">
                    <p className="form-register__point-title">
                      Придумайте логин
                    </p>
                    <strong className="form-registe__text">
                      Логин - ваш игровой ник, от 4 до 16 символов
                    </strong>
                  </div>
                </div>
                <div className="form-register__body-field">
                  <input
                    className="form-register__login field"
                    type="text"
                    name="login"
                    value={valueField.login}
                    onChange={(e) =>
                      setValueField((prevState) => {
                        const newState = { ...prevState };
                        newState.login = e.target.value;
                        return newState;
                      })
                    }
                  />
                </div>
              </li>
              <li className="form-register__item">
                <div className="form-register__body-info">
                  <Point
                    className="form-register__point"
                    text="2"
                    size="46"
                    width="90"
                    height="90"
                    background="#80bd9e"
                  />
                  <div className="form-register__info">
                    <p className="form-register__point-title">
                      Введите ваш Email
                    </p>
                    <strong className="form-registe__text">
                      Служит для сохранности и восстановления аккаунта
                    </strong>
                  </div>
                </div>
                <div className="form-register__body-field">
                  <input
                    className="form-register__login field"
                    type="text"
                    name="email"
                    value={valueField.email}
                    onChange={(e) =>
                      setValueField((prevState) => {
                        const newState = { ...prevState };
                        newState.email = e.target.value;
                        return newState;
                      })
                    }
                  />
                </div>
              </li>
              <li className="form-register__item">
                <div className="form-register__body-info">
                  <Point
                    className="form-register__point"
                    text="3"
                    size="46"
                    width="90"
                    height="90"
                    background="#f98866"
                  />
                  <div className="form-register__info">
                    <p className="form-register__point-title">
                      Придумайте пароль
                    </p>
                    <strong className="form-registe__text">
                      Чем больше и сложнее пароль тем лучше
                    </strong>
                  </div>
                </div>
                <div className="form-register__body-field">
                  <input
                    className="form-register__login field"
                    type="text"
                    name="password"
                    value={valueField.password}
                    onChange={(e) =>
                      setValueField((prevState) => {
                        const newState = { ...prevState };
                        newState.password = e.target.value;
                        return newState;
                      })
                    }
                  />
                </div>
              </li>
              <li className="form-register__item">
                <div className="form-register__body-info">
                  <Point
                    className="form-register__point"
                    text="4"
                    size="46"
                    width="90"
                    height="90"
                    background="#89da59"
                  />
                  <div className="form-register__info">
                    <p className="form-register__point-title">
                      Повторите пароль
                    </p>
                    <strong className="form-registe__text">
                      Убедитесь в том что пароль действительно ввели правильно
                    </strong>
                  </div>
                </div>
                <div className="form-register__body-field">
                  <input
                    className="form-register__login field"
                    type="text"
                    name="repeat-password"
                    value={valueField.repeatPassword}
                    onChange={(e) =>
                      setValueField((prevState) => {
                        const newState = { ...prevState };
                        newState.repeatPassword = e.target.value;
                        return newState;
                      })
                    }
                  />
                </div>
              </li>
            </ul>
            <div className="form-register__send">
              <p className="form-register__agree">
                Регистрируясь на нашем проекте, вы{" "}
                <span>автоматически соглашаетесь с игровыми правилами</span> и
                пользовательским соглашением.
              </p>
              <ButtonSend
                className="form-register__btn"
                text="Зарегистрируваться"
              />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
