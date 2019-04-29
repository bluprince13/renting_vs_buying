import d3 from "d3";

export const format2 = d3.format(".2s");
export const format3 = d3.format(".3s");

export const copyToClipboard = text => {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    console.log("copied")
};
