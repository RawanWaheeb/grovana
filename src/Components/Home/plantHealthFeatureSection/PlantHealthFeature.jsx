import { NavLink } from "react-router-dom";

export default function PlantHealthFeature() {
  return (
    <div className="relative min-h-[600px] w-full font-fira-sans-condensed ">
      {" "}
      {/* Adjust min-height as needed */}
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="lovable-uploads/feature01.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>{" "}
        {/* 50% opacity overlay */}
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {" "}
        {/* z-10 brings content to front */}
        <div className="max-w-[800px] text-white space-y-6 gap-1">
          <h2 className="text-[56px] font-bold leading-[1.2]">
            Explore The New Feature
          </h2>

          <div className="space-y-4">
            <p className="text-3xl">
              Now you Can Easily Check the Plant health from website too
            </p>
            <p className="text-3xl">Upload The Photo , Check and Learn</p>
          </div>

          <NavLink to="/AiScaner">
            <button className="mt-8 bg-[#2E5B41] hover:bg-[#234732] text-white  px-8 py-2 text-lg transition-colors flex items-center space-x-2 gap-3 rounded-xl">
              Upload Photo
              <img
                src="lovable-uploads/uploadIMG.svg"
                alt="uploadIMG"
                className="w-6 h-6"
              />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
