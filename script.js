const anosText = document.getElementById("anos");
const mesesText = document.getElementById("meses");
const diasText = document.getElementById("dias");
const horasText = document.getElementById("horas");
const minutosText = document.getElementById("minutos");
const segundosText = document.getElementById("segundos");

const dateInput = document.getElementById("date");
const btnDate = document.getElementById("button-date");

btnDate.addEventListener("click", (e) => {
  e.preventDefault();
  btnDate.setAttribute("disabled", true);

  const futuro = `${dateInput.value} 00:00:00`;

  function contador() {
    const futuroData = new Date(futuro);
    const dataAtual = new Date();

    const totalSegundos = (futuroData - dataAtual) / 1000;

    if (
      futuroData <= dataAtual ||
      isNaN(futuroData)
    ) {
      location.reload();
      return alert("data invalida");
    } else {
      const anos = Math.floor(totalSegundos / 3600 / 365 / 24);
      const meses = Math.floor(totalSegundos / 3600 / 30 / 24);
      const dias = Math.floor(totalSegundos / 3600 / 24);
      const horas = Math.floor(totalSegundos / 3600) % 24;
      const minutos = Math.floor(totalSegundos / 60) % 60;
      const segundos = Math.floor(totalSegundos) % 60;



      anosText.innerHTML = anos;
      mesesText.innerHTML = meses;
      diasText.innerHTML = formatarTempo(dias);
      horasText.innerHTML = formatarTempo(horas);
      minutosText.innerHTML = formatarTempo(minutos);
      segundosText.innerHTML = formatarTempo(segundos);
    }
  }

  function formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
  }
  
  setInterval(contador, 1000);
});


