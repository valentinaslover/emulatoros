function pselection(lin) {
    localStorage.setItem("plink", lin);
    console.log(lin)
}

function pselection2(lin2) {
    localStorage.setItem("plink2", lin2);
    console.log(lin2 + '2')
}
function pselection3(lin3) {
    localStorage.setItem("plink3", lin3);
    console.log(lin3 + '3')
}
function rSelection() {
    pselection('rlink');
    pselection2('clear');
    pselection3('clear');
}
function r2Selection() {
    pselection('clear');
    pselection2('r2link');
    pselection3('clear');
}
function r3Selection() {
    pselection('clear');
    pselection2('clear');
    pselection3('r3link');
}