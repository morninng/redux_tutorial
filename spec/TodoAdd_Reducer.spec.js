describe('add todo', () => {

    var todoBefore;
    var todoBefore_freeze;
    Object.freeze(todoBefore_freeze);
    var todoAfter;

    todoBefore = [];
    action = {
        type: 'ADD_TODO',
        id: 0,
        text: "Learn Redux"
    }
    todoAfter = [{
        id: 0,
        text: "Learn Redux",
        completed: false
    }];


    it('todo add complete', () => {
        var result = todos_add_reducer(todoBefore, action);
        expect(result).toEqual(todoAfter);
    });
})