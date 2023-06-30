import React from 'react';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';
import './Carousel.css';
import lolla from "../img/Lolla 1.png";
import stars from "../img/stars.png";

const ReviewCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ]

    };

    return (
        <div className="carouselInfo">
            <div className="carouselTitle-container">
                <h1 className="carouselTitle">Review from customers</h1>
                <p className="para">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry
                </p>
            </div>

            <div className="mainCarousel">
                <Carousel {...settings}>
                    <div className="carousel-Box">
                        <Box className="Box" sx={{ p: 2 }}>
                            <div className='main-content'>
                                <div className='review'>
                                    <img src={lolla} alt="Review 1" />
                                    <div className='inner-content'>
                                        <Typography variant="h6">Lolla Smith</Typography>
                                        <Typography variant="h6">Microsoft</Typography>
                                        <img src={stars} alt="Review 1" />
                                    </div>
                                </div>
                                <Typography
                                    style={{
                                        fontSize: '12px',
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word',
                                        width: "369px",
                                        height: "72px",
                                        marginTop: "3em",
                                    }}
                                    variant="body1"
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make
                                </Typography>

                            </div>

                        </Box>
                    </div>
                    <div className="carousel-Box">
                        <Box className="Box" sx={{ p: 2 }}>
                            <div className='main-content'>
                                <div className='review'>
                                    <img src={lolla} alt="Review 1" />
                                    <div className='inner-content'>
                                        <Typography variant="h6">Lolla Smith</Typography>
                                        <Typography variant="h6">Microsoft</Typography>
                                        <img src={stars} alt="Review 1" />
                                    </div>
                                </div>
                                <Typography
                                    style={{
                                        fontSize: '12px',
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word',
                                        width: "369px",
                                        height: "72px",
                                        marginTop: "3em",
                                    }}
                                    variant="body1"
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make
                                </Typography>

                            </div>

                        </Box>
                    </div>
                    <div className="carousel-Box">
                        <Box className="Box" sx={{ p: 2 }}>
                            <div className='main-content'>
                                <div className='review'>
                                    <img src={lolla} alt="Review 1" />
                                    <div className='inner-content'>
                                        <Typography variant="h6">Lolla Smith</Typography>
                                        <Typography variant="h6">Microsoft</Typography>
                                        <img src={stars} alt="Review 1" />
                                    </div>
                                </div>
                                <Typography
                                    style={{
                                        fontSize: '12px',
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word',
                                        width: "369px",
                                        height: "72px",
                                        marginTop: "3em",
                                    }}
                                    variant="body1"
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make
                                </Typography>

                            </div>

                        </Box>
                    </div>
                    <div className="carousel-Box">
                        <Box className="Box" sx={{ p: 2 }}>
                            <div className='main-content'>
                                <div className='review'>
                                    <img src={lolla} alt="Review 1" />
                                    <div className='inner-content'>
                                        <Typography variant="h6">Lolla Smith</Typography>
                                        <Typography variant="h6">Microsoft</Typography>
                                        <img src={stars} alt="Review 1" />
                                    </div>
                                </div>
                                <Typography
                                    style={{
                                        fontSize: '12px',
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word',
                                        width: "369px",
                                        height: "72px",
                                        marginTop: "3em",
                                    }}
                                    variant="body1"
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make
                                </Typography>

                            </div>

                        </Box>
                    </div>
                    <div className="carousel-Box">
                        <Box className="Box" sx={{ p: 2 }}>
                            <div className='main-content'>
                                <div className='review'>
                                    <img src={lolla} alt="Review 1" />
                                    <div className='inner-content'>
                                        <Typography variant="h6">Lolla Smith</Typography>
                                        <Typography variant="h6">Microsoft</Typography>
                                        <img src={stars} alt="Review 1" />
                                    </div>
                                </div>
                                <Typography
                                    style={{
                                        fontSize: '12px',
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word',
                                        width: "369px",
                                        height: "72px",
                                        marginTop: "3em",
                                    }}
                                    variant="body1"
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make
                                </Typography>

                            </div>

                        </Box>
                    </div>
                    <div className="carousel-Box">
                        <Box className="Box" sx={{ p: 2 }}>
                            <div className='main-content'>
                                <div className='review'>
                                    <img src={lolla} alt="Review 1" />
                                    <div className='inner-content'>
                                        <Typography variant="h6">Lolla Smith</Typography>
                                        <Typography variant="h6">Microsoft</Typography>
                                        <img src={stars} alt="Review 1" />
                                    </div>
                                </div>
                                <Typography
                                    style={{
                                        fontSize: '12px',
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word',
                                        width: "369px",
                                        height: "72px",
                                        marginTop: "3em",
                                    }}
                                    variant="body1"
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make
                                </Typography>

                            </div>

                        </Box>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default ReviewCarousel;
