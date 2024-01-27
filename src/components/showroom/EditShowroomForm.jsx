"use client";
import { useForm } from "react-hook-form";
import validationSchema from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const EditShowroomForm = ({ setOpenModal }) => {
  const showroomInfo = {
    name: "Johan Khan ",
    mobile: "00000000000",
    address: "Trishal, Mymensingh",
    area: "Mymensingh",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: showroomInfo,
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

      <div className="grid grid-cols-2 gap-5">
        <div className="inputGroup">
          <label htmlFor="manager" className="inputLabel required">
            Manager Name
          </label>
          <input
            type="text"
            id="manager"
            className="inputField"
            {...register("manager")}
          />
          <ErrorMessage
            errors={errors}
            name={"manager"}
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
          <label htmlFor="mobile_two" className="inputLabel">
            Mobile Two
          </label>
          <input
            type="number"
            id="mobile_two"
            className="inputField"
            {...register("mobile_two", { valueAsNumber: true })}
          />
          <ErrorMessage
            errors={errors}
            name={"mobile_two"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="mobile_three" className="inputLabel">
            Mobile Three
          </label>
          <input
            type="number"
            id="mobile_three"
            className="inputField"
            {...register("mobile_three", { valueAsNumber: true })}
          />
          <ErrorMessage
            errors={errors}
            name={"mobile_two"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>
      </div>

      <div className="inputGroup">
        <label htmlFor="address" className="inputLabel">
          Address
        </label>
        <textarea
          id="address"
          className="inputField"
          {...register("address")}
        ></textarea>
      </div>

      <div className="inputGroup">
        <label htmlFor="area" className="inputLabel required">
          Prefix
        </label>
        <input
          type="text"
          id="area"
          className="inputField"
          {...register("prefix")}
        />
        <ErrorMessage
          errors={errors}
          name={"prefix"}
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

export default EditShowroomForm;
