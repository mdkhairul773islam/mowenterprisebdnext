import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Field of Cost"),
});

export default validationSchema;
