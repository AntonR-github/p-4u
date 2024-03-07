import img from "../../assets/Content/picture1.jpeg";
import { Link } from 'react-router-dom';

export default function WhatWeDo() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg text-right">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">?רוצה להשפיע</h1>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">?יש לך נסיון חיים</h1>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">!זה בשבילך</h1>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl"> - ”בגובה העיניים”</h1>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">תכנית מנטורינג של עמותת</h1>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">”פרנסה ביושר”</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                ,כוח העמותה מתבסס על חיבור שורשי עם החברה האזרחית
              </p>
              <p className="text-xl leading-8 text-gray-700">
                :ותכנית המנטורים מהווה גולת הכותרת
              </p>
              <p className="text-xl leading-8 text-gray-700">
                כי אנו מאמינים ששילוב מיטבי של אנשים שחוזרים לחברה אחרי
              </p>
              <p className="text-xl leading-8 text-gray-700">
                .ריצוי מאסר דורש כפר
              </p>
              <p className="text-xl leading-8 text-gray-700">
                (It takes a village)
              </p>
            </div>
          </div>
        </div>
        <div className="p-16 lg:sticky lg:top-20 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={img}
            alt="alt"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-xl leading-8 text-gray-700 text-right">
                ,המנטור, אדם שמגיע עם הרבה ניסיון חיים
              </p>
              <p className="text-xl leading-8 text-gray-700 text-right">
                ,אחרי גיוס קפדני והכשרה ייחודית
              </p>
              <p className="text-xl leading-8 text-gray-700 text-right">
                .מהווה גשר בין “פלנטה הכלא” לבין הקהילה
              </p>
              <p className="text-xl leading-8 text-gray-700 text-right mt-6">
                ,תהליך המנטורינג מאפשר היכרות מעמיקה עם סיפור החיים
              </p>
              <p className="text-xl leading-8 text-gray-700 text-right">
                .הכוחות והאתגרים של המלווה, ממקום לא שיפוטי ובלתי פורמלי
              </p>
              <p className="text-xl leading-8 text-gray-700 text-right">
                ,קשר מבוסס אימון הדדי, חיזוק המסוגלות האישית והתעסוקתית
              </p>
              <p className="text-xl leading-8 text-gray-700 text-right">
                ,תחושה של שייכות ונטוורקינג
              </p>
              <p className="text-xl leading-8 text-gray-700 text-right">
                ,מגבירים את הסיכוי להשתלבות הולמת
              </p>
              <p className="text-xl leading-8 text-gray-700 text-right">
                .ותורמים לייצוב של זהות חיובית
              </p>
              <p className="text-xl leading-8 text-gray-700 text-right">
                .תוך כדי הפנמה שהתנהגות עבריינית לא פותרת בעיות בחיים
              </p>
              <p className="text-xl leading-8 text-gray-700 text-right mt-6">
                ,במקרים רבים, המנטור והמלווה “מחוברים לחיים”
              </p>
              <p className="text-xl leading-8 text-gray-700 text-right">
                .והקשר ביניהם הופך לחברותי, ממקום של אמת ושל נתינה הדדית
              </p>
              <p className="text-2xl leading-8 text-red-600 text-right mt-6">
                הצלחנו להשפיע על שינוי מדיניות הכנה לשחרור
              </p>
              <p className="text-2xl leading-8 text-red-600 text-right">
               .בשירות בתי הסוהר
              </p>
              <p className="text-xl leading-8 text-gray-700 text-right mt-6">
                .החיבור למנטור הפך לאופציה לכל אסיר שעומד להשתחרר
              </p>
              <p className="text-xl leading-8 text-gray-700 text-right">
                תכניתנו נחשבת לכלי חיוני לשמירה על הרצף הטיפולי והשיקומי
              </p>
              <p className="text-xl leading-8 text-gray-700 text-right">
                .שהתחיל במהלך המאסר
              </p>
              <p className="text-2xl leading-8 text-red-600 text-right mt-6">
                .מסקרן אותי. רוצה לדעת פרטים נוספים
              </p>
              <p className="text-2xl leading-8 text-red-600 text-right mt-6">
                .למידע נוסף ולהגשת מועמדות לתכנית המנטורים
              </p>
              <p className="text-2xl leading-8 text-blue-600 text-right my-6 hover:underline">
                <Link to="/contactUs">
                  לחצו כאן
                </Link>
              </p>
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/cDu8_H-KPhI?si=xgR07Q2ujL38Edph"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

