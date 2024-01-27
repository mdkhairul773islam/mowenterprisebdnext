import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  date: Yup.date().required().typeError("Date is required").label("Date"),
  showroom: Yup.string().required().label("Showroom"),
  field_income: Yup.string().required().label("Field of Income"),
  description: Yup.string().required().label("Description"),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .required()
    .label("Amount"),
  income_by: Yup.string().required().label("Income By"),
});

export default validationSchema;
