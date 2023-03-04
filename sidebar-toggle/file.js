document.querySelector(".sidebar-menu .toggle-btn").addEventListener('click',function(){
    document.querySelector('.sidebar-menu').classList.toggle('active');
});

document.querySelectorAll('.sidebar-menu .sidebar .links .link a').forEach(function(link){
    link.addEventListener('click',function(e){
        if(e.target.parentNode.children.length > 1){
            e.target.parentNode.classList.toggle('active');
        }
    });
});