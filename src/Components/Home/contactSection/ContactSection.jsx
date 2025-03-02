export default function ContactSection() {
  return (
    <div className="w-full py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#2E5B41] mb-2 md:mb-3">
          Get in touch
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          We are here for you! How can we help?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* Contact Info Card */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 animate-moveingBorder w-full max-w-[450px] h-[80%] bg-green-100"></div>
          <div className="relative w-full max-w-[450px] min-h-[350px] p-6 md:p-8 lg:px-12 lg:py-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Let&apos;s talk with us
            </h3>

            <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
              &quot;We&apos;re here to listen and assist you with whatever you
              need. Don&apos;t hesitate to reach out!&quot;
            </p>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base">
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-gray-700 break-words">
                  {" "}
                  <img src="/lovable-uploads/mi_location.svg" alt="" />
                </span>
                310 E 67th St, New York, NY 10065, USA
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-gray-700">
                  <img src="/lovable-uploads/mi_call.svg" alt="" />
                </span>
                +1 (234) 567 89 00
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-gray-700 break-words">
                  <img
                    src="/lovable-uploads/fluent_mail-24-regular.svg"
                    alt=""
                  />
                </span>
                hello@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-center w-full">
          <div className="mb-6 md:mb-8 text-center">
            <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
              Contact Us
            </h4>
            <div className="h-1 w-16 md:w-24 bg-[#2E5B41] mx-auto" />
          </div>

          <form className="w-full max-w-[400px] space-y-4 md:space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-[#F4F4F4] border-none h-12 p-3 text-sm md:text-base"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl bg-[#F4F4F4] border-none h-12 p-3 text-sm md:text-base"
            />

            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full rounded-xl bg-[#F4F4F4] border-none h-12 p-3 text-sm md:text-base"
            />

            <textarea
              placeholder="Message"
              className="w-full rounded-xl bg-[#F4F4F4] border-none min-h-[120px] md:min-h-[160px] resize-none p-3 text-sm md:text-base"
            />

            <button
              type="submit"
              className="w-full bg-[#2E5B41] hover:bg-[#234732] text-white h-12 text-base md:text-lg rounded-xl transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
