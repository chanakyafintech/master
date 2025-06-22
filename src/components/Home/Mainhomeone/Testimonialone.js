import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Test01 from '../../../assets/images/blog/blog-three-1.jpg';
import Test02 from '../../../assets/images/testimonial/testimonial-1.png';
import Test03 from '../../../assets/images/testimonial/testimonial-2.png';
import Test04 from '../../../assets/images/testimonial/testimonial-3.png';
import Test05 from '../../../assets/images/testimonial/testimonial-4.png';

const Testimonialone = () => {
    const [ytshow, setytshow] = useState(false);
    const Testimonialslider = {
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    }
    return (
        <>
            <section className="testimonial-one white-font">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-4 col-md-6 col-sm-10 col-12 ms-auto me-auto">
                            <div className="testimonial-video-one">
                                <img
                                    src={Test01}
                                    alt="testimonial-video-thamb"
                                />
                                <Link
                                    to="#"
                                    className="testimonial-video-btn-one" onClick={() => setytshow(true)}
                                >
                                    <i className="fa-solid fa-play" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 align-self-center">
                            <div className="testimonial-one-right">
                                <div className="heading-box heading-white">
                                    <span className="heading-subtitle wow fadeInUp animated animated">
                                        🤝 SUCCESS STORY
                                    </span>
                                    <h2 className="heading-title wow fadeInUp animated animated">
                                        Customer experiences with us
                                    </h2>
                                </div>
                                <Slider className="testimonial-slider-one" {...Testimonialslider}>
                                    <div className="testimonial-one-item">
                                        <p>
                                            Signing the agreement and completing the documentation with
                                            Loanlift was seamless and straightforward. Their team guided me
                                            through every step, ensuring I understood all the details. I
                                            felt confident and well-informed throughout the entire process.
                                        </p>
                                        <div className="testimonial-one-details-inner">
                                            <div className="testimonial-one-details">
                                                <img
                                                    src={Test02}
                                                    alt="Testimonial-image"
                                                />
                                                <div>
                                                    <h5 className="white-font">Michael Smith</h5>
                                                    <p className="white-font m-0">Satisfied Client</p>
                                                </div>
                                            </div>
                                            <i className="flaticon-quote-1" />
                                        </div>
                                    </div>
                                    <div className="testimonial-one-item">
                                        <p>
                                            The process with Loanlift was incredibly smooth. From signing
                                            the agreement to completing the documentation, their team made
                                            sure everything was clear and easy to follow. I felt supported
                                            every step of the way.Working with Loanlift was a breeze! Their
                                            expert guidance made the paperwork simple.
                                        </p>
                                        <div className="testimonial-one-details-inner">
                                            <div className="testimonial-one-details">
                                                <img
                                                    src={Test03}
                                                    alt="Testimonial-image"
                                                />
                                                <div>
                                                    <h5 className="white-font">Emily Martin</h5>
                                                    <p className="white-font m-0">Satisfied Client</p>
                                                </div>
                                            </div>
                                            <i className="flaticon-quote-1" />
                                        </div>
                                    </div>
                                    <div className="testimonial-one-item">
                                        <p>
                                            The agreement process with Loanlift was hassle-free and
                                            efficient. Their team ensured I understood every detail and made
                                            the documentation straightforward, giving me confidence
                                            throughout the entire journey, Loanlift’s team made the entire
                                            agreement and documentation process seamless.
                                        </p>
                                        <div className="testimonial-one-details-inner">
                                            <div className="testimonial-one-details">
                                                <img
                                                    src={Test04}
                                                    alt="Testimonial-image"
                                                />
                                                <div>
                                                    <h5 className="white-font">Brian Clark</h5>
                                                    <p className="white-font m-0">Satisfied Client</p>
                                                </div>
                                            </div>
                                            <i className="flaticon-quote-1" />
                                        </div>
                                    </div>
                                    <div className="testimonial-one-item">
                                        <p>
                                            Loanlift made the entire loan process incredibly easy. Their
                                            team walked me through every step, ensuring I understood all the
                                            terms. I felt completely confident and well-supported throughout
                                            the process, Loanlift made the entire loan process incredibly
                                            easy.
                                        </p>
                                        <div className="testimonial-one-details-inner">
                                            <div className="testimonial-one-details">
                                                <img
                                                    src={Test05}
                                                    alt="Testimonial-image"
                                                />
                                                <div>
                                                    <h5 className="white-font">Ashley Harris</h5>
                                                    <p className="white-font m-0">Satisfied Client</p>
                                                </div>
                                            </div>
                                            <i className="flaticon-quote-1" />
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {ytshow &&
            <div className="YouTubePopUp-Wrap">
                <div className="YouTubePopUp-Content">
                    <span className="YouTubePopUp-Close" onClick={() => setytshow(false)}/>
                    <iframe
                        src="https://www.youtube.com/embed/rzfmZC3kg3M?autoplay=1"
                        allowFullScreen="allowfullscreen"
                    />
                </div>
            </div>
        }
        </>
    )
}
export default Testimonialone;