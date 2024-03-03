import React, { useState, useEffect } from 'react';
import './slideTable.css';
import SlideMain from './slideMain';
import { Link } from 'react-router-dom';

import Main from '../main/main';
import data from './data.json';

const SliderTable = () => {
    const [slides, setSlides] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newSlideName, setNewSlideName] = useState('');
    const [newAssignPage, setNewAssignPage] = useState('');

    const pages = ['page1.html', 'page2.html', 'page3.html'];

    useEffect(() => {
        setSlides(data);
    }, []);

    const handleAddSlide = () => {
        setShowForm(true);
    };

    const handleCreateSlide = () => {
        const newSlide = {
            ID: slides.length + 1,
            SlideName: newSlideName,
            AssignPage: newAssignPage,
            CreateDate: new Date().toISOString().slice(0, 10) // 현재 날짜
        };

        setSlides([...slides, newSlide]);
        setShowForm(false);
        setNewSlideName('');
        setNewAssignPage('');
    };

    return (
        <>
            <div className='slide__table__main__container'>
                <button id="add" onClick={handleAddSlide}>Add New Slide</button>
                {showForm && (
                    <div className="form">
                        <label htmlFor="slideName">Slide Name:</label>
                        <input id="slideName" value={newSlideName} onChange={e => setNewSlideName(e.target.value)} />
                        <label htmlFor="assignPage">Assign to Page:</label>
                        <input id="assignPage" value={newAssignPage} onChange={e => setNewAssignPage(e.target.value)} />
                        <button onClick={handleCreateSlide}>Create</button>
                    </div>
                )}
                <table className='table__main__container'>
                    <thead className='table__title__container'>
                        <tr className='title__container'>
                            <th className='table__title__id'>ID</th>
                            <th className='table__title__name'>Slide Name</th>
                            <th className='table__title__page'>Assign to Page</th>
                            <th className='table__title__date'>Create Date</th>
                            <th className='table__title__img'>  </th>
                        </tr>
                    </thead>
                    <tbody>
                        {slides.map((slide, index) => (
                            <tr key={index} >
                                <td className='ID'>{slide.ID}</td>
                                <td className='name'><Link to='/SlideMain'>{slide.SlideName}</Link></td>
                                <td className='page'>{slide.AssignPage}</td>
                                <td className='data'>{slide.CreateDate}</td>
                                <td className='img'>img</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Main />
        </>
    );
};

export default SliderTable;
