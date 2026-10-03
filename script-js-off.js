
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
                document.cookie = "cookiesBy= Offaborthype; max-age="+ 2000200 * 6120 * 914 * 200;         
            }
        });
    });

 };


 // ok
 window.addEventListener("load", executeCodes);
    console.log("https://offabort.com/29938520");  
