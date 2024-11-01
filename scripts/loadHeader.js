document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html") // Cambia esta ruta si `header.html` está en otra carpeta
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        })
        .catch(error => {
            console.error("There has been a problem with your fetch operation:", error);
        });
});
