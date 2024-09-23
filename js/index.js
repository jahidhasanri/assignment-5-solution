// frist div
document.getElementById('fristDonatebtn').addEventListener('click',function(){
    const fristInput= getInputValue('fristDonateInput');
    const totalMoneyOfMyAcount=getvalueWithtext('myTotalMoney');
    const totalMenyeFristDiv=getvalueWithtext('totalamountfrist');
    
    if (typeof fristInput !== 'number' || isNaN(fristInput) || fristInput < 0 || fristInput > totalMoneyOfMyAcount) {
        alert('Please enter a valid donation amount!');
    } 
   
    else{
        const updateTotalMoneyOfMyAcount=totalMoneyOfMyAcount-fristInput;
        document.getElementById('myTotalMoney').innerText= updateTotalMoneyOfMyAcount;
        
        
        const fristDivTotalMoney=totalMenyeFristDiv+fristInput;
        document.getElementById('totalamountfrist').innerText=fristDivTotalMoney;
        const modal = document.getElementById('my_modal_1');
        modal.showModal();
        
        
    }
    // const fristInput= getInputValue('fristDonateInput');
const historyItem=document.createElement("div");
historyItem.className=
"bg-white p-3 rounded-md border-2 border-indigo-500 w-8/12 mx-auto";
historyItem.innerHTML=`
<p>${fristInput} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
<p>Date: ${new Date().toLocaleDateString()}</p>    

`
const historycontainer=document.getElementById('history-item');
historycontainer.insertBefore(historyItem, historycontainer.firstChild)
})
// second div

document.getElementById('secondDonateBtn').addEventListener('click',function(){
    const secondInput= getInputValue('secondDonateInput');
    const totalMoneyOfMyAcount=getvalueWithtext('myTotalMoney');
    const totalMoneyeSecondDiv=getvalueWithtext('totalamountsecond');
    
    if (isNaN(secondInput) || secondInput < 0 || secondInput>totalMoneyOfMyAcount) {
        alert('Please try again!');
    }
    else{
        const updateTotalMoneyOfMyAcount=totalMoneyOfMyAcount-secondInput;
        document.getElementById('myTotalMoney').innerText= updateTotalMoneyOfMyAcount;
    
    
        const secondDivTotalMoney=totalMoneyeSecondDiv+secondInput;
        document.getElementById('totalamountsecond').innerText=secondDivTotalMoney;

    }
})

// thrid div

document.getElementById('thridDonateBtn').addEventListener('click',function(){
    const thridInput= getInputValue('thridDonateInput');
    const totalMoneyOfMyAcount=getvalueWithtext('myTotalMoney');
    const totalMoneyeThridDiv=getvalueWithtext('totalamountThrid');
    
    if (isNaN(thridInput) || thridInput < 0 || thridInput>totalMoneyOfMyAcount) {
        alert('Please try again!');
    }
    else{
        const updateTotalMoneyOfMyAcount=totalMoneyOfMyAcount-thridInput;
        document.getElementById('myTotalMoney').innerText= updateTotalMoneyOfMyAcount;
    
    
        const secondDivTotalMoney=totalMoneyeThridDiv+thridInput;
        document.getElementById('totalamountThrid').innerText=secondDivTotalMoney;

    }
})


// go to home html

document.getElementById('blog').addEventListener('click',function(){
    window.location.href='/html/blog.html';
})


// history btn
const donationTab=document.getElementById('donationtab')
const historyTab=document.getElementById('history-tab')
historyTab.addEventListener('click',function()
{
    historyTab.classList.add("bg-[#B4F461]"
        ,"rounded-lg",
        "border-1"
        ,"border-[#B4F461]"
        ,"font-semibold",
        "text-[#111111]");
    donationTab.classList.remove("bg-[#B4F461]"
                ,"rounded-lg",
                "border-1"
                ,"border-[#B4F461]"
                ,"font-semibold"
            ,"text-[#111111]");
            document.getElementById('mainborder').classList.add("hidden");
            document.getElementById('history-item').classList.remove("hidden");
}
)





