history.pushState(null, null, './');


let icp, term = 1.5, inter = 1;
const fadein = (clas, i = 0, callback = () => {}) => {
    //console.log(i);
    clearInterval(icp);
    if(i > 10) {
        callback();
        return;
    }
    i = i + inter;
    $(clas).css('opacity', `${i * 0.1}`);
    icp = setInterval(() => fadein(clas, i, callback), term);
}
const fadeout = (clas, i = 10, callback = () => {}) => {
    //console.log(i);
    clearInterval(icp);
    if(i < 0) {
        callback();
        return;
    }
    i = i - inter;
    $(clas).css('opacity', `${i * 0.1}`);
    icp = setInterval(() => fadeout(clas, i, callback), term);
}