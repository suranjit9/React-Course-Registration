import PropTypes from 'prop-types';

const SingalData = ({ data }) => {

    const { title } = data;
    return (
        <div>
            <h1 className="text-xl "> {title}</h1>
        </div>


    );
};
SingalData.propTypes ={
    data: PropTypes.object.isRequired
}

export default SingalData;