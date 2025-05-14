
fetch('feed.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('cards');
    data.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${p.bild}" alt="${p.titel}">
        <h2>${p.titel}</h2>
        <p>Plattform: ${p.plattform}</p>
        <p>Score: ${p.score} | CE: ${p.ce} | Ampel: <span class="${p.ampel}">${p.ampel}</span></p>
        <p>Trend: ${p.trend}</p>
        <p>EK: ${p.ek.toFixed(2)} € | VK: ${p.vk.toFixed(2)} €</p>
        <p>Händlerfreigabe: ${p.freigabe}</p>
        <a href="${p.link}" target="_blank">Zum Produkt</a>
      `;
      container.appendChild(card);
    });
  });
