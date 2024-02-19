import React from "react";
import "./TeamProject.css";
import imageMain from "../../assets/images/teamProject-image-main.jpg";
import { useEffect, useContext } from "react";
import { UsersData } from "../../contexts/users";
import { urlBd } from "../../configs/urls";
import testImage from "../../assets/images/1231.jpg";

export default function TeamProject(props) {
  const dataUsers = useContext(UsersData);

  const getDataUsers = dataUsers[2];

  const arrayTeamProject = [];

  const servers = ["TechnoMagic #1"];

  for (let i = 0; i < getDataUsers.length; i++) {
    if (getDataUsers[i].identifier >= 8) {
      arrayTeamProject.push(getDataUsers[i]);
    }
  }

  arrayTeamProject.sort((a, b) => b.identifier - a.identifier);

  const getUsers = dataUsers[0];

  useEffect(() => {
    const dataForm = new FormData();
    dataForm.append("status", true);
    getUsers(urlBd, dataForm);
  }, []);

  console.log(arrayTeamProject);

  return (
    <main className="page">
      <section className="team-project">
        <div className="team-project__body">
          <img src={imageMain} alt="image" />
          <div className="team-project__body-info">
            <h1 className="team-project__title">Команда проекта</h1>
            <p className="team-project__subtitle">
              Здесь вы можете посмотреть к кому обращаться в случаи чего
            </p>
          </div>
        </div>
        <div className="team-project__content">
          <ul className="team-project__list">
            <li className="team-project__section-name">
              Техническая администрация
            </li>
            <li className="team-project__body-item">
              {arrayTeamProject.map((item, index) => {
                if (item.status === "Разработчик") {
                  return (
                    <li key={index} className="team-project__item">
                      <div className="team-project__icon">
                        <img src={testImage} alt="" />
                      </div>
                      <div className="team-project__info">
                        <p className="team-project__name">{item.name}</p>
                        <p className="team-project__status">{item.status}</p>
                      </div>
                    </li>
                  );
                }
              })}
            </li>
          </ul>
          <section className="team-project__team">
            <h2 className="team-project__section-name">
              {" "}
              Внутриигровая администрация
            </h2>
            <ul className="team-project__lists">
              {servers.map((itemList) => {
                return (
                  <li className="team-project__wrapper-item">
                    <div className="team-project__sarver-name">{itemList}</div>
                    <ul className="team-project__body-item">
                      {arrayTeamProject.map((item, index) => {
                        if (
                          item.status != "Разработчик" &&
                          item.server === itemList
                        ) {
                          return (
                            <li key={index} className="team-project__item">
                              <div className="team-project__icon">
                                <img src={testImage} alt="" />
                              </div>
                              <div className="team-project__info">
                                <p className="team-project__name">
                                  {item.name}
                                </p>
                                <p className="team-project__status">
                                  {item.status}
                                </p>
                              </div>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
