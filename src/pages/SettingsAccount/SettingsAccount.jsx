import React from "react";
import "./SettingsAccount.css";
import { useContext, useEffect, useState } from "react";
import { UserData } from "../../contexts/user";
import testImage from "../../assets/images/1231.jpg";
import Points from "../../components/points/Points";
import { Route, Routes } from "react-router-dom";
import SettingsProfile from "./pages/SettingsProfile/SettingsProfile";
import ButtonSend from "../../components/ui/buttonSend/ButtonSend";

export default function SettingsAccount(props) {
  const contextDataUser = useContext(UserData);
  const dataUser = contextDataUser[2];
  const [user, setUser] = useState(dataUser);
  useEffect(() => {
    setUser(() => {
      return dataUser;
    });
  }, [dataUser]);

  if (user.user) {
    let { login = "123" } = user.user;
    return (
      <main className="page">
        <section className="settings">
          <div className="settings__header">
            <div className="settings__user">
              <div className="settings__avatar">
                <img src={testImage} alt="" />
              </div>
              <div className="settings__body">
                <h1 className="settings__title">Настройки аккаунта</h1>
                <p className="settings__greetings">Добро пожаловать, {login}</p>
              </div>
            </div>
          </div>
          <div className="settings-profile__content">
            <div className="settings__navigator">
              <Points
                className="settings__point"
                pointName={"Настройки профиля"}
                image={testImage}
                path="/settingsAccount/settingsProfile"
              />
              <Points
                className="settings__point"
                pointName={"Безопасность"}
                image={testImage}
                path="/"
              />
            </div>
              {/* <Routes>
                   <Route path='/settingsAccount/settingsProfile' element={<SettingsProfile/>} />
                </Routes> */}
              <form className="settings-profile" action="#" method="post">
                <div className="settings-profile__wrapper">
                  <div className="setting-profile__content">
                    <div className="settings-profile__body-settings">
                      <h3 className="settings-profile__title">
                        Сменить аватарку
                      </h3>
                      <p className="settings-profile__description">
                        Аватарка должны быть не меньше 80x80px для адекватной
                        отрисовки
                      </p>
                      <div className="settings-profile__download">
                        <input type="file" name="avatar" />
                      </div>
                    </div>
                    <div className="settings-profile__body-settings">
                      <h3 className="settings-profile__title">Сменить скин</h3>
                      <p className="settings-profile__description">
                        Абсолютно всем доступны все виды скинов для установки!
                      </p>
                      <div className="settings-profile__download">
                        <input type="file" name="avatar" />
                      </div>
                    </div>
                  </div>
                  <div className="settings-profile__body-btn">
                    <ButtonSend
                      className="settings-profile__btn"
                      text="Сохранить"
                    />
                  </div>
                </div>
              </form>
          </div>
        </section>
      </main>
    );
  }
}
