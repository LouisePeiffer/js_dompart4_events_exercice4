let forme = document.querySelector('#box')
console.log(forme);
forme.setAttribute('style', 'border: 3px solid black;height: 300px;width:300px')

let i = 0
forme.addEventListener('click', ()=>{
    if (i == 0) {
        forme.setAttribute('style', 'border: 3px solid black;height: 300px;width:300px ;border-radius: 50%; transition:all 2s')
        setTimeout(() => {
            forme.setAttribute('style', 'border: 3px solid black;height: 300px;width:300px ;border-radius: 50%; transition:all 2s;background-color:red')
        }, 3000);
        i++
    } else {
        forme.setAttribute('style', 'border: 3px solid black;height: 300px;width:300px;transition:all 2s')
        i--
    }
})

