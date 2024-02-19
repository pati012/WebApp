import React from "react";
import "./Social.css";
import vk from "../../../assets/images/vk.svg";
import telegram from "../../../assets/images/telegram.svg";
import discord from "../../../assets/images/discord.svg";

export default function Social() {
  return (
    <ul className="social">
      <li className="social__text">
        Расскажите друзьям о наших серверах в соцсетях:
      </li>
      <li className='social__body'>
        <li className="social__item social-vk">
          <a href="#">
            <img className="social__icon" src={vk} alt="" />
          </a>
        </li>
        <li className="social__item social-telegram">
          <a href="#">
            <img className="social__icon" src={telegram} alt="" />
          </a>
        </li>
        <li className="social__item social-discord">
          <a href="#">
            <img className="social__icon" src={discord} alt="" />
          </a>
        </li>
      </li>
    </ul>
  );
}
