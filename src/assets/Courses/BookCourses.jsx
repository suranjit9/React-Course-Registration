import PropTypes from 'prop-types';
import SingalData from "./SingalData";



const BookCourses = ({ cards }) => {

    return (

        <div>
            <div>
                <h1 className="font-semibold text-2xl pb-4">Course Name</h1>
                <hr />
            </div>
            <div>
                {
                    cards.map((data, idx) => <SingalData
                        key={idx}
                        idx={idx + 1}
                        data={data}

                    ></SingalData>)
                }
            </div>

        </div>
    );
};
BookCourses.propTypes ={
    cards: PropTypes.object,
    
}

export default BookCourses;