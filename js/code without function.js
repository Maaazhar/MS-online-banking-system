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
        const depositAmount = document.getElementById("depositAmount").value;
        if (depositAmount != "")
        {
            const depositNumber = parseFloat(depositAmount);

            const currentDeposit = document.getElementById("currentDeposit").innerText;
            const currentDepositNumber = parseFloat(currentDeposit);
            const newDeposit = depositNumber + currentDepositNumber; 

            const currentBalance = document.getElementById("currentBalance").innerText;
            const currentBalanceNumber = parseFloat(currentBalance);
            const newBalance = currentBalanceNumber + depositNumber;

            document.getElementById("currentDeposit").innerText = newDeposit;
            document.getElementById("currentBalance").innerText = newBalance;

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
        const withdrawAmount = document.getElementById("withdrawAmount").value;
        if (withdrawAmount != "") 
        {
            const withdrawNumber = parseFloat(withdrawAmount);
            
            const currentWithdraw = document.getElementById("currentWithdraw").innerText;
            const currentWithdrawNumber = parseFloat(currentWithdraw);
            const newWithdraw = withdrawNumber + currentWithdrawNumber;

            const currentBalance = document.getElementById("currentBalance").innerText;
            const currentBalanceNumber = parseFloat(currentBalance);
            const newBalance = currentBalanceNumber - withdrawNumber;

            document.getElementById("currentWithdraw").innerText = newWithdraw;
            document.getElementById("currentBalance").innerText = newBalance;

            document.getElementById("withdrawAmount").value = "";



        }
    }
);

