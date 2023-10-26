import classNames from "classnames";

function ButtonPrimary({text, className}) {
    
    return ( 
        <div className="button-primary">
            <button className={classNames("button-primary__btn", className)}>{text}</button>
        </div>
     );
}

export default ButtonPrimary;
