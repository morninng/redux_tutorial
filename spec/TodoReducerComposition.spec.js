
describe('reducer composite', () => {

    describe('add todo reducer composite', () => {

        var todoBefore;
        var todoBefore_freeze;
        Object.freeze(todoBefore_freeze);
        var todoAfter;


        beforeEach(function() {

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
        })


        it('todo add complete', () => {
            var result = todos_reducer_composition(todoBefore, action);
            expect(result).toEqual(todoAfter);
        });
    })
 
    describe('toggle todo reducer composite', () => {

        var todoBefore;
        var todoBefore_freeze;
        Object.freeze(todoBefore_freeze);
        var todoAfter;


        beforeEach(function() {

            todoBefore_freeze = [{
                id: 0,
                text: "Learn Redux1",
                completed: false
            },
            {
                id: 1,
                text: "Learn Redux2",
                completed: false
            },
            {
                id: 2,
                text: "Learn Redux3",
                completed: false
            }];
            action = {
                type: 'TOGGLE_TODO',
                id: 1
            }

            todoAfter = [{
                id: 0,
                text: "Learn Redux1",
                completed: false
            },
            {
                id: 1,
                text: "Learn Redux2",
                completed: true
            },
            {
                id: 2,
                text: "Learn Redux3",
                completed: false
            }];

         })

        it('todo complete', () => {
            var result = todos_reducer_composition(todoBefore_freeze, action);
            expect(result).toEqual(todoAfter);
        });

    })
   
})
