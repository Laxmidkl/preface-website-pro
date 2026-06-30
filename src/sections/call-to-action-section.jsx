import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CallToActionSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto rounded-3xl bg-gray-700 text-white px-8 py-10 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block rounded-full border border-gray-700 px-4 py-1 text-sm text-gray-300">
            Get Started Today
          </span>

          <h2 className="mt-6 lg:text-4xl md:text-4xl font-bold leading-tight">
            Ready to Transform Your Business with Smart Technology?
          </h2>

          <p className="mt-6 text-gray-300 leading-8 ">
            Whether you need a custom software solution, a modern website, or a
            complete digital transformation, Preface Technology is here to help
            you achieve your goals.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3 font-medium hover:bg-green-700 transition">
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigate("/contact-us")}
              className="rounded-xl border border-gray-600 px-8 py-3 font-medium hover:bg-white hover:text-gray-900 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
