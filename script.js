
// Function to filter products based on the search input
function searchProducts() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const allProducts = document.querySelectorAll('.prod-bot h3');

    allProducts.forEach(product => {
        const productName = product.textContent.toLowerCase();
        const parentProduct = product.parentElement.parentElement.parentElement.parentElement;

        if (productName.includes(searchQuery)) {
            parentProduct.style.display = 'block';
        } else {
            parentProduct.style.display = 'none';
        }
    });
}
function openLocation(latitude, longitude) {
    window.open(`https://www.google.com/maps?q=20°56'35.2"N,76°59'40.0"E`, '_blank');
}

function displayContact(phone, address) {
    alert(`Phone: ${phone}\nAddress: ${address}`);
}

// Adding event listener to the search input
document.getElementById('searchInput').addEventListener('input', searchProducts);


function openside() {
    document.getElementById("side-menu").style.display = "block";
    document.getElementById("open-btn").style.display = "none";
    document.getElementById("close-btn").style.display = "block";
}

function closeside() {
    document.getElementById("side-menu").style.display = "none";
    document.getElementById("open-btn").style.display = "block";
    document.getElementById("close-btn").style.display = "none";
}

//after using the sidebar if you come back to full screen please refresh,
//normally users can't go from phone mode to pc mode
// var y = window.innerWidth;
// document.getElementById("demo").innerHTML = y;



if (window.innerWidth > 1050) {
    var x = document.getElementById("gettop").parentElement.offsetTop;
    document.getElementById("gettop").style.top = x + "px";
    var x = document.getElementById("gettop1").parentElement.offsetTop;
    document.getElementById("gettop1").style.top = x + "px";
    var x = document.getElementById("gettop2").parentElement.offsetTop;
    document.getElementById("gettop2").style.top = x + "px";
    var x = document.getElementById("gettop3").parentElement.offsetTop;
    document.getElementById("gettop3").style.top = x + "px";
    var x = document.getElementById("gettop4").parentElement.offsetTop;
    document.getElementById("gettop4").style.top = x + "px";
}

function conf() {
    var txt;
    if (confirm("Do you want to complete your purchase?")) {
        end();
    }
}

function end() {
    alert("It will be in our store in 3-5 days. Come and take it!");
}

function priv() {
    alert("We won't try to steal your data.");
}

function sorry() {
    alert("This part is still under construction.");
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}