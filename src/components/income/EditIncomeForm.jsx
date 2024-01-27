"use client";
import { useForm } from "react-hook-form";
import validationSchema from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const EditIncomeForm = ({ setOpenModal }) => {
  const incomeInfo = {
    date: "6/11/2023",
    showroom: "Blue Car",
    field_income: "Purchase",
    description: "Oth nondisp fx of lower end l humer, subs for fx w nonunion",
    amount: 5253.92,
    income_by: "Leslie Teideman",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: incomeInfo,
  });

  const handleOnSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className="inputForm">
      <div className="inputGroup">
        <label htmlFor="date" className="inputLabel required">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="inputField"
          {...register("date")}
        />
        <ErrorMessage
          errors={errors}
          name={"date"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="showroom" className="inputLabel required">
          Showroom
        </label>
        <input
          type="text"
          id="showroom"
          className="inputField"
          {...register("showroom")}
        />
        <ErrorMessage
          errors={errors}
          name={"showroom"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="field_income" className="inputLabel required">
          Field of Income
        </label>
        <input
          type="text"
          id="field_income"
          className="inputField"
          {...register("field_income")}
        />
        <ErrorMessage
          errors={errors}
          name={"field_income"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="description" className="inputLabel required">
          Description
        </label>
        <textarea
          type="text"
          id="description"
          className="inputField"
          {...register("description")}
        ></textarea>
        <ErrorMessage
          errors={errors}
          name={"description"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="amount" className="inputLabel required">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="inputField"
          {...register("amount", { valueAsNumber: true })}
        />
        <ErrorMessage
          errors={errors}
          name={"amount"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="income_by" className="inputLabel required">
          Income By
        </label>
        <input
          type="text"
          id="income_by"
          className="inputField"
          {...register("income_by")}
        />
        <ErrorMessage
          errors={errors}
          name={"description"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="flex items-center gap-2 justify-end">
        <div onClick={() => setOpenModal(false)} className="inputBtn cancel">
          Cancel
        </div>
        <button type="submit" className="inputBtn">
          Update
        </button>
      </div>
    </form>
  );
};

export default EditIncomeForm;
