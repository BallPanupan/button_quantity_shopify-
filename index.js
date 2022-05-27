//javascript fix btn and link:
//https://kritauto.com/products/forward-control-foot-peg-stretch-gear-brake-lever-honda-rebel-cmx-1100-21-22-dct#1574671007763_mobile

// Fix Dropdown and button of quantity

// HOW TO INSTALL
// install this javascript on "theme.liquid"
let qtyGroupx = document.getElementsByClassName('product-form__item product-form__item--quantity quantity');
let newQuantityValue = qtyGroupx[0].children[1].children[1].value;

// check with screen
let widthCheckScreenX = screen.width;
let checkMaxScreenX = 768;
let priceResultOri = 0;


// get price
function financialx(x) {
    return Number.parseFloat(x).toFixed(2);
}

function getPriceOri(){
    let getTotalPriceX = document.getElementsByClassName('total-price');
    let getPriceResult = getTotalPriceX[0].children[1].children[0].innerText;
    let priceResult = getPriceResult.replace("$", "");
    priceResultOri = financialx(priceResult)
}


// total sumerly and update 
function totalSumerlyX(){
    let nowSumerly = priceResultOri * qtyGroupx[0].children[1].children[1].value;
    // console.log(nowSumerly.toFixed(2));

    let getTotalPriceX = document.getElementsByClassName('total-price');
    let getPriceResult = getTotalPriceX[0].children[1].children[0];

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    formatter.format(2500);

    // getPriceResult.innerText = '$' + nowSumerly.toFixed(2);
    getPriceResult.innerText = formatter.format(nowSumerly);
}

// plus
function newAddQuantityValue() {
    if(widthCheckScreenX <= checkMaxScreenX){
        qtyGroupx[0].children[1].children[1].value++;
        totalSumerlyX();
    }
}
// minus
function newMinusQuantityValue() {
    if(widthCheckScreenX <= checkMaxScreenX){
        if(qtyGroupx[0].children[1].children[1].value > 1){
            qtyGroupx[0].children[1].children[1].value--;
            totalSumerlyX();
        }
    }
}

function dupBtnX(){
    qtyGroupx[0].children[1].children[0].href = 'javascript:void(0)'
    qtyGroupx[0].children[1].children[2].href = 'javascript:void(0)'
    qtyGroupx[0].children[1].children[0].onclick = function() { newMinusQuantityValue(); };
    qtyGroupx[0].children[1].children[2].onclick = function() { newAddQuantityValue(); };
    qtyGroupx[0].children[1].children[1].onchange = function(){totalSumerlyX()};
}

if(widthCheckScreenX <= checkMaxScreenX){
    dupBtnX();
    getPriceOri();
    // console.log('Screen :', true)
}else{
    qtyGroupx[0].children[1].children[0].href = '#'
    qtyGroupx[0].children[1].children[2].href = '#'
    // console.log('Screen :', false)
}

let jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://cdn.shopify.com/s/files/1/0576/2809/8714/t/15/assets/vendor.js?v=173865774445456269361630749249');
document.head.appendChild(jQueryScript);