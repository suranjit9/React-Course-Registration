
import PropTypes from 'prop-types';
import { useState } from 'react';

const Course = ({ SingalCard, handleCard }) => {
    const { image, title, description, price, credit } = SingalCard;
    const [color, setColor] =useState();
    const disabal = ()=>{
        handleCard(SingalCard, credit, price) ;
        setColor('bg-gray-300');
    }
    

    return (
        <div className='p-2 border-2 border-2 bg-slate-50 rounded-lg space-y-1.5'>
            <img src={image} alt="" />
            <h1 className='text-base font-semibold'>{title}</h1>
            <p className='text-xs'>{description}</p>
            <div className='flex justify-between'>
                <p>$ Price : {price}</p>
                <p>📖 Credit : {credit} hr</p>

            </div>
          
            <button id ="hello" onClick={disabal} className={`${color} w-full rounded-lg bg-[#2F80ED] pt-1 pb-1`}>Select</button>
        </div>
    );
};
Course.propTypes ={
    SingalCard: PropTypes.object.isRequired,
    handleCard: PropTypes.func.isRequired,
}


export default Course;