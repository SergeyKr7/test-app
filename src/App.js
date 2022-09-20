
import './App.css';
import union from './images/Union.png';
import background from './images/background.png';
import stroy from './images/строительная компания.png';
import orda from './images/ОРДА.png'
import vector from './images/Vector 143.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className='logo'>
       <img className='union' src={union} alt = 'no img'/>
       <img className='background' src={background} alt = 'no img'/>
       <img className='orda' src={orda} alt = 'no img'/>
       <img className='stroy' src={stroy} alt = 'no img'/>
       </div>
        <div className='list-menu'>
          <div className='project'>Проекты</div>
          <div className='uslugi'>Услуги</div>
          <div className='techno'>Технологии</div>
          <div className='about'>О нас</div>
          <div className='news'>Новости</div>
          <div className='clients'>Клиентам</div>
        </div>
        <div className='button-menu'>
          <button className='button'>
            <div className='button-text'>
            <span className='text'>Оставить заявку </span>
            <img className='vector' src={vector} alt ='no img'/>
            </div>
            
          </button>
        </div>
       
      </header>
    </div>
  );
}

export default App;
