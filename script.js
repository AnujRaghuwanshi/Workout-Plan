window.onload = function() {
    // Get the current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const today = new Date();
    const dayOfWeek = today.getDay();  // Sunday = 0, Monday = 1, etc.

    // Hide all workout sections by default
    const workoutSections = document.querySelectorAll('.workout-day');
    workoutSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the section corresponding to the current day
    switch (dayOfWeek) {
        case 0:
            document.getElementById('saturday').style.display = 'block';
            break;
        case 1:
            document.getElementById('monday').style.display = 'block';
            break;
        case 2:
            document.getElementById('tuesday').style.display = 'block';
            break;
        case 3:
            document.getElementById('wednesday').style.display = 'block';
            break;
        case 4:
            document.getElementById('thursday').style.display = 'block';
            break;
        case 5:
            document.getElementById('friday').style.display = 'block';
            break;
        case 6:
            document.getElementById('saturday').style.display = 'block';
            break;
    }
};
