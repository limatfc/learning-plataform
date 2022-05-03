import image01 from "../../assets/images/landing-01.png";
import image02 from "../../assets/images/landing-02.png";
import separator from "../../assets/icons/separator.png";

export default function LandingHero() {
  return (
    <section className="landing-hero">
      <img
        className="hero"
        src={image01}
        alt="an usual form colored with a gradient from green to orange, with an atom, a ruler, 2 books, a lamp, a hand and an Erlenmeyer"
      />
      <h1>Welcome to eEnglish</h1>
      <h2>Help your child go one step further in life!</h2>
      <h3>
        It is well known that children that grow up speaking 2 languages develop
        a broader set of skills that other children may struggle with.
      </h3>
      <h2>That's why we are here!</h2>
      <h3>
        We offer several playful courses designed to help you child learn how to
        speak English!
      </h3>
      <img
        className="trophy"
        src={image02}
        alt="a boy sorrounded by trophies, in a green background"
      />
      <img className="separator" src={separator} alt="three dots in sequence" />
    </section>
  );
}
