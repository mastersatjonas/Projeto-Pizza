let show = true
const menucontent = document.querySelector(".content")
const menutoggle = menucontent.querySelector(".menu-toggle")

menutoggle.addEventListener('click', () => {
    /*document.body.style.overflow = show ? 'hidden' : 'initial'*/
menucontent.classList.toggle('on',show);
show = !show;
});
