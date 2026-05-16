function camelize(word) {
    function upper(arrayItem, index) {
        if (index === 0 ) {
            return arrayItem;
        } else {
            return arrayItem[0].toUpperCase() + arrayItem.slice(1)
        }
    } 

    wordArray = word.split("-");
    camelCaseArray = wordArray.map(upper);
    camelCase = camelCaseArray.join("");
    console.log(camelCase);
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
