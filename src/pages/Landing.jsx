import LandingHero from "../components/signedOut/LandingHero";
import LandingCourses from "../components/signedOut/LandingCourses";
import LandingFindUs from "../components/signedOut/LandingFindUs";
import courseData from "../data/landing.json";
import image06 from "../assets/images/landing-06.png";
import icon from "../assets/icons/separator.png";

export default function Landing() {
  const coursesInfo = courseData.courses.map((item, index) => (
    <LandingCourses item={item} key={item.text} index={index} />
  ));

  const findUsInfo = courseData.findUs.map((item) => (
    <LandingFindUs item={item} key={item.title} />
  ));

  return (
    <div className="landing">
      <LandingHero />
      <section className="landing-courses-wrapper">
        <h2>Courses</h2>
        {coursesInfo}
        <img className="separator" src={icon} alt="three dots in sequence" />
      </section>
      <section className="landing-prices">
        <h2>Prices</h2>
        <img
          className="prices"
          src={image06}
          alt="a card machine in an orange background"
        />
        <h3>
          We believe that education is a basic need. We have several types of
          courses, for all types of budgets. Call us, we will be happy to assist
          you with your needs.
        </h3>
        <img className="separator" src={icon} alt="three horizontal dots" />
      </section>
      <section className="landing-findus">
        <h2>Find us</h2>
        {findUsInfo}
      </section>
    </div>
  );
}
