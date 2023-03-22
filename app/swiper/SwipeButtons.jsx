import React from 'react'
import { FaDoorClosed, FaHeart, FaReplyAll } from 'react-icons/fa'

const [data, setData] = React.useState([
    { name: "John", age: 30, email: "john@example.com" },
    { name: "Jane", age: 25, email: "jane@example.com" },
    { name: "Bob", age: 40, email: "bob@example.com" }
  ]);
  
const SwipeButtons = () => {
  const [currentCard, setCurrentCard] = React.useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function handleCurrentCard() {
  setCurrentCard((currentCard - 1) % data.length);
  console.log('clicked')
  }

  const handleSave = () => {
    localStorage.setItem("data", JSON.stringify(data));
    window.location.href = "/savedjobs"; // redirect to other page
  };
  // In your other page/component, retrieve the data from local storage and use it as needed:
  //const otherData = JSON.parse(localStorage.getItem("data"));
  // console.log(otherData);
  //when localStorage.getItem("data") returns null. You can add conditional logic to check for this case and handle it accordingly.

  const handleNext = () => {
    setData(data.filter((_, index) => index !== currentIndex)); // remove current object
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1); // move to next object
  };
  //No more objects? when currentIndex === data.length - 1). You can add conditional logic to check for this case and handle it accordingly.
    
  return (
    <div className={styles.swipeButtons}>
        <p>{data[currentCard].name}</p>
      <button onClick={handleCurrentCard}>
        <FaReplyAll/>
      </button>
      <button onClick={handleSave}>
        <FaHeart/>
      </button>
      <button onClick={handleNext}>
        <FaDoorClosed/>
        <div>
          <h2>{data[currentIndex].name}</h2>
          <p>{data[currentIndex].age}</p>
          <p>{data[currentIndex].email}</p>
        </div>
      </button>
    </div>
  )
}

export default SwipeButtons
