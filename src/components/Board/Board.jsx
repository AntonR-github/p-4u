import miriam from "../../assets/Board/Miriam.jpg";
import moti from "../../assets/Board/Moti.jpg";
import anat from "../../assets/Board/Anat.jpg";
import eti from "../../assets/Board/Eti.jpg";
import hemi from "../../assets/Board/Hemi.jpg";
import shlomit from "../../assets/Board/Shlomit.jpg";
import shlomo from "../../assets/Board/Shlomo.jpg";
import { Link } from 'react-router-dom';

const Board = () => {
  return (
    <section className="py-28">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <h2 className="text-center text-gray-800 text-5xl mb-24 mt-24 pb-2 font-sans relative StyledTitle">
          הוועד המנהל
          <span className="block w-40 h-1 bg-green-700 absolute bottom-0 left-1/2 transform -translate-x-1/2"></span>
        </h2>

        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <div className="rounded-lg shadow border-4 border-primary">
              <div className="p-5">
                <img className="w-1/2 rounded-lg sm:rounded-none sm:rounded-l-lg" src={miriam} alt="miriam" />
                <span className="text-primary text-right">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-secondary text-center">
                    <a href="#">ד”ר מרים הירשפלד</a>
                  </h3>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-primary text-center pb-4">
                    <a href="#">PH.D.</a>
                  </h3>
                  <p>.מייסדת העמותה</p>
                  <p>.בוגרת אונ’ בולוניה (איטליה), אונ’ קולומביה (ארה”ב), ואוניברסיטת החיים</p>
                  <p>.פרופ’ למשפטים, יזמת חברתית, והרבה דברים אחרים בין לבין</p>
                  <br />
                  <p>The road is made by walking.</p>
                  <p>all the rest is commentary - ”עולם חסד יבנה … ואהבת”</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-12 mb-6 lg:mb-16 md:grid-cols-2 sm:grid-cols-2">
          <div className="rounded-lg shadow border-4 border-primary">
            <div className="p-5">
              <img className="w-1/2 rounded-lg sm:rounded-none sm:rounded-l-lg" src={anat} alt="anat" />
              <h3 className=" py-3 text-xl font-bold tracking-tight text-gray-900 dark:text-secondary text-center">
                <a href="#">עו”ד ענת אלקובי</a>
              </h3>
              <span className="text-primary text-right">
                <p>.עורכת דין, אם לשלושה בנים</p>
                <p>,את מיזם ״בגובה העיניים״ הכרתי לראשונה דרך לשכת עורכי הדין</p>
                <p>ושם התוכנית תאם במדויק את השקפתי</p>
                <p>.שכולם שווים ולכולם מגיעה הזדמנות שניה</p>
                <p>,מאז אני מלווה כמנטורית</p>
                <p>,בשאיפה לאפשר לכמה שיותר אסירים משוחררים ללא קשר לעבירה שביצעו</p>
                <p>,לרכוש מיומנויות להצלחה בחיים ולהשתלב בחזרה בקהילה</p>
                <p>.הצלחה שתלויה הן באסיר והן בקהילה שעליה לקבל</p>
                <p>.כמנטורים, אנו משמשים, בין היתר, כגשר ביניהם</p>
                <p>,במילים של אברהם לינקולן</p>
                <p>,אם נדע קודם היכן אנו נמצאים, ולאן פנינו מועדות“</p>
                <p>“.נוכל להחליט איך נגיב למה שקורה לנו</p>
              </span>
            </div>
          </div>

          <div className="rounded-lg shadow border-4 border-primary">
            <div className="p-5">
              <img className="w-1/2 rounded-lg sm:rounded-none sm:rounded-l-lg" src={moti} alt="moti" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-secondary text-center py-3">
                <a href="#">מוטי זיו</a>
              </h3>
              <span className="text-primary text-right">
                <p>.עד לפני כ-15 שנה, עצמאי בענף המזון</p>
                <p>.מתנדב בחכמה ובאדיבות בהרבה עמותות המקדמות נושאים חברתיים חשובים</p>
                <p>.מנטור מסור וותיק בעמותה</p>
                <p> במילים שלו, כל אסיר שהשתחרר ושילם את חובו לחברה</p>
                <p>,יש את הזכות לחזור לשגרת חיים נורמטיביים ורגילים</p>
                <p>.ועלינו לתת לו את האפשרות אם בחר בכך</p>
                <p>,“אני שמח מאוד להשתתף בתכנית “בגובה העיניים</p>
                <p>כי אני מאמין שלכל אדם שטעה יש זכות</p>
                <p>“.לתקן את מעשיו כדי שנוכל להאמין בו שוב</p>
              </span>
              <iframe
              className="py-5 h-full w-full"
                src="https://www.youtube.com/embed/cDu8_H-KPhI?si=xgR07Q2ujL38Edph"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
              </iframe>
            </div>
          </div>

          <div className="rounded-lg shadow border-4 border-primary">
            <div className="p-5">
              <img className="w-1/2 rounded-lg sm:rounded-none sm:rounded-l-lg" src={eti} alt="moti" />
              <h3 className="py-3 text-xl font-bold tracking-tight text-gray-900 dark:text-secondary text-center">
                <a href="#">עו״ד אתי חצואל</a>
              </h3>
              <span className="text-primary text-right">
                <p>.עוסקת בדיני עבודה</p>
                <p>.מנטור, מתנדבת גם ברשות לשיקום האסיר</p>
                <p>,פועלת מתוך אמונה כי המאמצים לשיקום האסיר המשוחרר</p>
                <p>,מעבר להיותם חשובים והכרחיים להשתלבותו בחברה</p>
                <p>.הינם אינטרס חברתי וציבורי מהמעלה הראשונה</p>
              </span>
            </div>
          </div>

          <div className="rounded-lg shadow border-4 border-primary">
            <div className="p-5">
              <img className="w-1/2 rounded-lg sm:rounded-none sm:rounded-l-lg" src={hemi} alt="hemi" />
              <h3 className="py-3 text-xl font-bold tracking-tight text-gray-900 dark:text-secondary text-center">
                <a href="#">חמי (נחמה) קניטל</a>
              </h3>
              <span className="text-primary text-right">
                <p>.CBT יועצת חינוכית בבית ספר תיכון בעבר, מטפלת בגישת</p>
                <p>.מנטור בעמותה</p>
                <p>,רואה חשיבות רבה במתן הזדמנות לאדם שמעד, ושילם חובו לחברה</p>
                <p>.להשתלב בקהילה, לפרנס בכבוד את משפחתו ולגדל את ילדיו בסביבה מצמיחה</p>
                <p>,בכך ניתן למנוע את חזרתו למעגל הפשיעה</p>
                <p>.והחברה תרוויח אזרח מתפקד ומועיל</p>
              </span>
            </div>
          </div>

          <div className="rounded-lg shadow border-4 border-primary">
            <div className="p-5">
              <img className="w-1/2 rounded-lg sm:rounded-none sm:rounded-l-lg" src={shlomit} alt="shlomit" />
              <h3 className="py-3 text-xl font-bold tracking-tight text-gray-900 dark:text-secondary text-center">
                <a href="#">שלומית כהן</a>
              </h3>
              <span className="text-primary text-right">
                <p>.בעלת ניסיון של 20 במשאבי אנוש, גיוס ורווחה</p>
                <p>.מ-2022, מעצבת פנים וסטיילניג</p>
                <p>אני מרגישה זכות להיות חלק מארגון שמספק עזרה ייחודית</p>
                <p>.ומותאמת אישית לאנשים שחוזרים לחברה אחרי ריצוי מאסר</p>
                <p>אני מאמינה בערבות הדדית</p>
                <p>.וביכולת שלנו להביא לשינוי חיובי בחייהם של אחרים</p>
                <p>,כמנטורית, אני מעניקה מעטפת ותמיכה אישית</p>
                <p>מסייעת בתהליכי ההסתגלות ומתן כלים פרקטיים</p>
                <p>,לקידום השתלבותם כאזרחים שווי הזדמנויות</p>
                <p>.מתוך תפיסה שלכל אדם יש אופציה לשנות את הסיפור שלו</p>
                <p>.מאמינה בכוח של הקהילה ומתרגשת להיות חלק מהמסע לשינוי חיובי ושיקומי</p>
              </span>
            </div>
          </div>
        </div>

        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="text-center text-gray-800 text-5xl mb-24 mt-24 pb-2 font-sans relative StyledTitle">
              משפיע רוחני
              <span className="block w-40 h-1 bg-green-700 absolute bottom-0 left-1/2 transform -translate-x-1/2"></span>
            </h2>
            <div className="rounded-lg shadow bg-gradient-to-t from-primary to-gray-800 dark:bg-primary dark:border-gray-700">
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">פרופ’ שלמה גיורא שוהם</a>
                </h3>
                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={shlomo} alt="Jese Avatar" />
                <span className="text-white text-right text-bold">
                  <p>.פרופסור אמריטוס, אונ’ תל אביב</p>
                  <p>,חתן פרס ישראל (2007) , זוכה פרס א.מ.ת (2007)</p>
                  <p>.ופרסים בינלאומיים רבים</p>
                  <p>.כתב וערך כשבעים ספרים, ובנוסף לכך כתב מאות מאמרים שהופיעו בכתבי עת אקדמיים</p>
                  <p>,תחומי כתיבתו מגוונים וכוללים פילוסופיה, פסיכולוגיה, קרימינולוגיה, סוציולוגיה, משפטים</p>
                  <p>.דת, היסטוריה, קבלה ופוליטיקה. כתב גם מחזה ורומן</p>
                  <p>,בסוף שנות השבעים פיתח, יחד עם פרופ’ יהודה פריד</p>
                  <p>“את שיטת הטיפול האקזיסטנציאליסטית “התרפיה הפרומיתאית</p>
                  <p>,לשיקומם של המכורים לסמים</p>
                  <p>.שיושמה בהצלחה במוסדות רבים וכן בבית הסוהר חרמון</p>
                  <p>.בשבילנו, אדם נדיר, נדיב ויקר שהאמין ותומך בחזון העמותה מהרגע הראשון</p>
                  <div className="flex justify-center pt-10">
                    <Link to="https://he.wikipedia.org/wiki/%D7%A9%D7%9C%D7%9E%D7%94_%D7%92%D7%99%D7%95%D7%A8%D7%90_%D7%A9%D7%95%D7%94%D7%9D">
                      <p className="text-center text-white font-semibold mx-2 hover:text-tertiary transition duration-200 ease-linear p-4 border-solid border-2 border-white rounded-lg">
                        לקריאה נוספת
                      </p>
                    </Link>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Board
