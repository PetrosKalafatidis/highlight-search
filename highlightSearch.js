/**
 * Adds the pn-highlighted class to searched text in the filtered input
 * @constructor
 * @author <petran> [calafatidis@gmail.com]
 * @param {input} input - The input of the filter.
 * @param {searchText} searchText - The text input is been searched for.
 */

function highlight() {
    return function(input, searchText) {
        if (searchText.length > 2) {
            let searchExp = new RegExp(searchText, 'i');
            console.log(input);
            return input.replace(searchExp, `<span class='pn-highlighted'>${searchText}</span>`);
        } else {
            return input;
        }
    }
}
