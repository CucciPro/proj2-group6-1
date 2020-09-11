// get the current url
let url = window.location.href;

// assign nav elements to vars
let navLogin = document.getElementById('navLogin');
let navJoin = document.getElementById('navJoin');
let navDashboard = document.getElementById('navDashboard');
let navSpecies = document.getElementById('navSpecies');
let navLogout = document.getElementById('navLogout');

//nav rules
//login nav item should only show if user is not logged in and not on the join page
//join nav item should only show if user is not logged in and not on login page
//dashboard nav item should only show if user is logged in and not on the dashboard page
//species nav item should only show if user is logged in and user is not on the species page
//logout nav item should only show if user is logged in

// Check if URL contains the keyword
if ( url.search( '/login' ) > 0 ) {
    navLogin.style.display = "none";
    navJoin.style.display = "block";
    navDashboard.style.display = "none";
    navSpecies.style.display = "none";
    navLogout.style.display = "none";
}
else if ( url.search( '/join' ) > 0 ) {
    navLogin.style.display = "block";
    navJoin.style.display = "none";
    navDashboard.style.display = "none";
    navSpecies.style.display = "none";
    navLogout.style.display = "none";
}
else if ( url.search( '/dashboard' ) > 0 ) {
    navLogin.style.display = "none";
    navJoin.style.display = "none";
    navDashboard.style.display = "none";
    navSpecies.style.display = "block";
    navLogout.style.display = "block";
}
else if ( url.search( '/species' ) > 0 ) {
    navLogin.style.display = "none";
    navJoin.style.display = "none";
    navDashboard.style.display = "block";
    navSpecies.style.display = "none";
    navLogout.style.display = "block";
}
else if ( url.search( '/new-plant' > 0 ) || ( url.search( '/edit-plant' ) > 0 ) ) {
    navLogin.style.display = "none";
    navJoin.style.display = "none";
    navDashboard.style.display = "block";
    navSpecies.style.display = "block";
    navLogout.style.display = "block";
}
else if ( url.search( '/new-species' > 0 ) || ( url.search( '/edit-species' ) > 0 ) ) {
    navLogin.style.display = "none";
    navJoin.style.display = "none";
    navDashboard.style.display = "block";
    navSpecies.style.display = "block";
    navLogout.style.display = "block";
}
else if ( url.search( '/logout' ) > 0 ) {
    navLogin.style.display = "display";
    navJoin.style.display = "none";
    navDashboard.style.display = "none";
    navSpecies.style.display = "none";
    navLogout.style.display = "none";
}
