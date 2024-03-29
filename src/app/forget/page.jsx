import Link from "next/link";
import { IoLogoModelS } from "react-icons/io";

const ForgetPage = () => {
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex gap-x-4 items-center  justify-center">
          <div className={`bg-primary p-2 rounded-sm text-white`}>
            <IoLogoModelS />
          </div>
          <span className={`text-black font-bold text-xl duration-200`}>
            BlueCar
          </span>
        </div>
        <h2 class="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Forget your account
        </h2>
      </div>

      <div class="mt-6 shadow-lg p-10 sm:mx-auto sm:w-full sm:max-w-md">
        <form class="space-y-6">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <Link
              href="/"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPage;
