

console.log ( 'Page loaded!');
function Message(element)
{
    if (element.innerHTML==="Logout")
    {
        element.innerHTML = "Login";
        alert(" You have successfully logged out!");
        
    }
    else
    {
        element.innerHTML = "Logout";
        alert("You have successfully logged in!");
        
    }
}

function liked(element)
{
    alert("You have successfully liked this page!");
}