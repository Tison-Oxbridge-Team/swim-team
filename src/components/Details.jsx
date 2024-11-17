/* eslint-disable react/prop-types */

const Details = (props) => {
  const detailsArray = [
    { label: 'Date', value: props.Date },
    { label: 'Time', value: props.Time },
    { label: 'Location', value: props.Location },
    { label: 'Club', value: props.Club },
    { label: 'CourseID', value: props.CourseId },
    { label: 'Swimmer', value: props.Swimmer },
    { label: 'Coach', value: props.Coach },
  ];

  return (
    <div className=" bg-gray-100 fixed top-16 left-0 w-full p-4  rounded-md shadow-md grid grid-cols-1 md:grid-cols-5 gap-4 text-gray-700 text-sm z-10">
      {detailsArray.map((detail, index) => (
        <div key={index}>
          <div className="flex flex-row">
            <span className="font-semibold">{detail.label}:</span>
            <span className="ml-2">{detail.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
