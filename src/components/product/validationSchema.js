import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Product Name"),
  code: Yup.number().required().label("Product Code"),
  model: Yup.string().required().label("Model"),
  category: Yup.string().required().label("Category"),
  brand: Yup.string().required().label("Brand"),
  purchase_price: Yup.number()
    .typeError("Purchase Price must be a number")
    .label("Purchase Price"),
  sale_price: Yup.number()
    .typeError("Sale Price must be a number")
    .label("Sale Price"),
  unit: Yup.string().label("Unit"),
  low_lavel: Yup.number()
    .typeError("Low Lavel must be a number")
    .label("Purchase Price"),
  status: Yup.string().required().label("Status"),
});

export default validationSchema;
