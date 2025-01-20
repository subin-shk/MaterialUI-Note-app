import * as yup from "yup";

//schema for validation
export const formSchema = yup.object().shape({
  title: yup.string().min(5).required("Required"),
  details: yup.string().min(20).required("Required"),
});
