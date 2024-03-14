import Course from "../Course/Course";
const Courses = ({ courses, handleSelected }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {courses.map((course, index) => (
        <Course
          key={index}
          course={course}
          handleSelected={handleSelected}
        ></Course>
      ))}
    </div>
  );
};

export default Courses;
