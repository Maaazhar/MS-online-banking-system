//Login button event handler
const loginBtn = document.getElementById('login-enter');
loginBtn.addEventListener
("click", 
    function()
    {
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
        const transactionArea = document.getElementById("transaction-area");
        transactionArea.style.display = "block";
    }
);

//deposit button event handler
const depositBtn = document.getElementById('submitDeposit');
depositBtn.addEventListener
("click",
    function()
    {
        const depositNumber = getInputNumber("depositAmount");
        if (depositNumber >= 0)
        {
            updateSpanText("currentDeposit",depositNumber);
            updateSpanText("currentBalance",depositNumber);

            document.getElementById("depositAmount").value = "";
        }
    }
);

//withdraw button event handler
const withdrawBtn = document.getElementById("submitWithdraw");
withdrawBtn.addEventListener
("click",
    function()
    {
        const withdrawNumber = getInputNumber("withdrawAmount");
        if (withdrawNumber >= 0) 
        {
            
            updateSpanText("currentWithdraw",withdrawNumber);
            updateSpanText("currentBalance",(-1*withdrawNumber));
            
            document.getElementById("withdrawAmount").value = "";
        }
    }
);

//functions
function getInputNumber(id) 
{
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;

}

function updateSpanText(id, added) 
{
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + added;
    document.getElementById(id).innerText = total;
}