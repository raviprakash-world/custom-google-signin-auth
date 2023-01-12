const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");

app.use(bodyParser.json());

app.get("/auth/google", async (req, res) => {
  try {
    var accessToken = 'Accsess Token that you get from google authentication';
    
    makeRequest();
    async function makeRequest() {
      const config = {
        method: "get",
        url: "https://www.googleapis.com/userinfo/v2/me",
        headers: { Authorization: `Bearer ${accessToken}` },
      };

      let response = await axios(config);

      console.log(response.data);
      res.json(response.data);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
