import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Category Name"),
});

export default validationSchema;
