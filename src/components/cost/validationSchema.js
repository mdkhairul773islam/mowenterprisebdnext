import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  date: Yup.date().required().typeError("Date is required").label("Date"),
  showroom: Yup.string().required().label("Showroom"),
  field_cost: Yup.string().required().label("Field of Cost"),
  description: Yup.string().required().label("Description"),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .required()
    .label("Amount"),
  cost_by: Yup.string().required().label("Cost By"),
});

export default validationSchema;
