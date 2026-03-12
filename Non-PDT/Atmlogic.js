// / Your JavaScript code here
let balance = 5000;
let pin = 1234;

// Step 1 — PIN Verify karo
let inputPin = Number(prompt("🏧 Welcome to ATM!\nPlease Enter Your PIN:"));

if(inputPin === pin){
    console.log("✅ PIN Sahi Hai! Welcome!");
    console.log("💰 Aapka Current Balance: ₹" + balance);

    // Step 2 — Withdrawal Loop — Jab tak balance hai tab tak chalo
    let continueATM = false ;

    do{
        let withdrawl = Number(prompt(
            "💰 Aapka Balance: ₹" + balance + 
            "\n💸 Kitna Paisa Nikalna Hai? (0 Enter Karo Bahar Jaane Ke Liye):"
        ));

        // Case 1 — User ne 0 dala — Bahar jaana chahta hai
        if(withdrawl === 0){
            console.log("👋 Thank You! Phir Aana!");
            continueATM = false;
        }

        // Case 2 — Withdrawal balance se zyada hai
        else if(withdrawl > balance){
            console.log("❌ Insufficient Balance!");
            console.log("💰 Aapka Balance: ₹" + balance);
            console.log("💸 Aap Maang Rahe Hain: ₹" + withdrawl);
            console.log("⚠️ Aapke Paas ₹" + (withdrawl - balance) + " Kam Hain!");
            continueATM = false; // ✅ Stop — Balance kam hai
        }

        // Case 3 — Negative amount dala
        else if(withdrawl < 0){
            console.log("❌ Galat Amount! Negative Number Mat Dalo!");
        }

        // Case 4 — Sab Sahi — Transaction Karo
        else{
            balance = balance - withdrawl; // ✅ Balance update karo
            console.log("✅ Transaction Successful!");
            console.log("💸 Aapne Nikala: ₹" + withdrawl);
            console.log("💰 Bacha Hua Balance: ₹" + balance);

            // Agar balance 0 ho gaya
            if(balance === 0){
                console.log("⚠️ Aapka Balance Khatam Ho Gaya!");
                continueATM = false;
            }
        }

    }while(continueATM); // ✅ Jab tak true hai tab tak chalo

}else{
    // PIN Galat
    console.log("❌ Galat PIN! Access Denied!");
}
