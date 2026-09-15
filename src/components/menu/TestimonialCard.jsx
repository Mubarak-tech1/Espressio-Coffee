import { Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="flex flex-col items-center rounded-2xl bg-[#8B451321] p-6 text-center">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="h-20 w-20 rounded-full object-cover"
      />

      <h3 className="mt-4 text-lg font-semibold text-[#4B2C20]">
        {testimonial.name}
      </h3>

      <div className="mt-2 flex gap-1 text-[#d6a41a]">
        {Array(testimonial.rating)
          .fill(null)
          .map((_, index) => (
            <Star key={index} size={18} fill="currentColor" />
          ))}
      </div>

      <p className="mt-4 leading-relaxed text-[#4B2C20]/70">
        "{testimonial.testimony}"
      </p>
    </article>
  );
};

export default TestimonialCard;
