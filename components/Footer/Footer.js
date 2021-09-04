export default function Footer(props) {
    return (
        <footer className={'footer'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-9'}>
                        <div className={'row'}>
                            <div className={'col-md-4'}>
                                <div className="footer__links">
                                    <span className="footer__column-title">
                                        Get Help
                                    </span>
                                    <a href="#" className="footer__link">Link</a>
                                    <a href="#" className="footer__link">Link</a>
                                    <a href="#" className="footer__link">Link</a>
                                </div>
                            </div>
                            <div className={'col-md-4'}>
                                <div className="footer__links">
                                    <span className="footer__column-title">
                                        Get Help
                                    </span>
                                    <a href="#" className="footer__link">Link</a>
                                    <a href="#" className="footer__link">Link</a>
                                    <a href="#" className="footer__link">Link</a>
                                </div>
                            </div>
                            <div className={'col-md-4'}>
                                <div className="footer__links">
                                    <span className="footer__column-title">
                                        Get Help
                                    </span>
                                    <a href="#" className="footer__link">Link</a>
                                    <a href="#" className="footer__link">Link</a>
                                    <a href="#" className="footer__link">Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-md-3'}>
                        <div className="footer__extra">
                            <span className="footer__column-title">Sign Up for Newsletter</span>
                            <input type="text" name="email_newsletter" className="footer__input" 
                            placeholder="youremail@company.com"/>
                            <p>I{`'`}m baby intelligentsia green juice whatever before they sold out bicycle rights ethical. Photo booth sartorial pour-over keffiyeh fanny pack edison bulb. Vape leggings cliche, cronut subway tile mixtape wayfarers four loko pinterest jianbing deep v migas. Humblebrag wolf squid next level tote bag hella kinfolk post-ironic. Quinoa before they sold out shoreditch blue bottle paleo hammock pork belly disrupt bicycle rights PBRB sustainable venmo. Everyday carry kickstarter vexillologist jianbing, mustache scenester pop-up tousled chillwave coloring book kinfolk.</p>
                            <div className="footer__social-icons">
                                <a href="#" className="footer__social-link">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="footer__social-link">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="footer__social-link">
                                    <i className="fab fa-youtube"></i>
                                </a>

                                <a href="#" className="footer__social-link">
                                    <i className="fab fa-tiktok"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer__bottom">
                            <div className="footer__copyright">
                            &copy; 2021 Company, LLC All Rights Reserved
                            </div>
                            <div className="footer__extra-links">
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}