/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const new_str = command.replaceAll("()","o").replaceAll("(al)","al")
    return new_str
};