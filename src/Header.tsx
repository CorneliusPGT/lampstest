import React from "react";
import "./Header.css";
import "./Group.png";

export const Header = () => {
    return <header className="container">
        <div className="left-side">
            <div className="logo"><img src={require("./Group.png")} alt="" />
                <p>TOXIN</p>
            </div>
        </div>
        
        <div className="right-side">
            <ul>
                <li>О нас</li>
                <li>Услуги</li>
                <li>Вакансии</li>
                <li>Новости</li>
                <li>Соглашения</li>
            </ul>
            <div className="login">
                <button>войти</button>
                <button>зарегистироваться</button>
            </div>
        </div>
    </header>
}

export default Header