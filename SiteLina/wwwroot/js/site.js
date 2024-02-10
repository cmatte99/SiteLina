// site.js

$(document).ready(function () {
    // Function to calculate the total based on the number of hours and the charge per hour
    function calculateTotal() {
        var hours = parseFloat($("#hours").val());

        // Validate if hours is a positive number
        if (isNaN(hours) || hours <= 0) {
            $("#hoursError").text("Please enter a positive number.");
            return;
        } else {
            $("#hoursError").text("");
        }

        var chargePerHour = parseFloat($("#chargePerHour").val());
        var total = hours * chargePerHour;

        // Display the total in the output box
        $("#total").val(total.toFixed(2));
    }

    // Attach the calculateTotal function to the click event of the calculate button
    $("#calculateButton").on("click", function () {
        calculateTotal();
    });
});
