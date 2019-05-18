import { format } from "d3-format";

export const format2 = format(".2s");
export const format3 = format(".3s");

export const copyToClipboard = text => {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
};
