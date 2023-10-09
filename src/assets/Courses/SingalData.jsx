import PropTypes from 'prop-types';

const SingalData = ({ data,idx }) => {

    const { title } = data;
    return (
        <div>
            <h1 className="text-xl ">{idx} .{title}</h1>
        </div>


    );
};
SingalData.propTypes ={
    data: PropTypes.object.isRequired,
    idx: PropTypes.number
}

export default SingalData;