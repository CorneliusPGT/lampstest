import React, { useState } from "react"
import 'react-calendar/dist/Calendar.css';
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

import './Room.css'
import Calendar from 'react-calendar';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Dates = {
    arriving: Date | null,
    departure: Date | null,
}

type Guests = {
    adults: number,
    children: number,
    littles: number
}


export const Room = () => {
    const [dateN, onChange] = useState<Value>(new Date());
    const [dates, setDates] = useState<Dates>({
        arriving: null,
        departure: null,
    });
    const [isActive, setActive] = useState<boolean>(false)
    const [isActiveM, setActiveM] = useState<boolean>(false)
    const [guests, setGuests] = useState<Guests>({ adults: 0, children: 0, littles: 0 })
    

    const handleDateChange = (value: Value) => {
        onChange(value)
        if (Array.isArray(value)) {
            const [arriving, departure] = value;
            setDates({ arriving, departure });
        } else {
            setDates({ arriving: value, departure: null });
        }
    }

    const handleGuestChange = (action: '+' | '-', guest: 'adults' | 'children' | 'littles') => {

        if (action === '+') {
            setGuests(prev => ({ ...prev, [guest]: prev[guest] + 1 }));
        } else if (action === '-') {
            setGuests(prev => ({ ...prev, [guest]: Math.max(prev[guest] - 1, 0) }));
        }
    }

    const hadleClearing = () => {
        setGuests({ adults: 0, children: 0, littles: 0 })
    }
    return <div>
        <div className="pictures">
            <img src={require('../hata.png')} className='big-pics' alt="" />
            <div className='small-pics'>
                <img src={require('../image 2.png')} alt="" /><img src={require('../image 3.png')} alt="" />
            </div>
        </div>
        <main className="container two">
            <div className='left-side'>
                <div className="top">
                    <div className="details">
                        <h1>Сведения о номере</h1>
                        <div className="detail">
                            <img src={require('../insert_emoticon.png')} alt="" />
                            <div className="detail-inside">
                                <h4>Комфорт</h4>
                                <p>Шумопоглощающие стены</p>
                            </div>
                        </div>
                        <div className="detail">
                            <img src={require('../location_city.png')} alt="" />
                            <div className="detail-inside">
                                <h4>Комфорт</h4>
                                <p>Шумопоглощающие стены</p>
                            </div>
                        </div>
                        <div className="detail">
                            <img src={require('../whatshot.png')} alt="" />
                            <div className="detail-inside">
                                <h4>Комфорт</h4>
                                <p>Шумопоглощающие стены</p>
                            </div>
                        </div>
                    </div>
                    <div className='rating'>
                        <h1>Впечатления от номера</h1>
                        <canvas id="ratingChart" width="300" height="300"></canvas>
                    </div>
                </div>
                <div className="mid">
                    <div >
                        <h1>Отзывы посетителей</h1>
                        <span>2 отзыва</span>
                    </div>
                    <div className="detail">
                        <div className='review-logo'>
                            <img src={require('../insert_emoticon.png')} alt="" />
                            <span>12</span>
                        </div>
                        <div className="detail-inside">
                            <h4>Мурад Сарафанов</h4>
                            <span>5 дней назад</span>
                            <p>Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.</p>
                        </div>
                    </div>
                    <div className="detail">
                        <div className='review-logo'>
                            <img src={require('../insert_emoticon.png')} alt="" />
                            <span>2</span>
                        </div>
                        <div className="detail-inside">
                            <h4>Патрисия Стёклышкова</h4>
                            <span>Неделю назад</span>
                            <p>Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент</p>
                        </div>
                    </div>

                </div>
                <div className="bot">
                    <div className="rules">
                        <h1>Правила</h1>
                        <ul>
                            <li>Нельзя с питомцами</li>
                            <li>Без вечеринок и мероприятий</li>
                            <li>Время прибытия — после 13:00, а выезд до 12:00</li>
                        </ul>
                    </div>
                    <div className="cancel">
                        <h1>Отмена</h1>
                        <p>Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.</p>
                    </div>
                </div>
            </div>
            <div className="right-side-room">
                <div className="brone">
                    <div className="title">
                        <h3>№888</h3>
                        <p>9990$</p>
                    </div>
                    <div className="dates">
                        <div className="card">
                            <h3>Прибытие</h3>
                            <div className="date-picker" onClick={() => { setActive(!isActive) }}>{dates.arriving === null ? 'ДД.ММ.ГГГГ' : dates.arriving.toLocaleDateString("ru-RU")} <IoIosArrowDown></IoIosArrowDown></div>
                            <div>  {isActive && <Calendar className="calendar-picker" onChange={handleDateChange} selectRange={true} value={dateN}></Calendar>}</div>
                        </div>
                        <div className="card">
                            <h3>Выезд</h3>
                            <div className="date-picker" onClick={() => { setActive(!isActive) }}>{dates.departure === null ? 'ДД.ММ.ГГГГ' : dates.departure.toLocaleDateString("ru-RU")} <IoIosArrowDown></IoIosArrowDown></div>
                        </div>
                    </div>
                    <div>
                        <h3>Гости</h3>
                        <div
                            onClick={() => { setActiveM(!isActiveM) }}
                            className={isActiveM ? `guest-picker active` : 'guest-picker'}>
                            {guests.adults + guests.children + guests.littles > 0
                                ? `${guests.adults + guests.children + guests.littles}`
                                : 'Сколько гостей'}
                            <IoIosArrowDown />
                        </div>

                    </div>
                    <div>
                        <div className="title">
                            <p>9 990₽ х 4 суток</p>
                            <p>39 960₽</p>
                        </div>
                        <div className="title">
                            <p>Сбор за услуги: скидка 2 179₽</p>
                            <p>0₽</p>
                        </div>
                        <div className="title">
                            <p>Сбор за дополнительные услуги</p>
                            <p>300₽</p>
                        </div>
                        <div className="overall">
                            <h2>Итого</h2>
                            <h2>38 081₽</h2>
                        </div>
                        <button className="button"><a href="/main">Подобрать номер</a></button>
                    </div>
                </div>
            </div>
        </main>
    </div>
}