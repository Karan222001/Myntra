
const filterBtn = document.getElementById('filter-btn');
filterBtn.addEventListener('click' , () => {    
    const filterCont = document.getElementById('filter-cont');
    filterCont.classList.toggle('filterContClass');    
    document.getElementsByTagName('body').innerHTML = "Ia";
})
const closeBtn = document.querySelector('#close');
closeBtn.addEventListener('click' , () => {
    const filterCont = document.getElementById('filter-cont');
    console.log("clicked close");
    filterCont.classList.toggle('filterContClass');
})

document.getElementById('emptyarea').addEventListener('click' , () =>{
    const el = document.getElementById('sort-cont');
    console.log(el);
    el.classList.toggle("animateit");
    console.log(el);
});
document.getElementById('sortButton').addEventListener('click' , ()=>{
    const el = document.getElementById('sort-cont');
    el.classList.toggle("animateit");  
    console.log(el);
})
