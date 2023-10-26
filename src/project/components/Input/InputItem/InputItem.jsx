function InputItem({iKey}) {
    return ( 
    <>
        <li className="home-sec3__item" key={`${iKey}`}>
            <input type="number" name={`price${iKey}`} className="home-sec3__item__price" placeholder="00,000.00" min="1" max="9"/>
            <span className="home-sec3__item__name__wrapper">
                <input type="text" name={`itemname${iKey}`} className="home-sec3__item__name" placeholder="Item name"/>
            </span>
            <button className="home-sec3__item__btn home-sec3__item__btn__remove"></button>
        </li>
    </> );
}

export default InputItem;