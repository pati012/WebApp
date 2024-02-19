import React from "react";
import "./SideBar.css";
import "../ui/field/field.css";
import { useState } from "react";
import { useContext } from "react";
import imge from "../../assets/images/1231.jpg";
import ListNav from "../listNav/ListNav";
import { NavLink } from "react-router-dom";
import { UserData } from "../../contexts/user";
import "../ui/button/ButtonNav.css";
import { urlBd } from "../../configs/urls";
import ButtonSend from "../../components/ui/buttonSend/ButtonSend";

export default function SideBar() {
  const dataUser = useContext(UserData);
  const setDataUser = dataUser[0];
  let changeArrayDataUser = dataUser[1];
  let getArrayDataUser = dataUser[2];
  const stateServers = [
    { serverName: "TechnoMagicRPG", maxPlayers: 100, playersNow: 32 },
  ];

  const [value, setValue] = useState({
    login: "",
    password: "",
  });

  async function sendData(e) {
    e.preventDefault();
    let form = new FormData();
    form.append("login", value.login);
    form.append("password", value.password);
    form.append("sign", true);
    setDataUser(urlBd, form);
  }

  return (
    <aside className="side-bar">
      <div className="side-bar__body">
        <section className="sign info-section">
          <div className="sign__name-section side-bar__name-section">
            <p className="sign__text">
              {!getArrayDataUser.isActive
                ? "Авторизация"
                : "Настройки аккаунта"}
            </p>
          </div>
          {!getArrayDataUser.isActive ? (
            <form
              action={urlBd}
              onSubmit={sendData}
              method="post"
              className="form-sign"
            >
              <div className="from-sign__wrapper">
                <div className="form-sign__login">
                  <input
                    className="form-sign__input-login field"
                    type="text"
                    placeholder="Логин"
                    name="login"
                    value={value.login}
                    onChange={(e) =>
                      setValue((pevState) => {
                        const newObject = { ...pevState };
                        newObject.login = e.target.value;
                        return newObject;
                      })
                    }
                  />
                </div>
                <div className="form-sign__password">
                  <input
                    className="form-sign__input-pass field"
                    type="password"
                    placeholder="Пароль"
                    name="password"
                    value={value.password}
                    onChange={(e) =>
                      setValue((pevState) => {
                        const newObject = { ...pevState };
                        newObject.password = e.target.value;
                        return newObject;
                      })
                    }
                  />
                </div>
                <ButtonSend text="Войти" className="sign__btn-sign" />
                <div className="form-sign__body-btn">
                  <NavLink className="sign-btn sign-btn--green" to="/register">
                    Регистрация
                  </NavLink>
                  <button className="sign-btn sign-btn--red" type="button">
                    Забыл пароль?
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="user">
              <div className="user__header">
                <img
                  src={imge}
                  style={{ width: "80px", height: "80px" }}
                  alt=""
                />
                <p className="user__name">{getArrayDataUser.user.login}</p>
                <p className="user__coins">
                   <span>коины:</span>
                  {getArrayDataUser.user.coins || 0}
                </p>
              </div>
              <div className="user__navigator">
                <ul className="user__lists">
                  <ListNav text="Личный кабинет" />
                  <ListNav text="Профиль" />
                  <ListNav path='/settingsAccount' text="Настройки" />
                  <li className="item-nav">
                    <button
                      type="button"
                      className="user_btn"
                      onClick={() =>
                        changeArrayDataUser((getArrayDataUser.isActive = false))
                      }
                    >
                      Выйти
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </section>
        <section className="navigator info-section">
          <div className="side-bar__name-section">
            <p className="navigator__text">Навигация</p>
          </div>
          <nav>
            <ul className="lists-items">
              <ListNav path="/downloadLauncher" text="Скачать лаунчер" />
              <ListNav path="/questions" text="Вопросы и ответы" />
              <ListNav target="_blank" href='https://vk.com/im?media=&sel=-224754509' text='Техническая поддержка'/>
              <ListNav path="/teamProject" text="Команда проекта" />
            </ul>
          </nav>
        </section>
        <section className="monitoring info-section">
          <div className="side-bar__name-section">
            <p className="navigator__text">Мониторинг</p>
          </div>
          <ul className="lists-items">
            {stateServers.map((item, index) => (
              <li className="item-nav">
                <p className="monitoring__server-name">{item.serverName}</p>
                <div className="monitoring__count-players">
                  <strong className="monitoring__state-players">
                    {item.playersNow} из {item.maxPlayers}
                  </strong>
                </div>
                <div className="monitoring__indicator-container">
                  <div
                    className="monitoring__indicator"
                    style={{ width: `${item.playersNow}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="social info-section">
          <div className="social__name-section side-bar__name-section">
            <p className="navigator__text">Социальные сети</p>
          </div>
          <ul className="social-sidebar">
            <li class="social-sidebar__item">
              <p className="social-sidebar__vk">Вконтакте</p>
            </li>
            <li class="social-sidebar__item">
              <p className="social-sidebar__ds">Discord</p>
            </li>
          </ul>
        </section>
      </div>
    </aside>
  );
}
