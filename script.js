document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = Array.from(document.getElementsByClassName("button"));
    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = button.getAttribute("data-value");

            if (value === "=") {
                try {
                    currentInput = eval(currentInput);
                    display.value = currentInput;
                } catch {
                    alert("Invalid Input");
                    currentInput = "";
                    display.value = currentInput;
                }
            } else if (value === "C") {
                currentInput = "";
                display.value = currentInput;
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
