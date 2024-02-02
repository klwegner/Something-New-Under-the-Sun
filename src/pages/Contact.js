import Me from "../assets/IMG_9602.jpg";

function ContactPage() {
  return (
    <div className="basic">
      <h1>App Developed by Kristen Wegner</h1>
      <img src={Me} alt="Kristen"></img>
      <p>Email me at Klwegner@gmail.com.</p>
      <p>
        Find me on LinkedIn{" "}
        <a href="https://www.linkedin.com/in/kristenwegner/"> here</a>, or check
        out my <a href="kristenwegner.com/"> portfolio.</a>
      </p>
    </div>
  );
}

export default ContactPage;
