var num1, num2, larger,
num1 = window.prompt ("Enter an integer", "0");
num2 = window.prompt ("Enter the second integer", "0");
    if (parseInt(num1, 10) > parseInt(num2, 10))
    larger = num1;
    else
    larger = num2;
document.write("<p>The larger of ", num1, " and ", num2 ," is ", larger, "</p>");