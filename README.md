# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

This challenge is to build out this dashboard and get it looking as close to the design as possible.

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Switch between viewing Daily, Weekly, and Monthly stats

Expected behaviour:
The text for the previous period's time should change based on the active timeframe. For Daily, it should read "Yesterday" e.g "Yesterday - 2hrs". For Weekly, it should read "Last Week" e.g. "Last Week - 32hrs". For monthly, it should read "Last Month" e.g. "Last Month - 19hrs".

### Screenshot

![](images\screenshot.png)

### Links

-   Solution URL: (https://github.com/nngocphi/time-tracking-dashboard)
-   Live Site URL: (https://nngocphi.github.io/time-tracking-dashboard/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow

### What I learned

HTML: Learned how to add svg file, export svg code from svg file

```html
<span class="category__menu">
	<svg
		class="category__menu-icon"
		xmlns="http://www.w3.org/2000/svg"
		width="21"
		height="5"
	>
		<path
			d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
			fill="#BBC0FF"
			fill-rule="evenodd"
		/>
	</svg>
</span>
```

CSS: Learned to use variables and mobile-first workflow

```css
:root {
	--blue: hsl(246, 80%, 60%);
	--work: hsl(15, 100%, 70%);
	--play: hsl(195, 74%, 62%);
	--study: hsl(348, 100%, 68%);
	--exercise: hsl(145, 58%, 55%);
	--social: hsl(264, 64%, 52%);
	--self-care: hsl(43, 84%, 65%);

	--very-dark-blue: hsl(226, 43%, 10%);
	--dark-blue: hsl(235, 46%, 20%);
	--desaturated-blue: hsl(235, 45%, 61%);
	--pale-blue: hsl(236, 100%, 87%);
	--card-hover: hsl(236, 41%, 34%);
}
```

JS: Learned to fetch API and insert HTML

```js
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
```

### Continued development

Fetch APIs

## Author

-   Website - [Phi Nguyen](https://www.linkedin.com/in/nguyenngocphi/)
-   Frontend Mentor - [@nngocphi](https://www.frontendmentor.io/profile/nngocphi)

## Acknowledgments

-   Refer other's projects
-   Refer on Youtube
