function Set() {


    this.intersection = function (listA, listB) {

        var resultList = []; // create a resultList array

        if (listA === null || listB === null) { // check for invalid inputs
            return null; // exit and return null to indicate an error
        }

        for (var i = 0; i < listA.length; i++) { // for every element in listA
            var nextValue = listA[i]; // get next value in the list

            //for every element in listB
            for (var j = 0; j < listB.length; j++) {
                if (listB[j] === nextValue) { // this listB element equals nextValue
                    resultList.push(listB[j]); // add listB element to end of resultList
                    break; // break out of (exit) the listB inner loop
                }
            } // end listB inner loop
        } // end listA outer loop

        return resultList;
    };


    this.union = function (listA, listB) {

        var resultList = [];

        if (listA === null || listB === null) { // check for invalid inputs
            return null;  // exit and return null to indicate an error
        }

        var x = this.relativeComplement(listA, listB); //variable passing parameter
        var y = this.intersection(listA, listB); // variable passing parameter

        for (var a = 0; a < x.length; a++) {
            resultList.push(x[a]); //push var x with j to the array
        }

        for (var b = 0; b < y.length; b++) {
            resultList.push(y[b]);
        }

        return resultList;
    };


    this.relativeComplement = function (listA, listB) {

        var resultList = [];

        if (listA === null || listB === null) { // check for invalid inputs
            return null;  // exit and return null to indicate an error
        }

        for (var s = 0; s < listA.length; s++) { // for every element in listA
            var notFound = true; // a variable for listA

            for (var k = 0; k < listB.length; k++) {
                if (listA[s] === listB[k]) {
                    notFound = false;
                }
            }
            if (notFound === true) {
                resultList.push(listA[s]);
            }
        }

        return resultList; //
    };


    this.symmetricDifference = function (listA, listB) {

        var resultList = [];

        if (listA === null || listB === null) {
            return null;
        }

        var x = this.relativeComplement(listA, listB); //variable passing parameter
        var y = this.relativeComplement(listB, listA); // variable passing parameter

        for (var j = 0; j < x.length; j++) {
            resultList.push(x[j]); //push var x with j to the array
        }

        for (var k = 0; k < y.length; k++) {
            resultList.push(y[k]);
        }

        return resultList;
    }


}
