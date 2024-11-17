/* eslint-disable react/prop-types */

const Details = (props) => {
    const detailsArray = [
      { label: 'Date', value: props.Date },
      { label: 'Time', value: props.Time },
      { label: 'Location', value: props.Location },
      { label: 'Club', value: props.Club },
      { label: 'Course ID', value: props.CourseId },
      { label: 'Swimmer', value: props.Swimmer },
      { label: 'Coach', value: props.Coach },
    ];
  
    return (
      <div className="grid grid-cols-4 gap-4 p-4 rounded-md shadow-md text-white">
        {detailsArray.map((detail, index) => (
          <div key={index}>
            <div className="flex flex-row">
              <span className="font-bold">{detail.label}:</span>
              <span className="ml-3">{detail.value}</span>
            </div>
            
          </div>
        ))}
      </div>
    );
  };
  
  export default Details;
  