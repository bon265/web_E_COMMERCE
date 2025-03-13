
import './App.css'

import PageRoutes from './routes';
import { Link } from 'react-router-dom';


function App() {
console.log('chào');
  return (
    <>
    <h1>xin chào</h1>
    <PageRoutes />
    <nav>
      <ul>
        <Link to={'/'}>home </Link >
        <Link to={'/about'}>about </Link >
        <Link to={'/product'}>product </Link >
      </ul>
    </nav>
   <h2>xin chaof</h2>
    </>
  )
}

export default App
