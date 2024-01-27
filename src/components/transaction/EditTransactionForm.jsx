"use client";
import { useForm } from "react-hook-form";
import validationSchema from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const EditTransactionForm = ({ setOpenModal }) => {
  const transactionInfo = {
    showroom: "Blue Car",
    date: "10/9/2023",
    type: "withdraw",
    amount: 2394.98,
    remark: "Congenital pes planus, right foot",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: transactionInfo,
  });

  const handleOnSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className="inputForm">
      <div className="inputGroup">
        <label htmlFor="showroom" className="inputLabel required">
          Showroom
        </label>

        <select id="showroom" className="inputField" {...register("showroom")}>
          <option value="">Select Showroom</option>
          <option value="showroom one">Showroom One</option>
          <option value="showroom two">Showroom Two</option>
          <option value="showroom three">Showroom Three</option>
        </select>
        <ErrorMessage
          errors={errors}
          name={"showroom"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

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
        <label htmlFor="type" className="inputLabel required">
          Trx Type
        </label>

        <select id="type" className="inputField" {...register("type")}>
          <option value="">Select Type</option>
          <option value="deposit">Deposit</option>
          <option value="withdraw">Withdraw</option>
        </select>
        <ErrorMessage
          errors={errors}
          name={"type"}
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
        <label htmlFor="remark" className="inputLabel">
          Remark
        </label>
        <textarea
          type="text"
          id="remark"
          className="inputField"
          {...register("remark")}
        ></textarea>
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

export default EditTransactionForm;
