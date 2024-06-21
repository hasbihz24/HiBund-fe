function Testimonial() {
  return (
    <div className="mx-5 mt-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <p className="text-pink-500 text-lg">Testimoni</p>
          <h1 className="font-bold text-3xl mt-2">
            Lihat bagaimana pengalaman mereka
          </h1>
          <p className="text-lg mt-4">
            Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
          </p>
          <div className="flex mt-4">
            <div className="w-1/3">
              <button className="p-2 arrow-btn">
                <img src="arrow-left.svg" alt="Previous" />
              </button>
            </div>
            <div className="w-1/3 ml-2">
              <button className="p-2 arrow-btn">
                <img src="arrow-right.svg" alt="Next" />
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </div>
  );
}
export default Testimonial;
