import React from "react"

const TooltipItem = props => {
    const tooltipHandler = () => props.showTooltip(props.e)

    return (
        <div className="box" onClick={tooltipHandler}></div>
    )
}

export default TooltipItem