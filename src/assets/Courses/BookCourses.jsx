import SingalData from "./SingalData";


const BookCourses = ({cards}) => {
    
    return (
        <div>
            {
                cards.map((data, idx) => <SingalData
                key ={idx}
                data={data}
                ></SingalData>)
            }
        </div>
    );
};

export default BookCourses;