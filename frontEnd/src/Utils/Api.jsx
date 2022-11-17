import axios from 'axios'

function Api() {
  return (
    <div>
      { axios.create({
		baseURL: "http://localhost:4000/api/"
	}) }
    </div>
  )
}

export default Api
