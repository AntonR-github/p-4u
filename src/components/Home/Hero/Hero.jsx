import bg from "../../../assets/Hero/Handshake.jpg";

const Hero = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="h-full flex flex-col justify-center md:flex-column items-center">
        {/* content section  */}
        <div className="w-full md:w-2/3 space-y-5 mb-10 mt-48" style={{ height: '600px'}}>
          {/* Hero Video */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/HeIZCD4kqfs?si=d0nEYSAee3MZVO_7"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* Hero Text */}
        <div className="bg-tertiary w-full text-center h-full justify-center container">
          <div className="text-xl lg:text-3xl md:text-3xl sm:text-3xl font-medium pb-5">
            <p>:אף אחד לא מעלה את הנקודה המרכזית“</p>
            <p><b>.אנחנו זקוקים לאנשים האלה</b></p>
            <p>.המדינה מפסידה, כי קבוצה משמעותית של אזרחיה אינה חלק ממנה</p>
            <p>“.יש להם כישרונות, ואנו זקוקים להם</p>
            <p>מימי סילברט -</p>
            <br />
            <p>Free-for-Good: It Takes a Village</p>
            <br />
            <p><b>.אנשים. שייכות. מסוגלות. עבודה. למידה לאורך החיים. קהילה תומכת</b></p>
            <p>.לבנות חברה ש“עובדת“ עבור כולם</p>
            <b>“זאת “פרנסה ביושר</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
