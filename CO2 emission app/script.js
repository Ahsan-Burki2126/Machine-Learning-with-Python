function predict() {
  const data = {
    engineSize: parseFloat(document.getElementById("engineSize").value),
    cylinders: parseInt(document.getElementById("cylinders").value),
    fuelCity: parseFloat(document.getElementById("fuelCity").value),
    fuelHwy: parseFloat(document.getElementById("fuelHwy").value),
    fuelComb: parseFloat(document.getElementById("fuelComb").value),
    fuelMpg: parseFloat(document.getElementById("fuelMpg").value),
  };

  fetch("http://localhost:5000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      document.getElementById(
        "popup-value"
      ).innerText = `${result.prediction.toFixed(2)}`;
      showPopup();
    });
}

function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "flex";
  gsap.fromTo(
    ".popup-content",
    { scale: 0 },
    { scale: 1, duration: 0.5, ease: "back.out(1.7)" }
  );
}

function closePopup() {
  gsap.to(".popup-content", {
    scale: 0,
    duration: 0.3,
    ease: "back.in(1.7)",
    onComplete: () => {
      document.getElementById("popup").style.display = "none";
    },
  });
}
