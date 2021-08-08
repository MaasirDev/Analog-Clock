document.querySelector('.cont').addEventListener('click',()=>{
    const body = document.querySelector('body')
    // console.log(body)
    body.classList.toggle('light')
    
    if (Array.from( body.classList).includes('light')) {
        console.log("happy")
        document.querySelector('.text').textContent = "Dark Mode"
    }
    else{
        document.querySelector('.text').textContent = "Light Mode"
        
    }
})

// const doc = document.querySelector('.toggle')
const deg = 6;
const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')  
function time() {  
    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*deg;
    let ss = day.getSeconds()*deg;
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
} 
time();
setInterval(() => {
    time()
}, 1000);