function openModal(photoId) {
    var modal = document.getElementById("myModal");
    var fullImg = document.getElementById("fullImage");
    
    switch (photoId) {
        case 'photo1':
            fullImg.src = 'large_photo1.jpg'; // Полноразмерное изображение
            break;
        case 'photo2':
            fullImg.src = 'large_photo2.jpg';
            break;
        // Добавьте больше случаев для других изображений
    }
    
    modal.style.display = "block"; // Показываем модальное окно
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none"; // Скрываем модальное окно
}