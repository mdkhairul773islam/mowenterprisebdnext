import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  manager: Yup.string().required().label("Manager"),
  mobile: Yup.number()
    .typeError("Mobile must be a number")
    .required()
    .label("Mobile"),
  mobile_two: Yup.number().typeError("Mobile must be a number").label("Mobile"),
  mobile_three: Yup.number()
    .typeError("Mobile must be a number")
    .label("Mobile"),
  address: Yup.string().label("Address"),
  prefix: Yup.string().required().label("Prefix"),
});

export default validationSchema;
