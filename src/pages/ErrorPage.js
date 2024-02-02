import danger from "../assets/danger.gif";

function ErrorPage() {
  return (
    <div className="errorPage">
      <h1>Oops!</h1>
      <p>This page does not exist</p>

      <img src={danger} alt="oops" />
    </div>
  );
}

export default ErrorPage;
