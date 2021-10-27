function countdown()
{
    for (counter=0;counter<3;counter++);
    {
        console.log(counter);
    }
}
setInterval(countdown,3000)