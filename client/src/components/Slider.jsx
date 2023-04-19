import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Slider = () => {
    const slides = [
        {
            url: 'https://lifeimg.pravda.com/images/doc/b/0/b0b7ba6-sport-home.jpg',
        },
        {
            url: 'https://deztop.net/wp-content/uploads/2018/10/%D1%84%D1%96%D1%82%D0%BD%D0%B5%D1%81-%D0%B2%D0%B4%D0%BE%D0%BC%D0%B0.jpg',
        },
        {
            url: 'https://pic.sport.ua/images/media/orig/00/22167.png',
        },

        {
            url: 'https://cdn.create.vista.com/api/media/small/402719182/stock-photo-cropped-view-fit-sportswoman-holding',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='h-[780px] w-full m-auto px-4 relative group bg-white'>
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group bg-white'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default Slider