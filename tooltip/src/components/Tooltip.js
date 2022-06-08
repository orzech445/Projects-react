import React from "react";
import TooltipItem from "./TooltipItem";
import TooltipItemGreen from "./TooltipItemGreen";
import TooltipItemBlue from "./TooltipItemBlue";
import TooltipItemYellow from "./TooltipItemYellow";

class Tooltip extends React.Component {
    render() {
        const squareItem = <TooltipItem />
        
        return (
        <div>
            <div className="squares">
                <div className="red">{squareItem}</div>
                <div className="green">{squareItem}</div>
                <div className="blue">{squareItem}</div>
            </div>
        </div>
        )
    }   
}

export default Tooltip