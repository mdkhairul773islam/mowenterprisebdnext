"use client";
// Import Dependencies
import { useForm } from "react-hook-form";
import validationSchema from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const AddProductForm = () => {
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
          Product Name
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
          <label htmlFor="code" className="inputLabel required">
            Product Code
          </label>
          <input
            type="number"
            id="code"
            className="inputField"
            {...register("code", { valueAsNumber: true })}
          />
          <ErrorMessage
            errors={errors}
            name={"code"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="model" className="inputLabel required">
            Model
          </label>
          <input
            type="text"
            id="model"
            className="inputField"
            {...register("model")}
          />
          <ErrorMessage
            errors={errors}
            name={"model"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="category" className="inputLabel required">
            Category
          </label>
          <select
            type="text"
            id="category"
            className="inputField"
            {...register("category")}
          >
            <option value="" selected>
              Select Category
            </option>
            {[
              "category one",
              "category two",
              "category three",
              "category four",
              "category five",
              "category six",
              "category seven",
            ].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={"category"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="brand" className="inputLabel required">
            Brand
          </label>
          <select
            type="text"
            id="brand"
            className="inputField"
            {...register("brand")}
          >
            <option value="" selected>
              Select Brand
            </option>
            {[
              "brand one",
              "brand two",
              "brand three",
              "brand four",
              "brand five",
              "brand six",
              "brand seven",
            ].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={"brand"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="purchase_price" className="inputLabel">
            Purchase Price
          </label>
          <input
            type="number"
            id="purchase_price"
            className="inputField"
            {...register("purchase_price", { valueAsNumber: true })}
          />
          <ErrorMessage
            errors={errors}
            name={"purchase_price"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="sale_price" className="inputLabel">
            Sale Price
          </label>
          <input
            type="number"
            id="sale_price"
            className="inputField"
            {...register("sale_price", { valueAsNumber: true })}
          />
          <ErrorMessage
            errors={errors}
            name={"sale_price"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="unit" className="inputLabel">
            Unit
          </label>
          <select
            type="text"
            id="unit"
            className="inputField"
            {...register("unit")}
          >
            <option value="" selected>
              Select Unit
            </option>
            {["Pcs", "Set", "Gaj", "Ft", "kG", "Litre", "Pound", "Dozon"].map(
              (value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              )
            )}
          </select>
        </div>

        <div className="inputGroup">
          <label htmlFor="low_lavel" className="inputLabel">
            Low Lavel
          </label>
          <input
            type="number"
            id="low_lavel"
            className="inputField"
            {...register("low_lavel", { valueAsNumber: true })}
          />
          <ErrorMessage
            errors={errors}
            name={"low_lavel"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>
      </div>

      <div className="inputGroup">
        <div className="flex items-center gap-5">
          <div>
            <input
              type="radio"
              value="Available"
              id="available"
              {...register("status")}
              name="status"
              className="radioInput"
            />
            <label htmlFor="available" className="radioLabel">
              Available
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="not_available"
              value="Not available"
              {...register("status")}
              name="status"
              className="radioInput"
            />
            <label htmlFor="not_available" className="radioLabel">
              Not Available
            </label>
          </div>
        </div>
        <ErrorMessage
          errors={errors}
          name={"status"}
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

export default AddProductForm;
