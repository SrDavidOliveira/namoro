function atualizaContador() {
  // Pega a data de início do namoro
  const dataInicio = new Date("2017-08-26T00:00:00");

  // Pega a data atual
  const dataAtual = new Date();

  // Calcula a diferença entre as datas em milissegundos
  const diferenca = dataAtual.getTime() - dataInicio.getTime();
  // Calcula os dias, horas, minutos e segundos
  const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
  const meses = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.43)
  );
  const dias = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24 * 30.43)) / (1000 * 60 * 60 * 24)
  );

  const horas = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Formata a saída
  const resultado = `
        <span class="anos">${anos} Anos</span>
        <span class="meses">${meses} Meses</span>
        <span class="dias">${dias} Dias</span>
        <span class="horas">${horas} Horas</span>
        <span class="minutos">${minutos} Minutos</span>
        <span class="segundos">${segundos} Segundos</span>

    `;
  // Atualiza o elemento com o resultado
  document.getElementById("contador").innerHTML = resultado;
}

// Atualiza o contador a cada segundo
setInterval(atualizaContador, 1000);

// Pega o ID do audio
const podcastAudio = document.getElementById('podcast-audio');

const playBtn = document.getElementById('podcast-play');

const pauseBtn = document.getElementById('podcast-pause');

// Play audio & mostra pause btn
function playShow() {
  podcastAudio.play();
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'block';
}

// Pause audio & mostra play btn
function pauseShow() {
  podcastAudio.pause();
  playBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
}

// Event listeners
playBtn.addEventListener('click', playShow);
pauseBtn.addEventListener('click', pauseShow);