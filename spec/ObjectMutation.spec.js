describe('Object mutation todo',() => {

    var todoBefore;
    var todoBefore_freeze;
    Object.freeze(todoBefore_freeze)
    var todoAfter;

    beforeEach(function() {
        console.log('before >>>');
        todoBefore = {
            id:0,
            text: "Learn Redux",
            completed: false
        }
        todoBefore_freeze =  {
            id:0,
            text: "Learn Redux",
            completed: false
        }
        todoAfter = {
            id:0,
            text: "Learn Redux",
            completed: true
        };
    });

    it('todo complete',() => {
        var result = toggleTodo(todoBefore);
        expect(result).toEqual(todoAfter);
    });

    it('todo complete mutate1',() => {
        var result = toggleTodo_mutate1(todoBefore_freeze);
        expect(result).toEqual(todoAfter);
    });

    it('todo complete mutate2',() => {
        var result = toggleTodo_mutate2(todoBefore_freeze);
        expect(result).toEqual(todoAfter);
    });

/*
    it('todo complete mutate3',() => {
        var result = toggleTodo_mutate3(todoBefore_freeze);
        expect(result).toEqual(todoAfter);
    });
*/


})
