function openModal(photoId) {
    var modal = document.getElementById("myModal");
    var fullImg = document.getElementById("fullImage");
    
    switch (photoId) {
        case 'photo1':
            fullImg.src = 'large_photo1.jpg'; 
            break;
        case 'photo2':
            fullImg.src = 'large_photo2.jpg';
            break;
        
    }
    
    modal.style.display = "block"; 
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none"; 
}