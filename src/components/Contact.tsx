const Contact = () => {
  return (
    <div className="md:px-7 px-5" id="contact">
      <div className="flex justify-center items-center h-screen">
        {" "}
        {/* Updated line */}
        {/* form */}
        <div className="text-center md:w-1/2 p-6 bg-gray-800 rounded-lg shadow-lg">
          {" "}
          {/* Updated line */}
          <p className="text-white text-2xl mb-6">
            Contact me, let's make magic together
          </p>
          <form className="text-left">
            <div className="mb-4">
              <label htmlFor="name" className="text-white block mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="bg-gray-700 text-white py-3 px-4 w-full rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-white block mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="bg-gray-700 text-white py-3 px-4 w-full rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-white block mb-2">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                cols={30}
                rows={4}
                placeholder="Write your message here"
                className="bg-gray-700 text-white py-3 px-4 w-full rounded focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
