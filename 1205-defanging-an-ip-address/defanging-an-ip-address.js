/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const replaceAddress = address.replaceAll(".","[.]")
    return replaceAddress
};