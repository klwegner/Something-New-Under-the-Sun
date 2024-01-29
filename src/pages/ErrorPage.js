import oops from '../assets/oops.gif';

function ErrorPage() {
    return(
        <div className="errorPage">
        <h1>Oops!</h1>
        <p>This page does not exist</p>
        
<img src={oops} alt="oops" />

        </div>
    )
}

export default ErrorPage;