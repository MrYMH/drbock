const gapBtn = document.querySelectorAll("#gap");

gapBtn.forEach(btn => {
   
    btn.addEventListener("click" , (e) => {
        gapBtn.forEach(e => {
            e.setAttribute("aria-checked" , "false")
        });
        btn.setAttribute("aria-checked" , "true")
        
    })
});




// const btn = document.querySelectorAll("#tablebtn");
// const mark = document.querySelectorAll("#check");
// const add = document.querySelectorAll("#add");
// add.forEach(tr => {
    
//     console.log(btn);
    
    
//     btn[tr].addEventListener('click' , (e) => {
//         btn[tr].setAttribute('aria-checked' ,'false');
//         mark[tr].setAttribute('aria-checked' ,'false');
        
//     })
// });