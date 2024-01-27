"use client";
// Import Dependencies
import { useForm } from "react-hook-form";
import validationSchema from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const AddCostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
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
        <label htmlFor="field_cost" className="inputLabel required">
          Field of Cost
        </label>
        <input
          type="text"
          id="field_cost"
          className="inputField"
          {...register("field_cost")}
        />
        <ErrorMessage
          errors={errors}
          name={"field_cost"}
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
        <label htmlFor="cost_by" className="inputLabel required">
          Cost By
        </label>
        <input
          type="text"
          id="cost_by"
          className="inputField"
          {...register("cost_by")}
        />
        <ErrorMessage
          errors={errors}
          name={"description"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="text-right">
        <button type="submit" className="inputBtn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddCostForm;
