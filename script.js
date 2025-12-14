document.getElementById("formulario").addEventListener("submit", async function(e) {
  e.preventDefault();

  const datos = Object.fromEntries(new FormData(e.target));

  const respuesta = await fetch(https://hook.eu1.make.com/nu47yh9emkoujexk7r1yr6hfo3nbm68g
, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos)
  });

  const texto = await respuesta.text();
  document.getElementById("resultado").innerText = texto;
});
