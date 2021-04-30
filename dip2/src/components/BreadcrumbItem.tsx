import React from 'react';

function BreadcrumbItem(props:any) {
    return (
        <>
            <div className="breadcrumb-area section-padding-2 breadcrumb-ptb-2">
                <div className="container-fluid">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <a href="index.html">Shop </a>
                            </li>
                            <li><span> {`>`} </span></li>
                            <li>
                                <a href="index.html">Headphones</a>
                            </li>
                            <li><span> {`>`} </span></li>
                            <li className="active"> Noise Cancelling Headphones</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BreadcrumbItem;
