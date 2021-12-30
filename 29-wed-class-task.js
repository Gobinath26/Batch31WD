//--------------------------------------Tasl 1------------------------------------------------
class Account{
    constructor(name,accno,balance){
        this.name=name;
        this.accno=accno;
        this.balance=balance;
    }
    getbalance(){
        return `${this.name} your  current balance is : ₹${this.balance}`;
    }
    getaccno(){
        return `${this.name} your accno is : ${this.accno}`;
    }
    withdraw(amount){
        if (this.balance>=amount){
            this.balance=this.balance-amount;
            //console.log("The balance is :", this.balance);
            console.log(`Amount withdawal successfully.`)
            return `${this.name} your current balance is : ₹${this.balance}`
        }else{
            return `Insufficient balance. ${this.name} Your current balance is : ₹${this.balance} `;
        }
    }
    deposit(amount){
        this.balance=this.balance+amount;
        console.log(`Amount deposited successfully : ₹${amount}`);
        return `${this.name} your current balance is : ₹${this.balance}`; 
    }  
}
const gobinath= new Account("gobinath",150,50_000);
const ram= new Account("Ram",152,1_00_000);
const ajith= new Account("Ajith",153,1_40_000);
const arun= new Account("Arun",154,3_00_000);
const vishnu= new Account("Vishnu",155,2_00_000);

console.log(gobinath.getbalance());
console.log(ram.getaccno());
console.log(ajith.withdraw(2_40_000));
console.log(arun.withdraw(1_00_000));
console.log(vishnu.deposit(50_000)); //2_50_000
//------------------------------------------Task-2---------------------------------------------------------

const getCountries = () => {
    console.log("Getting countries....");
    //creating the request
    const xhr = new XMLHttpRequest();
    //Reading the data
    //METHOD, URL
    xhr.open("GET", "https://restcountries.com/v3.1/all"); //open
    xhr.send(); //send

    xhr.responseType = "json"; //data format

    //after getting the response, what we should do? _ print on console
    xhr.onload = () => {
        const countries = xhr.response; //1
        console.log("Full data", countries);
        //------------------------------------------------------
        const countriesNames = countries.map((country)=>country.name.common); //2
        console.log(countriesNames);
        //------------------------------------------------------
        // const spanishspeckingcountry = countries.filter((country)=>country.languages.spa);
        // console.log(spanishspeckingcountry);
        // const spanishspeckingcountryNames = spanish_specking_country.map((country)=>country.name.common);
        // console.log(spanishspeckingcountryNames);
        //-------------------------------------------------------
        const populationabove1crcountries = countries.filter((country)=>country.population>100_00_000)
        console.log(populationabove1crcountries);
        const populationabove1crcountriesNames = populationabove1crcountries.map((country)=>country.name.common);
        console.log(populationabove1crcountriesNames);
    };

};
getCountries();



