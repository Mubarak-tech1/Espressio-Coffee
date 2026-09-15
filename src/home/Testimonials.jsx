import TestimonialCard from "../components/menu/TestimonialCard";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <div>
      <section className="bg-[#FFF3E0] py-16">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#8B4513]">
            What Our Customers Say
          </p>

          <h2 className="mt-3 text-center text-3xl font-bold text-[#4B2C20] md:text-4xl">
            Loved by coffee & snack lovers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-[#4B2C20]/70">
            See what our customers have to say about their Espressio experience.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials