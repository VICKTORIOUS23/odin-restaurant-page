fetch("https://github.com/VICKTORIOUS23/odin-restaurant-page/blob/main/menuitems.json")
    .then(response => response.json())
    .then(value => console.log(value))