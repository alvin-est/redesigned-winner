import Navigation from './Navigation';

function Header() {
  return (
    <header className="container grid">
      <nav>
      {/* <h1 className="h1-header">Your Name</h1> */}
        <ul><li><h1>Alvin Estado</h1></li></ul>
        <Navigation />
      </nav>
    </header>
  );
}

export default Header;