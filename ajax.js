import { printStr } from './printer.js';
import { done } from './olesia.js';
import { final } from './final.js';

function sendRequest(a, b) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `/math?paramA=${encodeURIComponent(a)}&paramB=${encodeURIComponent(b)}`);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            printStr(xhr.responseText);
        } else {
            printStr(`Error: ${xhr.status}`);
        }
    };
    xhr.send();
}

sendRequest(1, 2);
sendRequest(3, 4);
sendRequest(5, 6);

done();
final();