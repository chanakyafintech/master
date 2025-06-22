import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Testimonialimg01 from '../../../assets/images/background/testimonial-three-bg.jpg';
import Testimonialimg02 from '../../../assets/images/testimonial/testimonial-1.png';
import Testimonialimg03 from '../../../assets/images/testimonial/testimonial-2.png';
import Testimonialimg04 from '../../../assets/images/testimonial/testimonial-3.png';
import Testimonialimg05 from '../../../assets/images/testimonial/testimonial-4.png';

const TestimonialThree = () => {
    const settings = {
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: (
            <button type="button" className="slick-prev">
                <i className="flaticon-arrow-right" />
            </button>
        ),
        nextArrow: (
            <button type="button" className="slick-next">
                <i className="flaticon-arrow-right" />
            </button>
        ),
    }

    useEffect(() => {
        const handleScroll = () => {
            const elementsToAnimate = document.querySelectorAll(
                '.why-choose-one-image img, .banner-three-video img, .testimonial-three .testimonial-three-background-image, .why-choose-one-image-2 img'
            );
            elementsToAnimate.forEach((element) => {
                let winPos = window.pageYOffset;
                let targetPos = winPos * 0.05;
                element.style.transition = 'transform 0.8s ease-out';
                element.style.transform = `translateY(${targetPos}px) scale(1.2)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })
    return (
        <div className="testimonial-three">
            <div className="testimonial-three-background-image">
                <img src={Testimonialimg01} alt="background" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-8 col-md-12 ms-auto">
                        <div className="testimonial-three-block">
                            <div className="heading-box">
                                <h2 className="heading-title wow fadeInUp animated">
                                    What Our Customers Say?
                                </h2>
                            </div>
                            <Slider className="testimonial-slider-three" {...settings}>
                                {[{
                                    img: Testimonialimg02,
                                    name: 'John Miller'
                                },
                                {
                                    img: Testimonialimg03,
                                    name: 'Sarah Thompson'
                                },
                                {
                                    img: Testimonialimg04,
                                    name: 'Brian Clark'
                                },
                                {
                                    img: Testimonialimg05,
                                    name: 'Megan Scott'
                                }
                                ]
                                .map((testimonial, index) => (
                                    <div key={index} className="testimonial-three-item">
                                        <p>
                                            Signing the agreement and completing the documentation with
                                            ApexFunding was seamless and straightforward. Their team guided
                                            me through every step, ensuring I understood all the details. I
                                            felt confident and well-informed throughout the entire process.
                                        </p>
                                        <div className="testimonial-three-details-inner">
                                            <div className="testimonial-three-details">
                                                <img src={testimonial.img} alt={testimonial.name} />
                                                <div className="testimonial-member-details">
                                                    <h5>{testimonial.name}</h5>
                                                    <p>Satisfied Client</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TestimonialThree;
