import Main from '../main/main'; // Main 컴포넌트를 올바르게 가져옴

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './slideMain.css';
import { logDOM } from '@testing-library/react';

const SlideMain = () => {
    const [height, setHeight] = useState(100); // 초기 높이값 설정
    const [image, setImage] = useState(null); // 이미지 파일 배열
    const [selectedSlide, setSelectedSlide] = useState(null); // 현재 선택된 슬라이드의 인덱스
    const [data, setData] = useState(null); // 슬라이드 데이터
    const address = "http://10.181.140.110:8000/adminPage/sliders/1/slides/";
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get([address]);
                setData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const postData = async () => {
        try {
            const formData = new FormData();
            formData.append('image', image);
    
            const dataToSend = {
                caption: data[selectedSlide - 1].caption,
                order: selectedSlide,
                sloganHeading: data[selectedSlide - 1].sloganHeading
            };
    
            Object.keys(dataToSend).forEach((key) => {
                formData.append(key, dataToSend[key]);
            });
    
            const response = await axios.post(address, formData);
            console.log('POST Response:', response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleHeightChange = (e) => {
        setHeight(parseInt(e.target.value)); // 슬라이더 값 변경
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        // 이미지가 업데이트되면 데이터의 이미지 정보도 업데이트
        const newData = [...data];
        newData[selectedSlide - 1].image = file;
        setData(newData);
    };

    const handleSlideClick = (slideIndex) => {
        setSelectedSlide(slideIndex);
        setImage("");
    };

    const delButton = async (index) => {
        try {
            const response = await axios.delete(`${address}${index}/`);
            setData(response.data);
            navigate('/slideMain');
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const plusSlide = async () => {
        const newSlide = { image: '', caption: '', sloganHeading: '', order: data.length };
        setData([...data, newSlide]); // 새로운 슬라이드를 추가
    
        try {
            const dataToSend = {
                image: newSlide.image,
                caption: newSlide.caption,
                sloganHeading: newSlide.sloganHeading,
                order: data.length,
            };
            console.log(newSlide);
            const response = await axios.post([address], dataToSend);
            console.log('POST Response:', response);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    console.log(data);
    console.log(image);


    return (
        <>
            <div className='slider__main__container'>
                <div className='create__button__container'>
                    <button className='create__button__save' onClick={postData}>Save</button>
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
                <div className='body__main__2__scroll-container'>

                    <div className='body__main__1__container'>
                        <button className='add_slide_button' onClick={plusSlide}>Add Slides +</button>
                        {data && data.map((slide, index) => (
                            <div key={slide.id} className='slide__subMain__container'>
                                <span className={`slide_button`} onClick={() => handleSlideClick(index + 1)}>
                                    {`Slide_0${index + 1}`}
                                    <button className='del__button' onClick={() => delButton(slide.id)}>Del</button>
                                </span>
                                {selectedSlide === index + 1 && <div className={`slide_img_right`}>🔺</div>}
                            </div>
                        ))}
                    </div>
                    </div>
                    {selectedSlide && (
                        <div className='choice__body__container'>
                            <div className='body__main__2__container'>
                                <div className='body__main__img__title'>Background image</div>
                                <input type='text' className='img_URL' value={image ? image.name : ''}/>
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
                                        <div key={slide.id} style={{ display: selectedSlide === index + 1 ? 'block' : 'none' }}>
                                            {image && <img className="imsi_image_upload" src={URL.createObjectURL(image)} alt="Uploaded Image" />}
                                            <img className="slide_img" src={slide.image} alt={slide.caption} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='body__main__3__container'>
                                <div className='heading__container'>
                                    <div className='body__main__3__heading'>Slogan Heading</div>
                                    <input
                                        className='main__3__heading__input'
                                        value={selectedSlide ? data[selectedSlide - 1]?.sloganHeading : ''}
                                        onChange={(e) => {
                                            const newData = [...data];
                                            newData[selectedSlide - 1].sloganHeading = e.target.value;
                                            setData(newData);
                                        }}
                                    />
                                </div>
                                <div className='caption__container'>
                                    <div className='body__main__3__caption'>Caption</div>
                                    <textarea
                                        className='main__3__caption__input'
                                        value={selectedSlide ? data[selectedSlide - 1]?.caption : ''}
                                        onChange={(e) => {
                                            const newData = [...data];
                                            newData[selectedSlide - 1].caption = e.target.value;
                                            setData(newData);
                                        }}
                                    />
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
