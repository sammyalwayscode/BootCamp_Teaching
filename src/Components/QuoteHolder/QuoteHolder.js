import React, { useState } from 'react'


const quote = [
  {
    proverbs: "It is Not of him that willet nor of hom that runnet but of God that Showet Mercy  ",
    author: "Gedion"
  },

  {
    proverbs: "The more deep into wisdom the more danger you bring into youuself ",
    author: "Joshua"
  },

  {
    proverbs: "Alone you can do little Together YOu can do much ",
    author: "Yusuf"
  },

  {
    proverbs: "Never Give Up... Keep Trying ",
    author: "Samuel"
  },

  {
    proverbs: "Be Good to every One ",
    author: "John"
  },

]


function QuoteHolder() {
  const [counter, setCounter] = useState(1)
  return (
    <div>
      <center  >
        <div>The Quote Holder</div>
        <div> {quote.length} </div>
      </center>
      <hr />
      <section onClick={() => {
        setCounter(counter + 1)
        console.log(counter)
      }} style={{ cursor: "pointer" }} > {quote[counter % quote.length].proverbs} </section>
      <section >...{quote[counter % quote.length].author}</section>
    </div>
  )
}

export default QuoteHolder
