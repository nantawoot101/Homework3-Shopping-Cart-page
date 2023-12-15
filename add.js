
let priceDoc = parseInt(document.getElementById('price-doc').innerHTML);
let priceSlid = parseInt(document.getElementById('price-slid').innerHTML);

function updateTotal() {
  const total = priceDoc + priceSlid;
  document.getElementById('to-price').innerHTML = "THB " + total;
  document.getElementById('sub-price').innerHTML = "THB " + total;
}

//google-docs

document.getElementById('google-docs').addEventListener('change', function() {
  const selectedValue = this.value;
  if (selectedValue === '1') {
    document.getElementById('gg-doc1').style.color = '#00DBB6';
    document.getElementById('price-doc').innerHTML= "150";
    document.getElementById('gg-doc2').style.color = 'gainsboro';
    document.getElementById('gg-doc3').style.color = 'gainsboro';
    document.getElementById('name1').innerHTML= "Google Docs";
    document.getElementById('num1').innerHTML= "LV 1";
  } else if (selectedValue === '2') {
    document.getElementById('gg-doc1').style.color = '#00DBB6';
    document.getElementById('gg-doc2').style.color = '#00DBB6';
    document.getElementById('price-doc').innerHTML= "150";
    document.getElementById('gg-doc3').style.color = 'gainsboro';
    document.getElementById('name1').innerHTML= "Google Docs";
    document.getElementById('num1').innerHTML= "LV 2";
  } else if (selectedValue === '3') {
    document.getElementById('gg-doc1').style.color = '#00DBB6';
    document.getElementById('gg-doc2').style.color = '#00DBB6';
    document.getElementById('gg-doc3').style.color = '#00DBB6';
    document.getElementById('price-doc').innerHTML= "150";
    document.getElementById('name1').innerHTML= "Google Docs";
    document.getElementById('num1').innerHTML= "LV 3";
  } else if (selectedValue === '0') {
    document.getElementById('gg-doc1').style.color = 'gainsboro';
    document.getElementById('gg-doc2').style.color = 'gainsboro';
    document.getElementById('gg-doc3').style.color = 'gainsboro';
    document.getElementById('price-doc').innerHTML= "0";
    document.getElementById('name1').innerHTML= "";
    document.getElementById('num1').innerHTML= "";
  } else {
    document.getElementById('gg-doc1').style.color = 'gainsboro';
    document.getElementById('gg-doc2').style.color = 'gainsboro';
    document.getElementById('gg-doc3').style.color = 'gainsboro';
    document.getElementById('price-doc').innerHTML= "0";
    document.getElementById('name1').innerHTML= "";
    document.getElementById('num1').innerHTML= "";
  }

  priceDoc = parseInt(document.getElementById('price-doc').innerHTML);
  updateTotal();
});


//google-slides

document.getElementById('google-slides').addEventListener('change', function() {
  const selectedValue = this.value;
  if (selectedValue === '1') {
    document.getElementById('gg-slides1').style.color = '#00DBB6';
    document.getElementById('price-slid').innerHTML= "150";
    document.getElementById('gg-slides2').style.color = 'gainsboro';
    document.getElementById('gg-slides3').style.color = 'gainsboro';
    document.getElementById('gg-slides4').style.color = 'gainsboro';
    document.getElementById('name2').innerHTML= "Google Slides";
    document.getElementById('num2').innerHTML= "LV 1";

  } else if (selectedValue === '2') {
    document.getElementById('gg-slides1').style.color = '#00DBB6';
    document.getElementById('gg-slides2').style.color = '#00DBB6';
    document.getElementById('price-slid').innerHTML= "150";
    document.getElementById('gg-slides3').style.color = 'gainsboro';
    document.getElementById('gg-slides4').style.color = 'gainsboro';
    document.getElementById('name2').innerHTML= "Google Slides";
    document.getElementById('num2').innerHTML= "LV 2";

  } else if (selectedValue === '3') {
    document.getElementById('gg-slides1').style.color = '#00DBB6';
    document.getElementById('gg-slides2').style.color = '#00DBB6';
    document.getElementById('gg-slides3').style.color = '#00DBB6';
    document.getElementById('price-slid').innerHTML= "150";
    document.getElementById('gg-slides4').style.color = 'gainsboro';
    document.getElementById('name2').innerHTML= "Google Slides";
    document.getElementById('num2').innerHTML= "LV 3";

  } else if (selectedValue === '4') {
    document.getElementById('gg-slides1').style.color = '#00DBB6';
    document.getElementById('gg-slides2').style.color = '#00DBB6';
    document.getElementById('gg-slides3').style.color = '#00DBB6';
    document.getElementById('gg-slides4').style.color = '#00DBB6';
    document.getElementById('price-slid').innerHTML= "150";
    document.getElementById('name2').innerHTML= "Google Slides";
    document.getElementById('num2').innerHTML= "LV 4";

  } else if (selectedValue === '0') {
    document.getElementById('gg-slides1').style.color = 'gainsboro';
    document.getElementById('gg-slides2').style.color = 'gainsboro';
    document.getElementById('gg-slides3').style.color = 'gainsboro';
    document.getElementById('gg-slides4').style.color = 'gainsboro';
    document.getElementById('price-slid').innerHTML= "0";
    document.getElementById('name2').innerHTML= "";
    document.getElementById('num2').innerHTML= "";

  } else {
    document.getElementById('gg-slides1').style.color = 'gainsboro';
    document.getElementById('gg-slides2').style.color = 'gainsboro';
    document.getElementById('gg-slides3').style.color = 'gainsboro';
    document.getElementById('gg-slides4').style.color = 'gainsboro';
    document.getElementById('price-slid').innerHTML= "0";
    document.getElementById('name2').innerHTML= "";
    document.getElementById('num2').innerHTML= "";
  }

  priceSlid = parseInt(document.getElementById('price-slid').innerHTML);
  updateTotal();
});

updateTotal();

document.getElementById('checkoutButton').addEventListener('click', function() {
  
  alert('Button!'); 
});



