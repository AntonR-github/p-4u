import img from "../../../assets/Content/picture1.jpeg";
import img2 from "../../../assets/Content/picture2.jpeg";
import img3 from "../../../assets/Content/picture3.jpg";
import { Link } from 'react-router-dom';

const OurMission = () => {
  return (
    <div className="mt-28">
      <div>
        {/* <h1 className="font-bold text-5xl text-center text-secondary">
          קצת <span className=" text-primary">עלינו</span>
        </h1> */}
      </div>
      <div className="flex flex-col justify-center md:flex-row items-center gap-5 rounded-xl pb-36 pl-32 pr-32 pt-16">
        {/* img section  */}
        <div className="w-full md:w-2/4">
          <img src={img} alt="img" className="rounded-lg transition-transform duration-1000 transform hover:rotate-3 hover:scale-105" />
        </div>

        {/* content section  */}
        <div className="w-full md:w-2/4 space-y-4 text-center">
          <h1 className="font-bold text-primary text-xl lg:text-5xl">
            הסיפור שלנו
          </h1>
          <h2 className="font-semibold text-lg text-secondary lg:text-2xl">
            “הכח שבעיניים”
          </h2>

          <button className="bg-gray-100 border-primary border-2 text-primary px-6 py-4 rounded text-xl hover:bg-primary hover:text-white transition duration-200 ease-linear">
            <Link to="/ourStory">קראו עוד</Link>
          </button>
        </div>
      </div>
      
      <div className="flex flex-col justify-center md:flex-row-reverse items-center gap-5 rounded-xl pb-36 pl-32 pr-32 pt-36 bg-secondary">
        {/* img section  */}
        <div className="w-full md:w-2/4">
          <img className="rounded-lg ransition-transform duration-1000 transform hover:rotate-3 hover:scale-105" src={img2} alt="img" />
        </div>

        {/* content section  */}
        <div className="w-full md:w-2/4 space-y-4 text-center">
          <h1 className="font-bold text-white text-xl lg:text-5xl">
            מובילי שינוי
          </h1>
          <h2 className="font-semibold text-lg text-white lg:text-xl">
            אנחנו מאמינים שכל אחד יכול להשפיע על העולם ולהפוך אותו למקום טוב יותר
          </h2>
          <button className="bg-white border-white border-2 text-secondary px-6 py-4 rounded text-xl hover:bg-secondary hover:text-white transition duration-200 ease-linear">
            <Link to="/board">קראו עוד</Link>
          </button>
        </div>
      </div>

      <div className=" flex flex-col justify-center md:flex-row items-center gap-5  rounded-xl pb-36 pl-32 pr-32 pt-36">
        {/* img section  */}
        <div className="w-full md:w-2/4">
          <img className="rounded-lg ransition-transform duration-1000 transform hover:rotate-3 hover:scale-105" src={img3} alt="img" />
        </div>

        {/* content section  */}
        <div className="w-full md:w-2/4 space-y-4 text-center">
          <h1 className="font-bold text-primary text-xl lg:text-5xl">
            תמכו בנו - התנדבות
          </h1>
          <h2 className="font-semibold text-lg text-secondary lg:text-xl">
            בואו להיות חלק מהסיפור שלנו ולעזור לנו להמשיך להפיץ את האהבה והחמלה בעולם
          </h2>
          <button className="bg-white border-primary border-2 text-primary px-6 py-4 rounded text-xl hover:bg-primary hover:text-white transition duration-200 ease-linear">
            <Link to="/contactUs">התנדבו אצלינו</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
