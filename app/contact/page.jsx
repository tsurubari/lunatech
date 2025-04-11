import NavBar from "../../components/NavBar";


const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <NavBar />
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Have questions, suggestions, or feedback? Leave us a message, and we’ll get back to you as soon as possible!
        </p>
        <form className="space-y-4 max-w-lg mx-auto">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
