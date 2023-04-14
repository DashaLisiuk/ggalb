'use strict';
const D1 = '---------\n|       |\n|   *   |\n|       |\n---------\n';
const D2 = '---------\n| *     |\n|       |\n|     * |\n---------\n';
const D3 = '---------\n| *     |\n|   *   |\n|     * |\n---------\n';
const D4 = '---------\n| *   * |\n|       |\n| *   * |\n---------\n';
const D5 = '---------\n| *   * |\n|   *   |\n| *   * |\n---------\n';
const D6 = '---------\n| *   * |\n| *   * |\n| *   * |\n---------\n';
let isOK = confirm('тыкай давай быстрее, тормоз');

if (isOK) {

    let n = Math.ceil( Math.random() * 6)

if (n === 1) console.log( D1 )
if (n === 2) console.log( D2 )
if (n === 3) console.log( D3 )
if (n === 4) console.log( D4 )
if (n === 5) console.log( D5 )
if (n === 6) console.log( D6 )

}


