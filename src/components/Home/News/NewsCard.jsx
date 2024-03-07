
import { Link } from 'react-router-dom';

const NewsCard = ({ id, img, link }) => {



  return (
    <div
      className="border-2 border-secondary rounded-md cursor-pointer"
      key={id}
    >
      <div className="relative h-96">
        <img src={img} alt="img" className="w-full h-full object-cover rounded-t-xl object-top" />
      </div>
      <div className="p-4 text-center">
        <Link to={link} target="_blank" className="text-lg text-primary hover:text-secondary border-b-4 border-primary hover:border-4">
          לכתבה המלאה
        </Link>
      </div>
    </div>


  );
};

export default NewsCard;
