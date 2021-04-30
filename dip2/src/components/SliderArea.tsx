import React from 'react';

const SliderArea = () => {
    return (
        <>
            <div className="slider-area">
                <div className="container-fluid p-0">
                    <div
                        className="main-slider-active-1 owl-carousel slider-nav-position-2 slider-nav-style-2 owl-loaded owl-drag">


                        <div className="owl-stage-outer"></div>
                        <div className="owl-nav">
                            <div className="owl-prev"><i className="lnr lnr-arrow-left"></i></div>
                            <div className="owl-next"><i className="lnr lnr-arrow-right"></i></div>
                        </div>
                        <div className="owl-dots">
                            <div className="owl-dot active"><span></span></div>
                            <div className="owl-dot"><span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SliderArea;
