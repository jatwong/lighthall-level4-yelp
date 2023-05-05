// import { ReactComponent as Star  } from '../icons/star.svg';
import Star from '../icons/Star';

const Rating = ({ rating }) => {
  const fullStar = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        if (index < fullStar) {
          return <Star filled key={index} />;
        } else if (index === fullStar && halfStar) {
          return <Star half key={index} />;
        } else {
            return <Star key={index} />
        }
      })}
    </div>
  );
};

export default Rating;
