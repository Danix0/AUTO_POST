// refresh.js
import fetch from "node-fetch";

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;

const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

const res = await fetch("https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": `Basic ${auth}`
  },
  body: new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken
  })
});

const data = await res.json();
console.log("Nowy token:", data.access_token);

