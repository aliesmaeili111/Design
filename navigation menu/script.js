const navBar = document.querySelector(".navbar")
      allli = document.querySelectorAll("li")

allli.forEach((li,index) => {
        li.addEventListener('click', e =>{
            e.preventDefault();
            navBar.querySelector('.active').classList.remove('active');
            li.classList.add('active');
            
            const indicator = document.querySelector('.indicator');
            indicator.style.transform = `translateX(calc(${index * 90}px))` 
    
        });
      });