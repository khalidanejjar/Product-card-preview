import "./TestimonialCard.css";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const TestimonialCard = ({ customer }) => {
  return (
    <article className="testimonial-card">
      <span>
        {customer.rating.map((ratingPoint, idx) =>
          ratingPoint === 1 ? (
            <IoMdStar key={idx} />
          ) : ratingPoint === 0.5 ? (
            <IoMdStarHalf key={idx} />
          ) : ratingPoint === 0 ? (
            <IoMdStarOutline key={idx} />
          ) : null
        )}
        <p>
          {customer.rating.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          )} / 5
        </p>
      </span>
      <blockquote>
        <p>"{customer.says}"</p>
      </blockquote>
      <div className="customer-info">
         <img  src={customer.image} alt={customer.fullName} />
         <h4>{customer.fullName}</h4>
      </div>
    </article>
  );
};

export default TestimonialCard;
