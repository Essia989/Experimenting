

function liked(element)
{
    if (element == 1)
    {
        var a  = document.querySelector("#first-like");
        console.log(a.innerHTML);
        a.innerHTML = Number(a.innerHTML)+1;
    }
    else if (element == 2)
    {
        var a  = document.querySelector("#scnd-like");
        console.log(a.innerHTML);
        a.innerHTML = Number(a.innerHTML)+1;
    }
    else{
        var a  = document.querySelector("#third-like");
        console.log(a.innerHTML);
        a.innerHTML = Number(a.innerHTML)+1;
    }
}