describe('Array mutation test',() => {

    describe('Add',() => {

        var listBefore = [];
        var listBefore_freeze = [];
        Object.freeze(listBefore_freeze)
        var listAfter = [0];
    
        beforeEach(function() {
            console.log('before >>>');
            listBefore = [];
            listAfter = [0];
        });

        it('[] + push= 0',() => {
            var result = addCounter(listBefore);
            expect(result).toEqual(listAfter);
        });

        it('[] + concat[0]',() => {
            var result = addCounter_mutate(listBefore_freeze);
            expect(result).toEqual(listAfter);
        });

        it('[...list, 0]',() => {
            var result = addCounter_mutate_2(listBefore_freeze);
            expect(result).toEqual(listAfter);
        });

    });


    describe('Remove',() => {

        var listBefore = [0,10, 20,30,40];
        var listBefore_mutate = [0,10, 20,30,40];
        Object.freeze(listBefore_mutate)
        var listAfter =  [0,10, 30,40];

        beforeEach(function() {
            console.log('before >>>');
            listBefore = [0,10, 20,30,40];
            listAfter =  [0,10, 30,40];
        });

        it('remove third',() => {
            var result = removeCounter(listBefore,2);
            expect(result).toEqual(listAfter);
        });

/*
        it('remove third',() => {
            var result = removeCounter(listBefore_mutate,2);
            expect(result).toEqual(listAfter);
        });
*/

        it('remove third mutate',() => {
            var result = removeCounter_mutate1(listBefore_mutate,2);
            expect(result).toEqual(listAfter);
        });

        it('remove third mutate 2',() => {
            var result = removeCounter_mutate2(listBefore_mutate,2);
            expect(result).toEqual(listAfter);
        });

    });



    describe('increment counter',() => {


        var listBefore = [0,10, 20,30,40];
        var listBefore_mutate = [0,10, 20,30,40];
        Object.freeze(listBefore_mutate)
        var listAfter =  [0,10,21, 30,40];

        it('increment middle',() => {
            var result = increment_counter(listBefore_mutate,2);
            expect(result).toEqual(listAfter);
        });

    });

});
