
document.addEventListener('DOMContentLoaded', function () {
    var menuModal = document.getElementById('menuModal');

    // Event listener pour l'affichage du menu
    var menuButton = document.querySelector('a[href="#menu"]');
    menuButton.addEventListener('click', function (e) {
        e.preventDefault();
        $(menuModal).modal('show');
    });
});

   

$(document).ready(function () {
    $('#menuModal').modal('hide'); // Assurez-vous que le modal est bien initialisé
});
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner le formulaire
    var form = document.querySelector('#reservation form');

    // Ajouter un écouteur d'événement pour la soumission du formulaire
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêcher le comportement par défaut du formulaire

        // Récupérer les valeurs des champs du formulaire
        var nom = document.getElementById('nom').value;
        var email = document.getElementById('email').value;
        var date = document.getElementById('date').value;
        var personnes = document.getElementById('personnes').value;

        // Vérifier si tous les champs requis sont remplis
        if (nom === '' || email === '' || date === '' || personnes === '') {
            alert('Veuillez remplir tous les champs requis.');
        } else {
            alert('Votre réservation a bien été prise en compte.');
        }
    });
});




