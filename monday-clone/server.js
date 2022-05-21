const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json())

const urL = 'https://760ed6c3-146d-464d-b7e1-295c3314e3b8-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token = 'AstraCS:efkbkWKWAqcBWpaZWUQjnaRw:4c5233cf12a1b23aba168c18003b4128ba9f8d28317a7835c4111484905de622'

app.post('/tickets', async ( req, res ) => {
    const formData = req.body.formData
  
    const options = {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'X-Cassandra-Token': token,
        'Content-Type': 'application/json',
      },
      data: formData,
    }

    try {
        const response = await axios(urL, options)
        res.status(200).json(response.data)

    } catch (err) {
        console.log(err)
        res.status(500).json({message: err})
    }

})



app.listen(PORT, () => console.log(`Server listening on port on ${PORT}`))