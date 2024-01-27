import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white text-center  text-dark-700 shadow-md rounded p-5 flex items-center justify-between">
      <p>All right reserved by BlueCar</p>
      <p>
        Design & Development by
        <Link
          className="text-dark-800 font-medium"
          target="_blank"
          href="https://mehedihasan.tech"
        >
          {" "}
          Johan Khan
        </Link>
      </p>
    </div>
  );
};

export default Footer;
