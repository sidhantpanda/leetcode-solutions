function intToRoman(num: number): string {
    return '';
};






const testcases = (): boolean => {
    const values = [{
        num: 1,
        roman: 'I'
    }, {
        num: 5,
        roman: 'V'
    }, {
        num: 50,
        roman: 'L'
    }]
    for (let value of values) {
        if (value.roman !== intToRoman(value.num)) {
            return false;
        }
    }
    return true;
}

testcases();
