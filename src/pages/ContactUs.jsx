const ContactUs = () => {
  return (
    <>
      <div
        className={`min-h-[calc(100vh-257px)] bg-gradient-to-r from-blue-500 to-teal-500 pt-[60px] bg-cover bg-center relative flex flex-col`}
        // className={`min-h-[calc(100vh)] bg-gradient-to-r from-blue-500 to-teal-500 pt-[60px] bg-cover bg-center relative flex flex-col`}
      >
        <div className="layout bg-black/70 absolute top-0 left-0 z-10 h-full w-full"></div>
        <div className="content z-20 flex-1 flex justify-center items-center text-center container m-auto px-4 sm:px-0">
          <div className="flex items-center flex-col gap-5">
            <h1 className="sm:text-5xl text-2xl font-bold text-blue-500">
              Get In Touch
            </h1>
            <p className="sm:text-xl text-base text-white max-w-[600px]">
              Do you have a question or comment? We are here to help! Please
              reach out to us, and we will respond as soon as possible. We look
              forward to hearing from you.
            </p>
            <button className="bg-white text-blue-500 hover:bg-blue-400 hover:text-white  px-8 py-4 rounded-md font-bold duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="contact-form min-h-[800px] bg-cover bg-center container m-auto flex items-center">
        <div className="flex w-full flex-col sm:flex-row mx-6 gap-10 sm:gap-4">
          <div className="left details flex-1 ">
            <h1 className="mb-6 text-3xl font-bold">Contact Information</h1>
            <div className="flex flex-col gap-5">
              <div className="detail flex gap-4">
                <div className="icon w-12 h-12 bg-blue-400 rounded-full"></div>
                <div className="icon-information flex flex-col justify-between">
                  <p className="text-sm text-gray-600">Address</p>
                  <h5 className="text-base">Agamy-Alexandria</h5>
                </div>
              </div>
              <div className="detail flex gap-4">
                <div className="icon w-12 h-12 bg-blue-400 rounded-full"></div>
                <div className="icon-information flex flex-col justify-between">
                  <p className="text-sm text-gray-600">Phone</p>
                  <h5 className="text-base">01211141822</h5>
                </div>
              </div>
              <div className="detail flex gap-4">
                <div className="icon w-12 h-12 bg-blue-400 rounded-full"></div>
                <div className="icon-information flex flex-col justify-between">
                  <p className="text-sm text-gray-600">Email</p>
                  <h5 className="text-base">m.mamdouh1462@gmail.com</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="right form flex-1">
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-500 text-white hover:bg-blue-400 hover:text-white px-8 py-4 rounded-md">
                Submit
              </button>
              <p className="text-center text-gray-500">
                We will respond as soon as possible.
              </p>
              <div className="social-media flex justify-center gap-5">
                <a href="#" className="text-gray-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 17v2.025c0 2.469-4.977 4-10 4s-10-1.531-10-4V17m0-9C8.284 7 7 8.284 7 10s1.284 3 3 3 3-1.284 3-3
                    C10 8.716 10.716 8 11.5 8s1.5 0.716 1.5 1.5-0.716 1.5-1.5 1.5-1.5-0.716-1.5-1.5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 21.5C12 22.3284 12.3284 23 13.15 23H18.85C19.6716 23 20 22.3284 20 2
                    V12C20 11.6716 19.6716 11 19.15 11H13.85C13.3284 11 13 11.6716 13 12.5V21.5Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9a9 9 0 01-9-9"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 21h-2v-4h2v4zm4-12v4h2v-4h-2zm-4 0v4h2v-4h-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 18h6v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2h6zm8-6v2h6V8a2 2 0 01-2-2h-6a2
                    a2 2 0 01-2 2v6h6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 20v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2h14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 11H15a2 2 0 00-2 2v6a2 2 0 002 2h5a2 2 0 002-2v-6a2 2 0 00-2-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v2m0 18v2m0-18v2M4 3v2m20 18v2M4 19v2m20-18v2M4 21v2m20-18v2"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9a9 9 0 01-9-9"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 21h-2v-4h2v4zm4-12v4h2v-4h-2zm-4 0v4h2v-4h-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 18h6v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2h6zm8-6v2h6V8a2 2 0 01-2-2h-6a2
                    a2 2 0 01-2 2v6h6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 20v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2h14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 11H15a2 2 0 00-2 2v6a2 2 0 002 2h5a2 2 0 002-2v-6a2 2 0 00-2-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 3v2m20 18v2M4 19v2m20-18v2M4 21v2m20-18v2"
                    />
                  </svg>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
