function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            AutismCare
          </h2>
          <p className="text-sm">
            Promoting awareness, early detection, and support for autism.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">
            Pages
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Autism</li>
            <li>Early Signs</li>
            <li>Screening Quiz</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">
            About Project
          </h3>
          <p className="text-sm">
            Final year awareness platform focused on autism education
            and support for families and caregivers.
          </p>
        </div>

      </div>

      <div className="text-center text-sm pb-6">
        © 2026 AutismCare
      </div>

    </footer>
  );
}

export default Footer;