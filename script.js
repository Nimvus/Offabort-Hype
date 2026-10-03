const Signinbtn = document.getElementById('signin');
const Signin = document.querySelector(".label-login span");
const Workbtn = document.getElementById('worxus');
const Working = document.querySelector(".label-work span");
const Done = document.getElementById('signedin');
const Inside = document.getElementById('registered');




 // Initialize as null initially
Reave.addEventListener("click", () =>{
    window.close();
   
}),
 Open.addEventListener("click", ()=>{
    Mart.style.display = "none";
    Cuky.style.display = "none";
}),

Conton.addEventListener("click", ()=>{
    Sticky.style.display = "none";
    Poofy.style.display = "none";                   
    Card.style.display = "none";
  
}),
Aurtho.addEventListener("click", ()=>{
    Sticky.style.display = "none";
    Poofy.style.display = "none";                   
    Card.style.display = "none";
  
}),
// Example modification for XP purchase
Transb.addEventListener("click",  () => {
    Sticky.style.display = "none";
    Poofy.style.display = "none";
    Card.style.display = "none";
});
  
// JavaScript code
function search_games() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('games');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}
Workbtn.addEventListener("click",  async() => {
    // Visual changes you already have
    Working.style.display = "flex";  
    Signin.style.opacity = "0";
   

  // Example logic to send registration data
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    const response = await fetch('register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `email=${email}&password=${password}`
    });

    const result = await response.text();
    console.log(result); // Handle success or error
});
Iconfix.addEventListener("click", ()=>{
        Searchicon.style.opacity = "1";
        SearchVar.style.opacity = "1";
      
}),
Signinbtn.addEventListener("click", ()=>{
     Working.style.opacity = "0";
     Signin.style.display = "flex";       
}),
Done.addEventListener("click", ()=>{
        Signin.style.display = "none";
}),
Inside.addEventListener("click", ()=>{
        Working.style.display = "none";
});
const executeCodes = () => {
    // 2. Get the cookieBox element inside the function.
    // This must be done AFTER the DOM is ready.
    cookieBox = document.querySelector(".cookie-box"); // Assuming it has a class of "cookie-box"
    buttons = document.querySelectorAll(".button");

    // 3. Check if cookieBox exists BEFORE using it.
    if (!cookieBox) {
        console.log("Offabort Hype V.2.11.2");
        return; // Stop execution if the element is missing.
    }
        
    if (document.cookie.includes("Offaborthype")) return;        
    cookieBox.classList.add("show");

    buttons.forEach((button) =>{
        button.addEventListener("click", ()=>{
            cookieBox.classList.remove("show");
            //acceptBtn
            if (button.id == "acceptBtn") {
                //month
                document.cookie = "cookiesBy= Offaborthype; max-age="+ 200 * 120 * 314 * 90;         
            }
        });
    });

 };


 // ok
 window.addEventListener("load", executeCodes);
    console.log("https://offabort.com/29938520");  
