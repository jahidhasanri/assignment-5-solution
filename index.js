// frist div
document.getElementById('fristDonatebtn').addEventListener('click',function(){
    const fristInput= getInputValue('fristDonateInput');
    const totalMoneyOfMyAcount=getvalueWithtext('myTotalMoney');
    const totalMenyeFristDiv=getvalueWithtext('totalamountfrist');
    
    if (isNaN(fristInput) || fristInput <= 0 || fristInput>totalMoneyOfMyAcount) {
        alert('Please try again!');
    }
   
    else{
        const updateTotalMoneyOfMyAcount=totalMoneyOfMyAcount-fristInput;
        document.getElementById('myTotalMoney').innerText= updateTotalMoneyOfMyAcount;
        
        
        const fristDivTotalMoney=totalMenyeFristDiv+fristInput;
        document.getElementById('totalamountfrist').innerText=fristDivTotalMoney;
        const modal = document.getElementById('my_modal_1');
        modal.showModal();
        
        
        const historyItem=document.createElement("div");
        historyItem.className=
        "bg-white p-3 rounded-md border-2 border-gray-200 mb-5 w-8/12 mx-auto";
        historyItem.innerHTML=`
        <p class="mb-3 lg:text-2xl font-bold">${fristInput} Taka is Donated for Flood at Noakhali, Bangladesh</p>
        <p>Date: ${new Date()} GMT +0600 (Bangladesh Standard Time)</p>    
        
        `
        const historycontainer=document.getElementById('history-item');
        historycontainer.insertBefore(historyItem, historycontainer.firstChild)
    }
    document.getElementById('modabtn').addEventListener('click',function(){
        document.getElementById('fristDonateInput').value = ' ';
    })
   
})
// second div

document.getElementById('secondDonateBtn').addEventListener('click',function(){
    const secondInput= getInputValue('secondDonateInput');
    const totalMoneyOfMyAcount=getvalueWithtext('myTotalMoney');
    const totalMoneyeSecondDiv=getvalueWithtext('totalamountsecond');
    
    if (isNaN(secondInput) || secondInput <= 0 || secondInput>totalMoneyOfMyAcount) {
        alert('Please try again!');
    }
    else{
        const updateTotalMoneyOfMyAcount=totalMoneyOfMyAcount-secondInput;
        document.getElementById('myTotalMoney').innerText= updateTotalMoneyOfMyAcount;
    
    
        const secondDivTotalMoney=totalMoneyeSecondDiv+secondInput;
        document.getElementById('totalamountsecond').innerText=secondDivTotalMoney;
        const modal = document.getElementById('my_modal_1');
        modal.showModal();

        const historyItem=document.createElement("div");
        historyItem.className=
        "bg-white p-3 rounded-md border-2 border-gray-200 w-8/12 mx-auto mb-5 mt-5";
        historyItem.innerHTML=`
            <p class="mb-3 lg:font-bold text-2xl ">${secondInput} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
            <p>Date: ${new Date()} GMT +0600 (Bangladesh Standard Time)</p>    
        
        `
        const historycontainer=document.getElementById('history-item3');
        historycontainer.insertBefore(historyItem, historycontainer.firstChild)
       
    }


    document.getElementById('modabtn').addEventListener('click',function(){
        document.getElementById('secondDonateInput').value = ' ';
    })
})

// thrid div

document.getElementById('thridDonateBtn').addEventListener('click',function(){
    const thridInput= getInputValue('thridDonateInput');
    const totalMoneyOfMyAcount=getvalueWithtext('myTotalMoney');
    const totalMoneyeThridDiv=getvalueWithtext('totalamountThrid');
    
    if (isNaN(thridInput) || thridInput <= 0 || thridInput>totalMoneyOfMyAcount) {
        alert('Please try again!');
    }
    else{
        const updateTotalMoneyOfMyAcount=totalMoneyOfMyAcount-thridInput;
        document.getElementById('myTotalMoney').innerText= updateTotalMoneyOfMyAcount;
    
    
        const secondDivTotalMoney=totalMoneyeThridDiv+thridInput;
        document.getElementById('totalamountThrid').innerText=secondDivTotalMoney;
        const modal = document.getElementById('my_modal_1');
        modal.showModal();

        const historyItem=document.createElement("div");
        historyItem.className=
        "bg-white p-3 rounded-md border-2 border-gray-200 w-8/12 mx-auto";
        historyItem.innerHTML=`
            <p class="mb-3 lg:font-bold text-2xl">${thridInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
            <p>Date: ${new Date()} GMT +0600 (Bangladesh Standard Time)</p>    
        
        `
        const historycontainer=document.getElementById('history-item2');
        historycontainer.insertBefore(historyItem, historycontainer.firstChild)

       
    }

    
    
    document.getElementById('modabtn').addEventListener('click',function(){
        document.getElementById('thridDonateInput').value = ' ';
    })
})




