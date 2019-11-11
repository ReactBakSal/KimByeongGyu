import React, { useState } from "react"
import axios from "axios"

const API_KEY = "2e2682361adc4777a97f72b81f6bbb00"
const App = () => {
  const [data, setData] = useState(null)
  const onClick = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
    )
    setData(res.data)
  }

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly
        ></textarea>
      )}
    </div>
  )
}

export default App
