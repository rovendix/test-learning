import React from "react";
import EditCourseForm from "../Components/EditCourseForm/EditCourseForm";

import { Box } from "@mui/material";
const initialValues = {
  title: "",
  subtitle: "",
  language: "",
  category: "",
  subcategory: "",
  price: "",
  discount: "",
  description: "",
  tags: "",
  promotionImage: "",
  promotionVideo: "",
  level: "",
  status: "draft",
};
function EditCourseInfo({ id }) {
  const [course, setCourse] = React.useState(initialValues);
  // const { data, loading, error } = useGetData(
  //   BaseApi + "/course/getCourse/" + id
  // );
  // React.useEffect(() => {
  //   if (data) {
  //     setCourse((prev) => ({ ...prev, ...data.course }));
  //   }
  // }, [data]);
  return (
    <Box pb="1em">
      {/* {loading && error === false && <p>Loading...</p>}
      {error !== false && <p>{error.message}</p>}
      {!loading && error === false && <EditCourseForm id={id} />} */}
      <EditCourseForm id={id} {...initialValues} />
    </Box>
  );
}

export default EditCourseInfo;
