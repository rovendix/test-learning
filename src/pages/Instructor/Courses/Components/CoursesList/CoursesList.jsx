import CustomTable from "../../../../../Components/CustomTable/CustomTable";
import CustomLink from "../../../../../UI/CustomLink/CustomLink";
import CourseMenu from "../CourseMenu/CourseMenu";

const CourseName = ({ name, url }) => {
  return (
    <CustomLink to={url} sx={{ fontWeight: "600" }}>
      {name}
    </CustomLink>
  );
};
function CoursesList({ setRefetch }) {
  const headCells = [
    {
      id: "courseName",
      disablePadding: false,
      label: "Course Name",
    },
    {
      id: "videoCount",
      disablePadding: false,
      label: "Video Count",
    },
    {
      id: "studentCount",
      disablePadding: false,
      label: "Student Count",
    },
    {
      id: "courseRating",
      disablePadding: false,
      label: "Course Rating",
    },
    {
      id: "courseStatus",
      disablePadding: false,
      label: "Course Status",
    },
    {
      id: "settings",
      disablePadding: false,
      label: "",
      disableSorting: true,
    },
  ];

  function createData(
    id,
    courseName,
    videoCount,
    studentCount,
    courseRating,
    courseStatus
  ) {
    return {
      id,
      courseName: (
        <CourseName name={courseName} url={`/instructor/courses/${id}`} />
      ),
      videoCount,
      studentCount,
      courseRating,
      courseStatus,
      settings: <CourseMenu key={id} id={id} setRefetch={setRefetch} />,
    };
  }

  const rows = [
    createData(1, "React JS", 50, 1000, 4.5, "Published"),
    createData(2, "Node JS", 18, 150, 4.0, "Published"),
    createData(3, "Mongo DB", 1, 50, 3.5, "Published"),
    createData(4, "Express JS", 3, 0, 0, "Draft"),
  ];

  return (
    <CustomTable
      title={"Courses List"}
      rows={rows}
      headCells={headCells}
      showCheckbox={false}
    />
  );
}

export default CoursesList;
