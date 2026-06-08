function bankAccount() {
  let balance = 1000;
  function deposite(Ammount){
    balance += Ammount;
    console.log("Balance :" + balance);
  }
return deposite;
}

const user = bankAccount();

user(500);
user(200);
user(100);