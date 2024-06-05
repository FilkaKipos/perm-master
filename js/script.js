document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.getElementById('cards-container');

    // Функция для создания карточки
    function createCard(title, imageUrl, description, tag) {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = imageUrl;
        card.appendChild(img);

        const cardTitle = document.createElement('h2');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = title;
        card.appendChild(cardTitle);

        const cardInfo = document.createElement('p');
        cardInfo.classList.add('card-info');
        cardInfo.textContent = truncateDescription(description, 6); // Ограничиваем краткую информацию 5 словами
        card.appendChild(cardInfo);

        const cardTag = document.createElement('p'); // Создаем элемент для тега
        cardTag.classList.add('card-tag');
        cardTag.textContent = `${tag}`; // Добавляем тег
        card.appendChild(cardTag);

        const button = document.createElement('a');
        button.classList.add('card-button');
        button.textContent = 'Подробнее';
        card.appendChild(button);

        cardsContainer.appendChild(card);
    }

    // Функция для ограничения краткой информации 5 словами
    function truncateDescription(description, wordsCount) {
        const words = description.split(' ');
        const truncatedWords = words.slice(0, wordsCount);
        return truncatedWords.join(' ');
    }

    // Заполнение карточек данными из data.js
    for (const item of data) {
        createCard(item.title, item.imageUrl, item.description, item.tag); // Добавляем tag к каждой карточке
    }
});
