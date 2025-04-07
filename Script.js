function processAddress() {

    var address = document.getElementById('address');
    var newAddress = document.getElementById('newAddress');

    else if (address.value.trim() === '') {
        alert("Please enter an address.");
    } else {
       
        var lowerCaseAddress = address.value.toLowerCase();
        newAddress.innerHTML = lowerCaseAddress;
    }
}

function processTitles() {
    var userinput = list.value.toLowerCase();
    if (userinput == '') {
        alert("input the book title")
    }
    else if (booklist.include(userinput)) {
        alert("Duplicate found");
    }
    else{
        alert("Thank you");
        newTitles.innerHTML ="Your book title is " + userinput 
    }
    }

    function adjustspace() { 
    if (text.value == "") {
        }
    else {
        var word =text.value.trim(" ");
        adjustText.innerHTML = words;
    }  
    }

    function Strongpassword() {
        var password = document.getElementById('password').value
        var validatepassword =document.getElementById('strongpassword');
    if (password.length > 8) {
        validatepassword.innerHTML ="password must be at least 8 character"
    }   
    else {
        alert (Successful)
    }
    }
    function check cart() {
        
        var numberOfItems = document.getElementById('number').value;
    
        
        if (numberOfItems === '') {
            alert("Please enter the number of items.");
            return;
        }
    
        numberOfItems = parseInt(numberOfItems);
        if (numberOfItems % 2 === 0) {
            document.getElementById('Your reward').innerHTML = "Congratulations! You get a discount!";
        } else {
            document.getElementById('Your reward').innerHTML = "No discount. Try shopping for an even number of items!";
        }
    }