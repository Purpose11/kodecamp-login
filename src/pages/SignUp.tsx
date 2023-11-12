import cart from "../assets/cart.png";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";

const SignUp = () => {
  return (
    <div className="flex items-center lg:justify-between justify-center h-full">
      <div className="lg:w-[50%] w-full h-full  flex justify-center items-center">
        <div className="rounded-[20px] lg:w-[70%] w-[90%] h-fit shadow-lg py-[50px] px-[30px]">
          <h1 className="font-bold text-main lg:text-3xl text-2xl">KodeCamp</h1>

          <h1 className=" font-poppins font-[800] lg:text-4xl text-3xl mt-[30px]">
            Sign Up
          </h1>
          <form className="h-fit w-full mt-[30px] flex flex-col gap-[5px]">
            <div className=" h-[77px] w-full flex flex-col gap-[5px]">
              <label
                className=" font-poppins lg:text-base text-sm"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="h-[46px] w-full rounded bg-[#FFF6F4] px-[7px] outline-main font-poppins placeholder:font-poppins lg:placeholder:text-sm text-[12px]"
                placeholder="Enter your full name here"
              />
            </div>
            <div className=" h-[77px] w-full flex flex-col gap-[5px]">
              <label
                className=" font-poppins lg:text-base text-sm"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="h-[46px] w-full rounded bg-[#FFF6F4] px-[7px] outline-main font-poppins placeholder:font-poppins lg:placeholder:text-sm text-[12px]"
                placeholder="Enter your email here"
              />
            </div>

            <div className=" h-[77px] w-full flex flex-col gap-[5px]">
              <label
                className=" font-poppins lg:text-base text-sm"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="h-[46px] w-full rounded bg-[#FFF6F4] px-[7px] outline-main font-poppins placeholder:font-poppins lg:placeholder:text-sm text-[12px]"
                placeholder="Enter your password here"
              />
            </div>
            <div className=" h-[77px] w-full flex flex-col gap-[5px]">
              <label
                className=" font-poppins lg:text-base text-sm"
                htmlFor="passwordConfirm"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                className="h-[46px] w-full rounded bg-[#FFF6F4] px-[7px] outline-main font-poppins placeholder:font-poppins lg:placeholder:text-sm text-[12px]"
                placeholder="Confirm your password here"
              />
            </div>
          </form>
          <button className="bg-main lg:w-[150px] w-[120px] h-[46px] rounded-[20px] flex items-center justify-center gap-[5px] font-poppins text-white mx-auto mt-[20px]">
            <p className=" font-poppins lg:text-base text-sm">SIGN UP</p>{" "}
            <TiArrowRight className=" shrink-0 lg:w-[24px] lg:h-[24px] w-[19px] h-[19px]" />
          </button>
          <p className=" font-poppins text-gray-400 text-center lg:text-base text-[12px] mt-[15px]">
            Already have an account?
            <span className=" text-main ml-1">
              <Link to="/">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
      <img src={cart} className=" h-[100vh] w-[50%] lg:block hidden" />
    </div>
  );
};

export default SignUp;
