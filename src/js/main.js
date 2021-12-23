document.documentElement.classList.add('js-enabled');

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
}

let aTargets = document.querySelectorAll('.slide-in');
let observer = new IntersectionObserver(callback, options);
for (const target of aTargets) {
    observer.observe(target);
}
function callback(entries, observer) {
    entries.forEach(entry => {
        // chaque élément de entries correspond à une variation
        // d'intersection pour un des éléments cible:
        console.log(entry.isIntersecting);
        if (entry.isIntersecting){
            entry.target.classList.add('active');
        }else{
            entry.target.classList.remove('active');
        }
    });
};
















// window.addEventListener('scroll', (event)=>{
//     for (const eImg of aImgs) {
//         if (scrollY>=eImg.offsetTop){
//         eImg.classList.add('active');
//         }else if(scrollY < eImg.offsetTop){
//             eImg.classList.remove('active');
//         }
//     }
// });

