import React from 'react';

const SubscribeComp = () => {
    return (
        <>
            <div className="subscribe-area bg-black pt-70 pb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="subscribe-title">
                                <h3>Stay in touch</h3>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div id="mc_embed_signup" className="subscribe-form subscribe-mrg-1">
                                <form id="mc-embedded-subscribe-form" className="validate subscribe-form-style"
                                      noValidate target="_blank" name="mc-embedded-subscribe-form" method="post"
                                      action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef">
                                    <div id="mc_embed_signup_scroll" className="mc-form">
                                        <input className="email" type="email"
                                               placeholder="Enter your email address..." name="EMAIL" value="" />
                                            <div className="mc-news" aria-hidden="true">
                                                <input type="text" value=""
                                                       name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                                            </div>
                                            <div className="clear">
                                                <input id="mc-embedded-subscribe" className="button" type="submit"
                                                       name="subscribe" value="Subscribe" />
                                            </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscribeComp;
