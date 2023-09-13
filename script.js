//Function that updates total cost based on quantity inputs
const updateTotal = () => {
    
    //Get quantity value from input field
    const qtyChai = parseInt(document.getElementById('chaitea').value) || 0;
    const qtyEarl = parseInt(document.getElementById('earlgrey').value) || 0;
    const qtyGreen = parseInt(document.getElementById('greentea').value) || 0;
    const qtyWhite = parseInt(document.getElementById('whitetea').value) || 0;
    const qtyAssam = parseInt(document.getElementById('assamtea').value) || 0;

    //Set prices for each type of tea
    const priceChai = 5.5;
    const priceEarl = 5.0;
    const priceGreen = 4.5;
    const priceWhite = 4.5;
    const priceAssam = 5.0;

    //Calculate and displays total cost of the order
    const total = (qtyChai * priceChai) + (qtyEarl * priceEarl) + (qtyGreen * priceGreen) + (qtyWhite * priceWhite) + (qtyAssam * priceAssam);

    const totalInput = document.getElementById('total');
    totalInput.value = `$${total.toFixed(2)}`;
};

//Event listener to update total if quantity input is inputted
document.getElementById('chaitea').addEventListener('input', updateTotal);
document.getElementById('earlgrey').addEventListener('input', updateTotal);
document.getElementById('greentea').addEventListener('input', updateTotal);
document.getElementById('whitetea').addEventListener('input', updateTotal);
document.getElementById('assamtea').addEventListener('input', updateTotal);

