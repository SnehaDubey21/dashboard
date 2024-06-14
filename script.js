document.addEventListener('DOMContentLoaded', function() {
    const notificationButton = document.querySelector('.notification-button');
    const notificationContent = document.getElementById('notificationContent');
    const toggleDarkModeButton = document.querySelector('.toggle-dark-mode');

    notificationButton.addEventListener('click', function() {
        notificationContent.style.display = 
            notificationContent.style.display === 'none' || notificationContent.style.display === '' 
            ? 'block' 
            : 'none';
        if (document.body.classList.contains('dark-mode')) {
            notificationContent.classList.add('dark-mode');
        } else {
            notificationContent.classList.remove('dark-mode');
        }
    });

    toggleDarkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('dark-mode')) {
            notificationContent.classList.add('dark-mode');
        } else {
            notificationContent.classList.remove('dark-mode');
        }
    });
});

function registerForSeminar() {
    alert('Successfully registered');
}








