import React, { useState } from "react"
import './Main.css'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";


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


export const Main = () => {

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
    return (<main>
        <div className="middle">

            <div className="calendar container">
                <div className="calendar-card">
                    <h2>Найдём номера под ваши пожелания</h2>
                    <div className="calendar-inside">
                        <div className="card">
                            <h3>Прибытие</h3>
                            <div className="date-picker" onClick={() => { setActive(!isActive) }}>{dates.arriving === null ? 'ДД.ММ.ГГГГ' : dates.arriving.toLocaleDateString("ru-RU")} <IoIosArrowDown></IoIosArrowDown></div>
                            <div>  {isActive && <Calendar className="calendar-picker" onChange={handleDateChange} selectRange={true} value={dateN}></Calendar>}</div>
                        </div>
                        <div className="card">
                            <h3>Выезд</h3>
                            <div className="date-picker" onClick={() => { setActive(!isActive) }}>{dates.departure === null ? 'ДД.ММ.ГГГГ' : dates.departure.toLocaleDateString("ru-RU")} <IoIosArrowDown></IoIosArrowDown></div>
                        </div>
                        <div className="card">
                            <div className="card-guest">
                                <h3>Гости</h3>
                                <div
                                    onClick={() => { setActiveM(!isActiveM) }}
                                    className={isActiveM ? `guest-picker active` : 'guest-picker'}>
                                    {guests.adults + guests.children + guests.littles > 0
                                        ? `${guests.adults + guests.children + guests.littles}`
                                        : 'Сколько гостей'}
                                    <IoIosArrowDown />
                                </div>
                                {isActiveM && <div className="guest-panel">
                                    <div className="guest-single">
                                        <h3>ВЗРОСЛЫЕ</h3>
                                        <div className="single-inside">
                                            <button onClick={() => handleGuestChange('-', 'adults')} className="guest-buttons">-</button>
                                            <span>{guests.adults}</span>
                                            <button onClick={() => handleGuestChange('+', 'adults')} className="guest-buttons">+</button>
                                        </div>
                                    </div>
                                    <div className="guest-single">
                                        <h3>ДЕТИ</h3>
                                        <div className="single-inside">
                                            <button onClick={() => handleGuestChange('-', 'children')} className="guest-buttons">-</button>
                                            <span>{guests.children}</span>
                                            <button onClick={() => handleGuestChange('+', 'children')} className="guest-buttons">+</button>
                                        </div>
                                    </div>
                                    <div className="guest-single">
                                        <h3>МЛАДЕНЦЫ</h3>
                                        <div className="single-inside">
                                            <button onClick={() => handleGuestChange('-', 'littles')} className="guest-buttons">-</button>
                                            <span>{guests.littles}</span>
                                            <button onClick={() => handleGuestChange('+', 'littles')} className="guest-buttons">+</button>
                                        </div>
                                    </div>
                                    <div className="guest-sets">
                                        <button onClick={hadleClearing}><h3>ОЧИСТИТЬ</h3></button>
                                        <button onClick={() => setActiveM(!isActiveM)}><h3>ПРИМЕНИТЬ</h3></button>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <button className="button"><a href="/main">Подобрать номер</a></button>
                </div>
                <div className="bottom-text">Лучшие номера для вашей работы,<br /> отдыха и просто вдохновения</div>
            </div>
        </div>
        
    </main>
    )
}