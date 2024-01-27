"use client";
// Import Dependencies
import * as Yup from "yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import validationSchema from "./validationSchema";

const AddProductForm = () => {
  const productInfo = {
    name: "Car Parts",
    code: "154541",
    model: "Yamaha",
    category: "category one",
    brand: "brand one",
    purchase_price: 534,
    sale_price: 34,
    unit: "Pcs",
    low_lavel: 23,
    status: "Not available",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: productInfo,
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

      <div className="flex items-center gap-2 justify-end">
        <Link href="/product" className="inputBtn cancel">
          Cancel
        </Link>
        <button type="submit" className="inputBtn">
          Update
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;

// "use client";
// import { useForm } from "react-hook-form";

// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import { ErrorMessage } from "@hookform/error-message";
// import Link from "next/link";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required().label("Name"),
//   mobile: Yup.number()
//     .typeError("Mobile must be a number")
//     .required()
//     .label("Mobile"),
//   address: Yup.string().label("Address"),
//   area: Yup.string().label("Area"),
// });

// const EditProductForm = ({ setOpenModal }) => {
//   const productInfo = {
//     name: "Johan Khan ",
//     mobile: "00000000000",
//     address: "Trishal, Mymensingh",
//     area: "Mymensingh",
//   };

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//     defaultValues: productInfo,
//   });

//   const handleOnSubmit = (data) => {
//     alert(JSON.stringify(data, null, 2));
//   };

//   return (
//     <form onSubmit={handleSubmit(handleOnSubmit)} className="inputForm">
//       <div className="inputGroup">
//         <label htmlFor="name" className="inputLabel required">
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           className="inputField"
//           {...register("name")}
//           placeholder="Name"
//         />
//         <ErrorMessage
//           errors={errors}
//           name={"name"}
//           render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
//         />
//       </div>

//       <div className="inputGroup">
//         <label htmlFor="mobile" className="inputLabel required">
//           Mobile
//         </label>
//         <input
//           type="text"
//           id="mobile"
//           className="inputField"
//           {...register("mobile", { valueAsNumber: true })}
//           placeholder="Mobile"
//         />
//         <ErrorMessage
//           errors={errors}
//           name={"mobile"}
//           render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
//         />
//       </div>

//       <div className="inputGroup">
//         <label htmlFor="address" className="inputLabel">
//           Address
//         </label>
//         <input
//           type="text"
//           id="address"
//           className="inputField"
//           {...register("address")}
//           placeholder="Address"
//         />
//       </div>

//       <div className="inputGroup">
//         <label htmlFor="area" className="inputLabel">
//           Area
//         </label>
//         <input
//           type="text"
//           id="area"
//           className="inputField"
//           {...register("area")}
//           placeholder="Area"
//         />
//       </div>

//       <div className="flex items-center gap-2 justify-end">
//         <div onClick={() => setOpenModal(false)} className="inputBtn cancel">
//           Cancel
//         </div>
//         <button type="submit" className="inputBtn">
//           Update
//         </button>
//       </div>
//     </form>
//   );
// };

// export default EditProductForm;
