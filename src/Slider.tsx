import React from 'react';



type SliderVals = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default class Slider extends React.Component<SliderVals> {

    render() {
        return (
            <div className="slider-container" style={{ color: "black", direction: "rtl" }}>
                <div className="slider-buttons-container">
                    <div className="slider-left-header">
                        <h6>Fast</h6>
                    </div>
                    <input type="range" min={0.01} max={2} step={0.01} className="slider" onChange={this.props.onChange} />
                    <div className="slider-right-header">
                        <h6>Slow</h6>
                    </div>
                </div>
            </div>
        );
    };
};