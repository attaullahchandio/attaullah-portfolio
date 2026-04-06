export default function ContactSection() {
  return (
    <section className="w-full min-h-screen bg-[#0c0f17] flex items-center px-6 md:px-16 py-16">
      
      <div className="w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div className="text-white space-y-6">
          <p className="text-sm tracking-widest uppercase text-gray-400 relative before:absolute before:-left-6 before:top-2 before:w-4 before:h-[2px] before:bg-orange-400">
            Contacts
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Have a project?
            <br />
            Let’s talk!
          </h1>

          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-md transition">
            Submit
          </button>
        </div>

        {/* RIGHT SIDE */}
        <form className="space-y-8">
          
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-gray-500 text-white py-2 focus:outline-none focus:border-orange-400"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-500 text-white py-2 focus:outline-none focus:border-orange-400"
            />
          </div>

          <div>
            <textarea
              placeholder="Message"
              rows="3"
              className="w-full bg-transparent border-b border-gray-500 text-white py-2 focus:outline-none focus:border-orange-400 resize-none"
            />
          </div>

        </form>
      </div>
    </section>
  );
}