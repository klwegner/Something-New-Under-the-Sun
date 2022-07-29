function Navbar() {
    return(
        <nav>
        <div>
        <h1>Under the Sun</h1>
        </div>
        <div className="navLinks">
            <a href="/signup">Sign Up</a>
            <a href="/login">Login</a>
            <a href='/'>Home</a>
            <a href='/Profile/:profileId'>Your Profile</a>
            <a href='/error'>Error</a>
            </div>
        </nav>
    )
}

export default Navbar;