fetch("menuitems.json")
    .then(response => response.json())
    .then(value => console.log(value))