// go to home html

document.getElementById('blog').addEventListener('click',function(){
    window.location.href='./blog.html';
})


// history btn1
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
donationTab.addEventListener('click',function()
{
    donationTab.classList.add("bg-[#B4F461]"
        ,"rounded-lg",
        "border-1"
        ,"border-[#B4F461]"
        ,"font-semibold"
    ,"text-[#111111]");
    document.getElementById('mainborder').classList.remove("hidden");
    historyTab.classList.remove("bg-[#B4F461]"
        ,"rounded-lg",
        "border-1"
        ,"border-[#B4F461]"
        ,"font-semibold",
        "text-[#111111]");
        document.getElementById('history-item').classList.add("hidden");
})
// history btn2
const donationTabs=document.getElementById('donationtab')
const historyTabs=document.getElementById('history-tab')
historyTabs.addEventListener('click',function()
{
    historyTabs.classList.add("bg-[#B4F461]"
        ,"rounded-lg",
        "border-1"
        ,"border-[#B4F461]"
        ,"font-semibold",
        "text-[#111111]");
    donationTabs.classList.remove("bg-[#B4F461]"
                ,"rounded-lg",
                "border-1"
                ,"border-[#B4F461]"
                ,"font-semibold"
            ,"text-[#111111]");
            document.getElementById('mainborder').classList.add("hidden");
            document.getElementById('history-item2').classList.remove("hidden");
            document.getElementById('nav').classList.add("mt-[480px]");
}
)
donationTabs.addEventListener('click',function()
{
    donationTabs.classList.add("bg-[#B4F461]"
        ,"rounded-lg",
        "border-1"
        ,"border-[#B4F461]"
        ,"font-semibold"
    ,"text-[#111111]");
    document.getElementById('mainborder').classList.remove("hidden");
    historyTabs.classList.remove("bg-[#B4F461]"
        ,"rounded-lg",
        "border-1"
        ,"border-[#B4F461]"
        ,"font-semibold",
        "text-[#111111]");
        document.getElementById('history-item2').classList.add("hidden");
        document.getElementById('nav').classList.remove("mt-[480px]");
})
// history btn3
const donationTabss=document.getElementById('donationtab')
const historyTabss=document.getElementById('history-tab')
historyTabss.addEventListener('click',function()
{
    historyTabss.classList.add("bg-[#B4F461]"
        ,"rounded-lg",
        "border-1"
        ,"border-[#B4F461]"
        ,"font-semibold",
        "text-[#111111]");
    donationTabss.classList.remove("bg-[#B4F461]"
                ,"rounded-lg",
                "border-1"
                ,"border-[#B4F461]"
                ,"font-semibold"
            ,"text-[#111111]");
            document.getElementById('mainborder').classList.add("hidden");
            document.getElementById('history-item3').classList.remove("hidden");
}
)
donationTabss.addEventListener('click',function()
{
    donationTabss.classList.add("bg-[#B4F461]"
        ,"rounded-lg",
        "border-1"
        ,"border-[#B4F461]"
        ,"font-semibold"
    ,"text-[#111111]");
    document.getElementById('mainborder').classList.remove("hidden");
    historyTabss.classList.remove("bg-[#B4F461]"
        ,"rounded-lg",
        "border-1"
        ,"border-[#B4F461]"
        ,"font-semibold",
        "text-[#111111]");
        document.getElementById('history-item3').classList.add("hidden");
})
// document.getElementById('modalBtn').addEventListener('click',function(){
//     window.location.fristInput.reload();
//    })



