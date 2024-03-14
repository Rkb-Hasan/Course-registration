const Course = ({ course, handleSelected }) => {
  const { id, name, description, price, photo, credit } = course;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex gap-4">
            <p> Price: {price} </p>
            <p> Credit: {credit} </p>
          </div>
          <div className="card-actions ">
            <button
              onClick={() => handleSelected(course, credit, price)}
              className="btn btn-primary w-full"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
