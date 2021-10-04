import React from "react";

const Input = (props) => {
    return (
        <div className="field">
            <div className="control">
                <input name={props.Name} value={props.Value} onChange={(event) => props.stateProduct(event)} className="input" type={props.Type} placeholder={props.Placeholder} />
            </div>
        </div>
    )
}

export default Input;