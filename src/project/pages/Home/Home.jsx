import { useState } from "react";
import ButtonPrimary from "../../Components/buttons/ButtonPrimary";
import InputItem from "../../Components/Input/InputItem/InputItem";


let items = [0];
let itemID = 1;
const itemInit = 1;


function Home() {
    const [item, itemCount] = useState(1);

    const addClick = () => {
        itemCount(item + 1);
    } 

    return (
        <div className="home">
            <div className="layout">
                <h1 className="home-h1">BUCK ME UP</h1>

                <div className="home-sec1">
                    <span className="home-sec1__head">TODAY</span>
                    <span className="home-sec1__total">P 123.45</span>
                    <ButtonPrimary text="VIEW DETAILS" className="home-sec1__view-details"/>
                </div>

                <div className="home-sec2">
                    <div className="home-sec2__cal">
                        <span className="home-sec2__cal__date">2023 SEPTEMBER 28</span>
                        <span className="home-sec2__cal__time">13:30:25</span>
                    </div>
                </div>

                <div className="home-sec3">
                    <div className="home-sec3__list__wrapper">
                        <ul className="home-sec3__list">
                            { Array(item).fill(true).map((i,k)=>{
                                return <InputItem iKey={k}/>;
                            })}
                        </ul>
                        <button className="home-sec3__item__btn home-sec3__item__btn__add" onClick={addClick}></button>
                    </div>
                    <ButtonPrimary text="ADD TO EXPENSES" className='home-sec3__btn home-sec3__btn__add' />
                    <ButtonPrimary text="VIEW CALENDAR" className='home-sec3__btn home-sec3__btn__view-cal' />
                </div>

                <span className="is-number">{}</span>

            </div>
        </div>
    );
}

export default Home;