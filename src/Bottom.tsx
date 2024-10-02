export const Bottom = () => {
    return <div className="container bottom">
        <div className="bottom-side">
            <div className="logo"><img src={require("./Group.png")} alt="" />
                <div>TOXIN</div>
            </div>
            <p className="">Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»</p>
        </div>
        <div className="bottom-side"><nav>
            <h3>НАВИГАЦИЯ</h3>
            <ul>
                <li>О нас</li>
                <li>Новости</li>
                <li>Служба поддержки</li>
                <li>Услуги</li>
            </ul>
        </nav></div>
        <div className="bottom-side"><nav>
            <h3>О НАС</h3>
            <ul>
                <li>О сервисе</li>
                <li>Наша команда</li>
                <li>Вакансии</li>
                <li>Инвесторы</li>
            </ul>
        </nav></div>
        <div className="bottom-side"><nav>
            <h3>СЛУЖБА поддержки</h3>
            <ul>
                <li>Соглашения</li>
                <li>Сообщества</li>
                <li>Связь с нами</li>
            </ul>
        </nav></div>
        <div className="bottom-side"><nav>
            <h3>ПОДПИСКА</h3>
            <div style={{ marginBottom: "20px" }}>Получайте специальные предложения и новости сервиса</div>
            <span className="span"><input type="text" placeholder="Email"></input></span>
        </nav></div>
    </div>
}