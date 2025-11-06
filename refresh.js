// refresh.js
import fetch from "node-fetch";

const refreshToken = process.env.REFRESH_TOKEN;

const res = await fetch("https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    // Używamy klienta launcherAppClient2 (działa stabilnie)
    "Authorization": "basic ZWM2ODRiOGM2ODdmNDc5ZmFkZWEzY2IyYWQ4M2Y1YzY6ZTFmMzFjMjExZjI4NDEzMTg2MjYyZDM3YTEzZmM4NGQ="
  },
  body: new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken
  })
});

const text = await res.text();
console.log("Nowy token:", text);
