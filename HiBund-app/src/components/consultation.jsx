
function Consultation() {
  return (
    <div className="mx-5 mt-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 md:grid-cols-2 gap-14 items-center">
          <div className="col-span-1 md:col-span-1 me-14">
            <h1 className="font-extrabold text-4xl md:text-5xl my-8 tracking-tight">Konsultasikan dengan para ahli</h1>
            <p className="text-sm md:text-base my-8">
              Tidak perlu menghadapi tantangan parenting sendirian. Kami
              menyediakan layanan konsultasi langsung dengan para ahli untuk
              membantu Anda menemukan solusi yang tepat untuk setiap masalah
              parenting yang Anda hadapi.
            </p>
            <a href="#" className="text-pink-500 text-sm p-0 inline-block">Baca Selengkapnya →</a>
          </div>

          {/* Column 2 */}
          <div className="col-span-1 md:col-span-1 mx-5 md:mt-3">
            <img src="hybridwork.png" alt="Consultation session" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>);
}
export default Consultation;
