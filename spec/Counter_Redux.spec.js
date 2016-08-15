describe('Redux Counter test',() => {
 
    it('0 + increment 1 = 1',() => {
        var result = counter( 0, {type:'INCREMENT'});
        expect(result).toEqual(1);
    });

    it('１ + increment 1 = 2',() => {
        var result = counter(1, {type:'INCREMENT'});
        expect(result).toEqual(2);
    });

    it('１  decrement 1 = 0',() => {
        var result = counter(3, {type:'DECREMENT'});
        expect(result).toEqual(2);
    });

    it('3  undefined  = 3',() => {
        var result = counter(3, {type:undefined});
        expect(result).toEqual(3);
    });

    it('3  action aaa  = 3',() => {
        var result = counter(3, {type:"aaaa"});
        expect(result).toEqual(3);
    });

});
