
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
 
   const formData = new FormData();
formData.append("email", data.email);
formData.append("phone", data.phone);
formData.append("wish", data.wish);

const response = await fetch("https://script.google.com/macros/s/AKfycbyPP0a_8_ly_D1nBKa7cWCWi2wG8e51KOQ7ZFWd-feqaxEvcBr6mqsrwgZE6HPJK758/exec", {
  method: "POST",
  body: formData
});
 
   if (response.ok) {
     document.getElementById("response-message").textContent = "✅ Дякуємо! Ви будете серед перших!";
     form.reset();
   } else {
     document.getElementById("response-message").textContent = "⚠️ Сталася помилка. Спробуйте ще раз.";
   }
 });

