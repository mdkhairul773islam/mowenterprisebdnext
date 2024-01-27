import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  mobile: Yup.number()
    .typeError("Mobile must be a number")
    .required()
    .label("Mobile"),
  address: Yup.string().label("Address"),
  area: Yup.string().label("Area"),
});

export default validationSchema;
