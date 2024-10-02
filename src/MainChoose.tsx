import Calendar from 'react-calendar'
import './MainChoose.css'
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Range from 'rc-slider';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ReactSlider from 'react-slider';

export const MainChoose = () => {

    type Guests = {
        adults: number,
        children: number,
        littles: number
    }
    type ValuePiece = Date | null;

    type Value = ValuePiece | [ValuePiece, ValuePiece];

    type Dates = {
        arriving: Date | null,
        departure: Date | null,
    }


    const [range, setRange] = useState<[number, number]>([5000, 10000])
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

    const handleSlider = (value: [number, number]) => {

        setRange(value)

    }

    const hadleClearing = () => {
        setGuests({ adults: 0, children: 0, littles: 0 })
    }
    return <div className="choose container">
        <div className='sidebar'>
            <div className='card'>
                <div className="date" >
                    <h3>Даты пребывания</h3>
                    <div className="date-picker" onClick={() => { setActive(!isActive) }}>{dates.arriving === null ? 'ДД.ММ.ГГГГ' : dates.arriving.toLocaleDateString("ru-RU")} <IoIosArrowDown></IoIosArrowDown></div>
                    <div>  {isActive && <Calendar className="calendar-picker" onChange={handleDateChange} selectRange={true} value={dateN}></Calendar>}</div>
                </div>
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
            <div className="card">
                <div className='top'>
                    <h3>Диапазон цены</h3>
                    <div className="prices">safasf</div>
                </div>

                <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    defaultValue={[0, 100]}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    pearling
                    minDistance={10}
                />
            </div>
            <div className="card">
                <h3>правила дома</h3>
                <form className='rules'>
                    <input id="smoke" type="checkbox" name="rule" />
                    <label htmlFor="smoke">Можно курить</label>
                    <input id="pets" type="checkbox" name="rule" />
                    <label htmlFor="pets">Можно с питомцами</label>
                    <input id="guests" type="checkbox" name="rule" />
                    <label htmlFor="guests">Можно пригласить гостей</label>
                </form>
            </div>
        </div>
        <div className="bot-side">
            <div>
                <h1>Номера, которые мы для вас подобрали</h1>
            </div>
            <div className='f-cards'>
                <div className="single-card">
                    <img src={require('./hata.png')} alt="" />
                    <div className='fcard-inside'>
                        <h2>№888</h2>
                        <p>9990 в сутки</p>
                    </div>
                    <div className='fcard-bottom'></div>
                </div>
                <div className="single-card">
                    <img src={require('./hata.png')} alt="" />
                    <div className='fcard-inside'>
                        <h2>№888</h2>
                        <p>9990 в сутки</p>
                    </div>
                    <div className='fcard-bottom'></div>
                </div>
                <div className="single-card">
                    <img src={require('./hata.png')} alt="" />
                    <div className='fcard-inside'>
                        <h2>№888</h2>
                        <p>9990 в сутки</p>
                    </div>
                    <div className='fcard-bottom'></div>
                </div>
                <div className="single-card">
                    <img src={require('./hata.png')} alt="" />
                    <div className='fcard-inside'>
                        <h2>№888</h2>
                        <p>9990 в сутки</p>
                    </div>
                    <div className='fcard-bottom'></div>
                </div>
            </div>
        </div>
    </div>
}