function getInputValue(id){
    const inputValue=document.getElementById(id).value;
    const value=parseFloat(inputValue);
    return value;
}
function getvalueWithtext(id){
    const textValue=document.getElementById(id).innerText;
    const value=parseFloat(textValue);
    return value;
}