const input = document.getElementById("input")


function reverseString(krc){
    return krc.split("").reverse().join("")
}

function tıkla() {

    const value = input.value
    const reverse = reverseString(value);
    
    if (value === reverse){
        alert("Tebrikler! P A L İ N D R O M E")

    }else{
        alert("Yanlışşş!!!")
    }
  
  input.value = ""

}