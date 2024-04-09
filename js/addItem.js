document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addItemForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const itemName = document.getElementById('itemName').value;
        const itemUrl = document.getElementById('itemUrl').value;

        const itemsData = JSON.parse(localStorage.getItem('newItems') || '[]');

        itemsData.push({ name: itemName, url: itemUrl });

        localStorage.setItem('newItems', JSON.stringify(itemsData));

        window.location.href = 'view-akamai-icons.html';
    });
});
