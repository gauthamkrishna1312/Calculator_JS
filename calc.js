function clickButton(val){
    document.getElementById("screen").value += val
}
function clearDisplay(){
    document.getElementById("screen").value = " "
}
function clearNum() {
    var currentText = document.getElementById("screen").value
    var clearedValue = currentText.substring(0, currentText.length - 1);
    document.getElementById("screen").value = clearedValue
}  
function getResult(){
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById('screen').value = result
}