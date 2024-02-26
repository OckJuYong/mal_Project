import Main from '../main/main'; // Main 컴포넌트를 올바르게 가져옴

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './slideMain.css';
import { logDOM } from '@testing-library/react';

const SlideMain = () => {
    const [height, setHeight] = useState(50); // 초기 높이값 설정
    const [image, setImage] = useState(null); // 이미지 파일 배열
    const [selectedSlide, setSelectedSlide] = useState(null); // 현재 선택된 슬라이드의 인덱스
    const [data, setData] = useState(null); // 슬라이드 데이터

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://10.181.141.23:8000/adminPage/sliders/1/slides/');
                setData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const handleHeightChange = (e) => {
        setHeight(parseInt(e.target.value)); // 슬라이더 값 변경
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };  // 이미지 추가하는 로직

    const handleSlideClick = (slideIndex) => {
        setSelectedSlide(slideIndex);
    };
    console.log(data);

    return (
        <>
            <div className='slider__main__container'>
                <div className='create__button__container'>
                    <button className='create__button__save'>Save</button>
                    <button className='create__button__cancel'>Cancel</button>
                </div>
                <div className='slider__name__header1'>
                    <div className='slider__name__header1__name'>Slider Name</div>
                    <input className='slider__name__header1__input'/>
                </div>
                <div className='slider__height__container'>
                    <div className='slider__height__name'>Height</div>
                    <div className='slider__height__inputInfo__container'>
                        <input className='slider__height__input' 
                            type="range" 
                            min="100" 
                            max="2000" 
                            step="1" 
                            value={height}
                            onChange={handleHeightChange} 
                        />
                        <div className='slider__height__check__container'>
                            <div className='slider__height__check'>{height}</div>
                            <span className='slider__height__px'>px</span>
                        </div>
                    </div>
                </div>
                <div className='body__main__container'>
                    <div className='body__main__1__container'>
                        <button className='add_slide_button'>Add Slides +</button>
                        {data && data.map((slide, index) => (
                            <div key={slide.id} className='slide__subMain__container'>
                                <span className={`slide_button_${index + 1}`} onClick={() => handleSlideClick(index + 1)}>{`Slide_0${index + 1}`}</span>
                                {selectedSlide === index + 1 && <div className={`slide_img_${index + 1}`}>🔺</div>}
                            </div>
                        ))}
                    </div>
                    {selectedSlide && (
    <div className='choice__body__container'>
        <div className='body__main__2__container'>
            <div className='body__main__img__title'>Background image</div>
            <input type='text' className='img_URL'/>

            <div className='img__upload__button__container'>
                <input
                    type="file"
                    onChange={handleImageChange}
                    className='main__img__upload__button'
                />
                <span className='main__img__upload__name'>Upload</span>
            </div>
            <div className='imsi_img_container'>
                {data && data.map((slide, index) => (
                    <div key={slide.id} style={{ display: selectedSlide === index ? 'block' : 'none' }}>
                        <img src={slide.image} alt={slide.caption} />
                        <h3>{slide.sloganHeading}</h3>
                        <p>{slide.caption}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className='body__main__3__container'>
            <div className='heading__container'>
                <div className='body__main__3__heading'>Slogan Heading</div>
                <input className='main__3__heading__input' value={selectedSlide ? data[selectedSlide - 1]?.sloganHeading : ''} readOnly />
            </div>
            <div className='caption__container'>
                <div className='body__main__3__caption'>Caption</div>
                <textarea className='main__3__caption__input' value={selectedSlide ? data[selectedSlide - 1]?.caption : ''} readOnly />
            </div>
        </div>
    </div>
)}
                </div>
            </div>
            <Main /> 

        </>
    )
}

export default SlideMain;
