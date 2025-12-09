export default function SignUpPage() {
    return (
      <div className="flex w-screen h-screen bg-black">
        
        {/* Left Logo Section */}
        <div className="flex justify-center items-center w-1/2 h-full bg-black">
          <svg
            className="w-[350px] h-[350px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 462.799"
          >
            <path
              fill="#fff"
              d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
            />
          </svg>
        </div>
  
        {/* Right Form Section */}
        <div className="flex flex-col justify-center items-center h-full w-[300px] ml-24 bg-black">
          
          <h1 className="text-white text-[66px] font-bold mb-10 whitespace-nowrap ml-40">
            Happening now
          </h1>
  
          <h1 className="text-white text-[35px] font-bold mb-5 self-start">
            Join today.
          </h1>
  
          <button className="flex justify-center items-center w-[300px] h-[40px] bg-white rounded-full text-black font-semibold text-[14px] mb-3">
            Sign Up with Google
          </button>
  
          {/* OR Divider */}
          <div className="flex items-center w-[300px] my-2">
            <div className="flex-1 h-px bg-[#71767B]"></div>
            <p className="text-[#71767B] mx-3 text-[15px]">OR</p>
            <div className="flex-1 h-px bg-[#71767B]"></div>
          </div>
  
          {/* Form Inputs */}
          <input
            type="email"
            placeholder="Email"
            className="w-[300px] h-[40px] mb-3 bg-white rounded-full px-5 text-black mt-2"
          />
  
          <input
            type="password"
            placeholder="Password"
            className="w-[300px] h-[40px] mb-3 bg-white rounded-full px-5 text-black"
          />
  
          <button className="w-[300px] h-[40px] bg-white rounded-full text-black font-semibold mb-5">
            Create Account
          </button>
  
          <p className="text-[#71767B] text-[11px] w-[300px] text-center my-3">
            By signing up, you agree to the{" "}
            <span className="text-sky-500">Terms of Service</span> and{" "}
            <span className="text-sky-500">Privacy Policy</span>, including{" "}
            <span className="text-sky-500">Cookie Use</span>.
          </p>
  
          <h3 className="text-white font-bold text-[15px] mt-3 mb-6">
            Already have an account?
          </h3>
  
          <button className="w-[300px] h-[40px] bg-white rounded-full text-sky-500 font-semibold">
            Sign In
          </button>
        </div>
      </div>
    );
  }
  