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
                        data={data}
                        
                    ></SingalData>)
                }
            </div>
            
        </div>
    );
};

export default BookCourses;