document.addEventListener("DOMContentLoaded", function() {
    const places = document.querySelectorAll(".place");

    places.forEach(place => {
        place.addEventListener("click", function() {
            this.classList.toggle("show-text"); // Agrega o quita la clase "show-text" al elemento al hacer clic
        });
    });
});
