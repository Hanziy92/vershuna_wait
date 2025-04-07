
  const launchDate = new Date("2025-04-21T12:00:00").getTime(); 

  const countdown = document.getElementById("countdown");

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance < 0) {
      clearInterval(interval);
      countdown.innerHTML = "Додаток вже запущено!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `До запуску залишилось: ${days} дн. ${hours} год. ${minutes} хв.`;
  }, 1000);

  document.getElementById("subscribe-form").addEventListener("submit", async function(e) {
   e.preventDefault();
 
   const form = e.target;
   const data = {
     email: form.email.value,
     phone: form.phone.value,
     wish: form.wish.value
   };
 
   const response = await fetch("https://script.google.com/macros/s/AKfycbyqnhEUjJYpYmdpX2u0arqM1ljogRaPg9-9aSjL9a1RxJxzasqxU2XldVRmALdlTSesdg/exec", {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(data)
   });
 
   if (response.ok) {
     document.getElementById("response-message").textContent = "✅ Дякуємо! Ви будете серед перших!";
     form.reset();
   } else {
     document.getElementById("response-message").textContent = "⚠️ Сталася помилка. Спробуйте ще раз.";
   }
 });

