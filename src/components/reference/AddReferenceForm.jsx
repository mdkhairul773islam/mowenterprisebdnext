"use client";
// Import Dependencies
import { useForm } from "react-hook-form";
import validationSchema from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const AddReferenceForm = () => {
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
        <label htmlFor="name" className="inputLabel required">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="inputField"
          {...register("name")}
        />
        <ErrorMessage
          errors={errors}
          name={"name"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="mobile" className="inputLabel required">
          Mobile
        </label>
        <input
          type="number"
          id="mobile"
          className="inputField"
          {...register("mobile", { valueAsNumber: true })}
        />
        <ErrorMessage
          errors={errors}
          name={"mobile"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="address" className="inputLabel">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="inputField"
          {...register("address")}
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="area" className="inputLabel">
          Area
        </label>
        <input
          type="text"
          id="area"
          className="inputField"
          {...register("area")}
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

export default AddReferenceForm;
