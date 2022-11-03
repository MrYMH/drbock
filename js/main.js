const gapBtn = document.querySelectorAll("#gap");

gapBtn.forEach(btn => {
   
    btn.addEventListener("click" , (e) => {
        gapBtn.forEach(e => {
            e.setAttribute("aria-checked" , "false")
        });
        btn.setAttribute("aria-checked" , "true")
        
    })
});




const btn = document.querySelectorAll("#tablebtn");

const mark = document.querySelectorAll("#check");

for (let i = 0; i < 6; i++) {
    btn[i].addEventListener('click' , (e) => {
        btn[i].setAttribute('aria-checked' ,'false');
        mark[i].setAttribute('aria-checked' ,'true');
    })
    
}

















//const
const mobprofile = document.getElementById('mobprofile');
const mobmsg = document.getElementById('mobmsg');

//side
const side = document.getElementById('side');

// #profile
const prof = document.getElementById('profile');
// #msg
const msg = document.getElementById('msg');
// #addpost
const addpost = document.getElementById('addpost');

//convert to add post
const addBtn = document.getElementById('addPostBtn');

addBtn.addEventListener('click' , (e) => {
    prof.setAttribute('aria-selected' , 'false');
    addpost.setAttribute('aria-selected' , 'true');
    
})

//convert to msg page
const profbtn = document.getElementById('profbtn');
const msgbtn = document.getElementById('msgbtn');
function convertProfToMsg(e) {
    
        profbtn.removeAttribute('aria-current');
        msgbtn.setAttribute('aria-current' , 'page')
        prof.setAttribute('aria-selected' , 'false');
        msg.setAttribute('aria-selected' , 'true');
    
}
function convertMsgToProf(e) {
    msgbtn.removeAttribute('aria-current');
    profbtn.setAttribute('aria-current' , 'page')
    msg.setAttribute('aria-selected' , 'false');
    prof.setAttribute('aria-selected' , 'true');
}



msgbtn.addEventListener('click' , convertProfToMsg(e) )



profbtn.addEventListener('click' , convertMsgToProf(e))



mobprofile.addEventListener('click' , (e) => {
    if(side.style.display === 'block'){
        convertMsgToProf(e)
    }else{
        if (side.style.display === 'none') {
            side.style.display = 'block';
        }
    }
    
})


mobmsg.addEventListener('click' , (e) => {
    if(side.style.display === 'none'){
        side.style.display = 'block';
        convertProfToMsg(e)
    }else{
        if (side.style.display === 'block') {
            convertProfToMsg(e)
        }
    }
    
})



























//menu
const gap = document.getElementById('gap');
const menu = document.getElementById('mobmenu');

menu.addEventListener('click' ,(e) => {
    if (gap.style.display === 'none') {
        gap.style.display = 'flex';
    }else{
        if (gap.style.display === 'flex') {
            gap.style.display = 'none';
        }
    }
    
    
    
})









