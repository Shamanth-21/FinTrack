// Helpers
const currency = v => '$' + Number(v).toLocaleString(undefined, {maximumFractionDigits:0});

// Line: Income vs Expenses (Jan–Sep)
{
  const el = document.getElementById('lineIncomeExpense');
  if (el) new Chart(el, {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'],
      datasets: [
        { label: 'Income',  data: [3000,3000,3100,3000,3200,3200,3200,3200,3200], tension: .3 },
        { label: 'Expenses',data: [1800,1900,2000,1850,2100,2050,2150,2200,2300], tension: .3 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { position: 'bottom' },
        tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${currency(ctx.parsed.y)}` } }
      },
      scales: {
        y: { beginAtZero: true, ticks: { callback: v => currency(v) }, grid: { drawBorder: false } },
        x: { grid: { display: false } }
      }
    }
  });
}

// Bar: Spending by Category (Sep 2025)
{
  const el = document.getElementById('barCategory');
  if (el) new Chart(el, {
    type: 'bar',
    data: {
      labels: ['Rent','Groceries','Utilities','Dining','Transport','Entertainment','Health'],
      datasets: [{ label: 'Sep 2025', data: [1200,142,146,42,45,13,35] }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: 'bottom' },
        tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${currency(ctx.parsed.y)}` } }
      },
      scales: {
        y: { beginAtZero: true, ticks: { callback: v => currency(v) }, grid: { drawBorder: false } },
        x: { grid: { display: false } }
      }
    }
  });
}

// Pie: Budget Allocation (%)
{
  const el = document.getElementById('pieBudget');
  if (el) new Chart(el, {
    type: 'pie',
    data: {
      labels: ['Rent','Food','Utilities','Transport','Entertainment','Savings'],
      datasets: [{ data: [40,15,10,8,7,20] }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' } }
    }
  });
}
