const forms = document.querySelectorAll(".needs-validation");

Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
})();

function calcularTotal() {
  const precio = 1000;
  let cant = document.getElementById("cantidad").value;
  if (cant >= 1) {
    let total = cant * precio;

    let desc = document.getElementById("descuento").value;

    total = total - (total * desc) / 100;

    document.getElementById("total").innerHTML = total;
  }
}
