import React from "react";
import "./GoGame.css";
import imageMain from "../../assets/images/game-start-image-main.png";
import Point from "../../components/ui/point/Point.jsx";
import ButtonNav from "../../components/ui/button/ButtonNav.jsx";
import { NavLink } from "react-router-dom";
import Social from "../../components/ui/social/Social.jsx";

export default function GoGame(props) {
    let { } = props;
    return (
        <main className="page">
            <section className='go-game'>
            <div className="go-game__image">
                <img src={imageMain} alt="" />
            </div>
            <div className="go-game__content">
                <p className="go-game__description">
                    Добро пожаловать! Данный проект ещё свежый, но имеет огромную
                    перспективу между крупными проектами, так как наша Команда очень
                    старательно трудится днями и ночами. Заради чего? Чтобы наши игроки
                    чуствовали себя как частью чего-то масштабного, чтобы наши игроки
                    имели возможность качественно и главное с наслаждением играли на нашем
                    проекте. Кто знает? Может именно ты станешь частью чего-то
                    масштабного...
                </p>
                <ul className='go-game__lists'>
                    <li className='go-game__item'>
                        <Point className='go-game__point' text='1' width='120' height='120' size='46'/>
                        <div className="go-game__register">
                            <p className='go-game__text' >Зарегистрируйте аккаунт</p>
                            <ButtonNav className='go-game__btn' path='/' text='Зарегистрируваться' background='#80bd9e' />
                        </div>
                    </li>
                    <li className='go-game__item'>
                        <Point className='go-game__point' text='2' width='120' height='120' size='46'/>
                        <div className="go-game__register">
                            <p className='go-game__text'>Скачайте лаунчер</p>
                             <ButtonNav className='go-game__btn' path='/' text='Скачать лаунчер' background='#80bd9e' />
                        </div>
                    </li>
                </ul>
                <Social />
            </div>
            </section>
        </main>
    );
}
