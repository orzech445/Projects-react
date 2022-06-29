import React from "react";
import TooltipItem from "./TooltipItem";
import TooltipItemGreen from "./TooltipItemGreen";
import TooltipItemBlue from "./TooltipItemBlue";
import TooltipItemYellow from "./TooltipItemYellow";

class Tooltip extends React.Component {
    showTooltip() {
        console.log("showTooltip")

        const spanEl = document.createElement("span")
        spanEl.className = "tooltip"
        document.body.appendChild(spanEl)
    }

    render() {
        const boxItem = <
            TooltipItem 
            showTooltip={this.showTooltip.bind(this)}
            />
        
        return (
        <div>
            <div className="boxes">
                <div className="red">{boxItem}</div>
                <div className="green">{boxItem}</div>
                <div className="blue">{boxItem}</div>
            </div>
        </div>
        )
    }   
}

export default Tooltip