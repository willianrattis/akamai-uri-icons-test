document.addEventListener('DOMContentLoaded', () => {
    const itemsData = JSON.parse(localStorage.getItem('newItems') || '[]');
    if (itemsData.length > 0) {
        // Assume .row exists in the markup
        const container = document.querySelector('.container .row');
        itemsData.forEach(item => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-md-4';

            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';

            const cardHeaderDiv = document.createElement('div');
            cardHeaderDiv.className = 'card-header';
            cardHeaderDiv.textContent = item.name;

            const imgTopContainerDiv = document.createElement('div');
            imgTopContainerDiv.className = 'card-img-top-container';

            const img = document.createElement('img');
            img.className = 'card-img-top';
            img.src = item.url;
            img.alt = item.name;

            imgTopContainerDiv.appendChild(img);
            cardDiv.appendChild(cardHeaderDiv);
            cardDiv.appendChild(imgTopContainerDiv);
            colDiv.appendChild(cardDiv);

            container.appendChild(colDiv);
        });
    }
});

function clearItems() {
    localStorage.removeItem('newItems');

    const container = document.querySelector('.container .row');
    if (container) {
        container.innerHTML = '';
    }

    window.location.reload();
}
