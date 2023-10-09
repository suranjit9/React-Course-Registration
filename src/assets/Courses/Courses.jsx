import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";


const Courses = ({ handleCard }) => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('/public/card.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                card.map(SingalCard => <Course
                    key={SingalCard.id}
                    SingalCard={SingalCard}
                    handleCard={handleCard}
                    
                ></Course>)
            }
        </div>
    );
};
Courses.propTypes ={
    handleCard: PropTypes.func.isRequired
}

export default Courses;