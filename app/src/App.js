import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contact';
import Footer from './components/Footer';
import Tariffs from './components/Tariffs';
import Menu from './components/Menu';
import Designers from './components/Designers';
import Showcase from './components/Showcase';
import Services from './components/Services';
import Packages from './components/Packages';
function App() {
  return(
    <>
	<Menu/>
	<div className="main">
		<h1>Interior Design</h1>
		<Showcase/>
		<Services/>
		<Designers/>
		<Packages/>
		<Tariffs/>
		<Contacts/>
	</div>
	<Footer/>
	</>
    
  );
}

export default App;
