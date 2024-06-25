function Footer() {
  return (
    <div className="footer-container mt-5 footer-bg w-full py-7">
      <div className="container mx-auto w-[1053px]">
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
          {/* Column 1 */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col md:flex-row">
              <img src="logo-2.png" className="w-4/5 md:w-80 h-auto" alt="Logo" />
            </div>
            <div className="my-3">
              <p className="text-sm">
                Temukan tips, panduan, dan komunitas yang mendukung perjalanan parenting Anda.
              </p>
            </div>
          </div>
          <div className="col-span-2">

          </div>
          {/* Column 2 */}
          <div className="col-span-1 md:col-span-1 mt-2 md:mt-0">
            <div className="grid flex-col">
              <p className="font-bold text-sm mb-2 my-2">Company</p>
              <p className="text-sm my-2">About Us</p>
              <p className="text-sm my-2">Partner program</p>
              <p className="text-sm my-2">Contact Us</p>
              <p className="text-sm my-2">Success stories</p>
              <p className="text-sm my-2">Terms & conditions</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 mt-2 md:mt-0">
            <div className="grid flex-col">
              <p className="font-bold text-sm mb-2 invisible my-3">-----</p>
              <p className="text-sm my-2">Pricing</p>
              <p className="text-sm my-2">Reviews</p>
              <p className="text-sm my-2">Direct Mail Academy</p>
              <p className="text-sm my-2">Success Story</p>
              <p className="text-sm my-2">Privacy Policy</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-span-1 md:col-span-1 mt-2 md:mt-0">
            <div className="flex flex-col">
              <p className="font-bold text-sm mb-2">Contact</p>
              <div className="flex items-center text-sm">
                <img src="email.svg" className="w-4 h-4 mr-2" alt="Email Icon" />
                <p>amikom.ac.id</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="grid grid-cols-3 md:grid-cols-4 mt-5 border-t border-gray-300 pt-5">
          <div className="col-span-1 md:col-span-3 items-center">
            <img src="logo-2.png" className="w-1/5 md:w-20 h-auto" alt="Logo" />
            <p className="my-2 text-xs font-bold text-gray-500">
              © 2024 • Romusa Proyek Pemograman Universitas Amikom Yogyakarta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
