import './App.css';
function App() {
  return (
    <div className='div__main'>
      <div className='div__card'>
        <img className='img__photo' src="../images/photo.jpg" alt="img"></img>
        
        <div className='div__info'>
          <h3>Зв'язатися</h3>
          <h4>valentyn.lola@gmail.com</h4>
          <h4>8 (098) 266-7643</h4>
          <h3>Адреса</h3>
          <h4>бул.Будівельників 53-84</h4>
          <h4>м. Кам'янське</h4>
          <h4>Дніпропетровська обл.</h4>
          <h4>51940</h4>
          <div className='div__link'>
            <a className='a__link' href=''>LinkedIn</a>
            <a className='a__link' href=''>Instagram</a>
            <a className='a__link' href=''>Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
