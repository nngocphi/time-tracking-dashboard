let timeframe = 'weekly';
const dashboard = document.querySelector('.dashboard');
let categoryCards;

// 1. Initialize menu
const periodItems = document.querySelectorAll('.main__period-item');

periodItems.forEach((element) => {
	element.addEventListener('click', menuOnClick);
});

// 2. Get JSON Data & Create category cards
let data = {};
fetch('/js/data.json')
	.then((response) => response.json())
	.then((jsonData) => {
		jsonData.forEach((element) => {
			dashboard.insertAdjacentHTML(
				'beforeend',
				createCategoryCard(element, timeframe)
			);
		});
		jsonData.forEach((element) => {
			data[element.title] = element.timeframes;
		});
		categoryCards = document.querySelectorAll('.category');
	});

// Functions
const timeframeMsg = {
	daily: 'Yesterday',
	weekly: 'Last week',
	monthly: 'Last month',
};

function menuOnClick(event) {
	periodItems.forEach((element) => {
		element.classList.remove('active');
	});
	event.target.classList.add('active');
	timeframe = event.target.innerText.toLowerCase();

	updateCards(timeframe);
}

function updateCards(timeframe) {
	categoryCards.forEach((card) => {
		updateCard(card, timeframe);
	});
}

function updateCard(card, timeframe) {
	const title = card.querySelector('.category__title').innerText;
	const current = data[title][timeframe]['current'];
	const previous = data[title][timeframe]['previous'];
	const hoursElement = card.querySelector('.current-hour');
	hoursElement.innerText = `${current}hrs`;
	const msgElement = card.querySelector('.previous-hour');
	msgElement.innerText = `${timeframeMsg[timeframe]} - ${previous}hrs`;
}

function createCategoryCard(element, timeframe) {
	let title = element['title'];
	let current = element['timeframes'][timeframe]['current'];
	let previous = element['timeframes'][timeframe]['previous'];

	return `
        <div class="category ${title.toLowerCase().replace(/\s/g, '-')}">
        <div class="category__info">
            <div class="category__top">
            <span class="category__title">${title}</span>
            <span class="category__menu">
                <svg class="category__menu-icon" xmlns="http://www.w3.org/2000/svg" width="21" height="5">
                <path
                    d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                    fill="#BBC0FF" fill-rule="evenodd" />
                </svg>
            </span>
            </div>
            <div class="category__time">
            <div class="current-hour">${current}hrs</div>
            <div class="previous-hour">
                ${timeframeMsg[timeframe]} - ${previous}hrs
            </div>
            </div>
        </div>
        </div>
    `;
}
