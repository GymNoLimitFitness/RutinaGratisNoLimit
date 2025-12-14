document.getElementById("formulario").addEventListener("submit", async function(e) {
  e.preventDefault();

  const datos = Object.fromEntries(new FormData(e.target));

  const respuesta = await fetch("AQUI_VA_LA_URL_DE_MAKE", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos)
  });

  const texto = await respuesta.text();
  document.getElementById("resultado").innerText = texto;
});
