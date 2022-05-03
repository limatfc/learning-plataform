import LandingHero from "../components/signedOut/LandingHero";
import LandingCourses from "../components/signedOut/LandingCourses";
import LandingFindUs from "../components/signedOut/LandingFindUs";
import courseData from "../data/landing.json";
import image06 from "../assets/images/landing-06.png";

export default function Landing() {
  const coursesInfo = courseData.courses.map((item) => (
    <LandingCourses item={item} key={item.text} />
  ));

  const findUsInfo = courseData.findUs.map((item) => (
    <LandingFindUs item={item} key={item.title} />
  ));

  return (
    <div>
      <LandingHero />
      <section>
        <h2>Courses</h2>
        {coursesInfo}
      </section>
      <section>
        <h2>Prices</h2>
        <img src={image06} alt="a card machine in an orange background" />
        <h3>
          We believe that education is a basic need. We have several types of
          courses, for all types of budgets. Call us, we will be happy to assist
          you with your needs.
        </h3>
      </section>
      <section>
        <h2>Find us</h2>
        {findUsInfo}
      </section>
    </div>
  );
}
