import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  date: Yup.date().required().typeError("Date is required").label("Date"),
  showroom: Yup.string().label("Showroom"),
  type: Yup.string().required().label("Type"),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .required()
    .label("Amount"),
  remark: Yup.string().label("Remark"),
});

export default validationSchema;
