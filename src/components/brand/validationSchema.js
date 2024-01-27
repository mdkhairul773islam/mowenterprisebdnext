import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Brand Name"),
});

export default validationSchema;
