
Object.defineProperty(Array.prototype,'flat',{value:function(depth){depth=1;return this.reduce(function(flat,toFlatten){return flat.concat((Array.isArray(toFlatten)&&(depth>1))?toFlatten.flat(depth-1):toFlatten)},[])},configurable:!0});const swiper=new Swiper('.swiper-container',{slidesPerView:1,loop:!0,pagination:{el:'.swiper-pagination',clickable:!0,},a11y:{paginationBulletMessage:'Здесь название слайда {{index}}',},});document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){tabsBtn.addEventListener('click',function(e){const path=e.currentTarget.dataset.path;document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){btn.classList.remove('tabs-nav__btn--active')});e.currentTarget.classList.add('tabs-nav__btn--active');document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){tabsBtn.classList.remove('tabs-item--active')});document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active')})});let burger=document.querySelector(".burger");let menu=document.querySelector(".header__nav");let menuLinks=menu.querySelectorAll('.header__link');let burgerClose=menu.querySelector(".burger__close");burger.addEventListener('click',function(){burger.classList.toggle('burger_active');menu.classList.toggle('header__nav_active');btnLoupe.disabled=!0;document.body.classList.toggle('stop-scroll')})
menuLinks.forEach(function(element){element.addEventListener('click',function(){burger.classList.remove('burger_active');menu.classList.remove('header__nav_active');btnLoupe.disabled=!1;document.body.classList.remove('stop-scroll')})
burgerClose.addEventListener('click',function(){burger.classList.remove('burger_active');menu.classList.remove('header__nav_active');btnLoupe.disabled=!1;document.body.classList.remove('stop-scroll')})})
let btnLoupe=document.querySelector('.header__search');let btnClose=document.querySelector('.input__close');let inputSearch=document.querySelector('.input-container');btnLoupe.addEventListener('click',function(){inputSearch.classList.toggle('input-container_active');btnLoupe.classList.toggle('header__search_hidden');burger.disabled=!0;document.body.classList.toggle('stop-scroll')})
btnClose.addEventListener('click',function(){inputSearch.classList.remove('input-container_active');btnLoupe.classList.remove('header__search_hidden');burger.disabled=!1;document.body.classList.remove('stop-scroll')})
