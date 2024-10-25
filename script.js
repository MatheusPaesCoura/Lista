
const input = document.querySelector("input")
const form = document.querySelector("form")
const titleBuy = document.getElementById("title-buy")
const guests = document.querySelector("ul")
const deleteIcon = document.getElementById("icon-delete")
const emptyCircle = document.getElementById("circle")
const item = document.querySelector("li")
const alert = document.getElementById("alert")
const imgDel = document.getElementById("imgDel")



input.addEventListener("input", () =>{
    console.log(input.value)
})



form.onsubmit = (event) => {
    event.preventDefault()

    const buy = input.value;
    console.log(buy);

    newBuy(buy)
}  


check(emptyCircle)
deleteItem(deleteIcon, item)




function check(circleImage){
    circleImage.addEventListener("click", () =>{
        if(circleImage.src.includes("Default.svg")){
            circleImage.src = "./images/state=selected.svg"
        }else{
            circleImage.src = "./images/state=Default.svg"
        }
    })
}

function newBuy(txt){

    try {

        const newGuests = document.createElement("li")
        newGuests.classList.add("itens-list")
        newGuests.classList.add("grid")
        newGuests.classList.add("grid-3")


        const guestTitle = document.createElement("h2")
        const circleImg = document.createElement("img")
        const imgDelete = document.createElement("img")

        circleImg.src = "./images/state=Default.svg"
        circleImg.alt = "Cirulo para o check"
        circleImg.id = "circle"
        
        guestTitle.textContent = `${txt}`

        imgDelete.src = "./images/icon delete.svg"
        imgDelete.alt = "Icone para deletar"
        imgDelete.id = "icon-delete"

        newGuests.append(circleImg, guestTitle, imgDelete)
        guests.append(newGuests)

        check(circleImg)
        deleteItem(imgDelete, newGuests)


        input.value = '';

        

        
    } catch (error) {
        console.log(error)
        alert("Não foi possível adicionar")
    }
    

}

function deleteItem(iconDlt, itemName){
    iconDlt.addEventListener("click", () =>{
        itemName.remove()
        alert.classList.remove("disableAlert")
        removeAlert()

    })
}

function removeAlert(){
    imgDel.addEventListener("click", () =>{
        alert.classList.add("disableAlert")
    })
}