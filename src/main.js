const button = document.querySelector('#button')

button.addEventListener('click',function(){
    const input = document.querySelector('#input')
    const temp = input.value
    let html = card(temp)
    document.querySelector('#list').innerHTML += html
})

function card (text) {
    return `<div class="flex justify-center gap-5">
            <input type="checkbox" checked="" class="checkbox text-4xl checkbox-neutral" placeholder="m"/>
            <h1 class="font-medium text-2xl">${text}</h1>
            <button type="button" onclick="deletes(event)" class="text-6xl text-red-700 rounded-2xl -mt-3 cursor-pointer hover:text-black">×</button>
            </div>`
}

function deletes(e) {
    e.target.parentElement.remove()
}
