const select = document.querySelector('select');
  // const html = document.querySelector('.output');
  const html = document.querySelector('body');

  function updateBgTextColor(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
  }

  select.onchange = function () {
    const choice = select.value;
    console.log('gekozen optie', choice);
    
    // ADD SWITCH STATEMENT
    // HIERBOVEN NIETS VERANDEREN
    // je code met switch case komt vanaf hier:
    switch(choice) {
      case "sunny":
          updateBgTextColor("blue");
          break;
           case "rainy":
             updateBgTextColor("red");
             break;
             case "snowing":
              updateBgTextColor("yellow");
              break;
              case "overcast":
              updateBgTextColor("green");
              break;

 

          
    }
    // tot hier
    // HIERONDER NIETS VERANDEREN
  }