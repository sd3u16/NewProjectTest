ule = document.getElementById('unordered')


function hasClass(element, clsName) {
    return(' ' + element.className + ' ').indexOf(' ' + clsName + ' ') > -1;
}

document.querySelectorAll('li').forEach(function (elem){

    elem.addEventListener('click',function (){
        if(hasClass(elem,'done')){
            elem.classList.toggle('done')
        }
        else{
            elem.setAttribute('class', 'done')
        }
    })
})


haso = false

var no = document.getElementById('enter')

no.addEventListener('click',function (){
    var lol = document.getElementById('userinput').value


    var nodet = document.createTextNode(lol)
    var lipo = document.createElement('li')

    var container = document.createElement('div')
    container.setAttribute('class', 'contains')
    var delB = document.createElement('button')
    delB.textContent = 'Delete'


    lipo.appendChild(nodet)
    lipo.addEventListener('click',function (){

        if(hasClass(lipo,'done')){
            lipo.classList.toggle('done')
        }
        else{
            lipo.setAttribute('class', 'done')
        }
    })
    container.appendChild(lipo)
    container.appendChild(delB)


    delB.addEventListener('click',function (){
        delB.parentElement.remove()
    })

    ule.querySelectorAll('li').forEach(function (elemm){
        if(elemm.textContent === lipo.textContent){
            haso = true
        }

    })

    ule.childNodes.forEach(function (eleme){

        if (eleme.textContent === container.textContent){
            haso = true
        }
    })

    if(haso === false){
        ule.appendChild(container)
        container.style.display = 'flex'



    }



    haso = false

})


allCons = document.getElementsByClassName('contains')

console.log(allCons)

















