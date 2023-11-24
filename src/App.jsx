import AddBudgetModal from './Components/AddBudgetModal';
import AddExpenseModal from './Components/AddExpenseModal';
import { Routes,Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Profile from './Components/Profile';
import Summary from './Components/Summary';
import Home from './Components/Home';
import './App.css';
import NaveBare from './Components/NaveBare';



function App() {


  return (
    <>
      <div>
        <section>
            <div className='frame'>
               <div className='screen'>
                        {/* device base elements */}
                        <div className='device'>
                              <div className='face'><div className='eyes'></div></div>
                              <span className="material-symbols-rounded">wifi</span>
                              <span className="material-symbols-rounded">signal_cellular_alt</span>
                              <span className="material-symbols-rounded">battery_full</span>
                              <span>12:30</span>
                        </div>

                        {/* here the main page */}
                      <article title='here you can view ,overview your budgets' className='w-full h-auto grow rounded-xl drop-shadow-2xl flex flex-col '>
                            <Routes><Route path='/' element ={ <Home/>}></Route></Routes>
                            <Routes><Route path='/addBudget' element ={  <AddBudgetModal />}></Route></Routes>
                            <Routes><Route path='/addExpense' element ={<AddExpenseModal  />}></Route></Routes>
                            <Routes><Route path='/menu' element ={<Menu/>}></Route></Routes>
                            <Routes><Route path='/profile' element ={<Profile/>}></Route></Routes>
                            <Routes><Route path='/summary' element ={<Summary/>}></Route></Routes>
                           
                       </article>

                       {/* NavBar */}
                       <NaveBare />
               </div>
            </div>
        </section>
      </div>
    </>
  );
}

export default App;