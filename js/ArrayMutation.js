var addCounter = function (list) {
    list.push(0);
    return list;
};
var addCounter_mutate = function (list) {
    return list.concat([0]);
};
var addCounter_mutate_2 = function (list) {
    return list.concat([0]);
};
var removeCounter = function (list, index) {
    list.splice(index, 1);
    return list;
};
var removeCounter_mutate1 = function (list, index) {
    return list.slice(0, index).concat(list.slice(index + 1));
};
var removeCounter_mutate2 = function (list, index) {
    return list.slice(0, index).concat(list.slice(index + 1));
};
var increment_counter = function (list, index) {
    return list.slice(0, index).concat([list[index] + 1], list.slice(index + 1));
};
