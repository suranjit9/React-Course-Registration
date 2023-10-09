
import { useState } from 'react'
import './App.css'
import BookCourses from './assets/Courses/BookCourses'
import Courses from './assets/Courses/Courses'
import Header from './assets/Header'
import Cadits from './assets/Courses/Cadite/Cadits'
import TotalPrice from './assets/Courses/Cadite/TotalPrice'
import RemeningCadit from './assets/Courses/Cadite/RemeningCadit'


function App() {
  const [cards, setCards] = useState([]);
  const [hour, setHour] = useState(0);
  const [price, setPrice] = useState(0);
  const [CaditHour, setCaditHour] = useState(20);
  // const [dis, setDis] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleCard = (card, time, pricex) => {
    const newCard = [...cards, card]
    setCards(newCard);
    // total Cadit
    setHour(hour + time);
    setPrice(price + pricex);
    if (CaditHour > 0) {
      setCaditHour(CaditHour - time);
    } else {
      setShowAlert(true);

    }
  }


  return (
    <div className='w-[90%] mx-auto' >
      <header>
        <Header />
      </header>
      <section className='flex mx-auto gap-4'>
        <div className='w-4/4'>
          <Courses
            handleCard={handleCard}
          ></Courses>
        </div>

        {/* Course Sclection Part */}
        <div className='w-2/3 '>
          <RemeningCadit
            CaditHour={CaditHour}
            showAlert={showAlert}
          ></RemeningCadit>
          <BookCourses
            cards={cards}

          ></BookCourses>
          <Cadits
            hour={hour}
          ></Cadits>
          <TotalPrice
            price={price}
          ></TotalPrice>

        </div>

      </section>

    </div>
  )
}

export default App
