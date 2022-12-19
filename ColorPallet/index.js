const fetchPallet = async (palletSize = 3, palletCount = 10) => {
  //fetch api call using js async?

  const response = await fetch("http://colormind.io/list/");
  const jsonData = await response.json();
  const models = jsonData.result;
  console.log(models);
  pallet = [];

  models.forEach(async (model) => {
    const rawResponse = await fetch("http://colormind.io/api/", {
      method: "POST",
      body: JSON.stringify({ model: `${model}` }),
    });
    const content = await rawResponse.json();
    renderPallets(content.result);
    pallet.push(content.result);
  });

  console.log("pallet",pallet);
};

const renderPallets = (pallets)=>{
   const palletBody=document.getElementById('pallet');
    pallets.forEach((item) => {
        // console.log(item);
        const color = document.createElement("div");
        const body = document.createElement("div");
        const name = document.createElement("h4");
        name.classList.add("tooltiptext");
        name.setAttribute("id", "myTooltip");
        body.classList.add("pallet-body");
        color.classList.add("pallet-color");
        color.style.backgroundColor=`rgb(${item[0]},${item[1]}, ${item[2]})`;
        const hexValue = rgbToHex(item[0],item[1],item[2]);
        name.innerText=hexValue;
        body.append(color);
        body.append(name)
        palletBody.append(body);
      });
}

// const colorName = document.getElementById('myTooltip');
// colorName.onmouseout=outFunc();
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

fetchPallet();

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '794c2dbfdemsh20638bf2f61c391p1dc8cajsn227c8cd1f1e8',
// 		'X-RapidAPI-Host': 'random-palette-generator.p.rapidapi.com'
// 	}
// };

// fetch('https://random-palette-generator.p.rapidapi.com/palette/Monochromatic/10/3', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	// .catch(err => console.error(err));
// console.log("Hello world");

// //fetch api call in javascript?
// // url (required)
// fetch('https://random-palette-generator.p.rapidapi.com/palette/Monochromatic/10/3', options
// ).then(function(response) {
//     console.log("response", response);
// }).catch(function(err) {
// // Called if the server returns any errors
//   console.log("Error:"+err);
// });

// post fetch api request in javascript?
