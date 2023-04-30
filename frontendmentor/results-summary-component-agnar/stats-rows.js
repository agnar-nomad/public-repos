import data from './data.json';

const statRow = (row) => `
          <section class="stats-row ">
            <span class="flex gap-2">
              <img src="${row.icon}" alt="${row.category} image" />
              <span class="stat-title">${row.category}</span>
            </span>
            <span>
              <span class="text-[#303b5a]">${row.score} </span
              ><span class="text-[#c8c7ff]">/ 100</span>
            </span>
          </section>`;

const dataToDisplay = data.map((row) => statRow(row));

document.querySelector('.stats-rows').innerHTML = dataToDisplay.join('');
