// scripts.js

function drawTree(treeHeigth) {
    for (var i=0; i<treeHeigth; i++){
        var star='';
        for (var j=0; j<=i; j++){
            star += '*';
        }
        console.log(star);
    }
}
drawTree(10);

function drawTreeSymmetrical(treeHeigth) {
    var reverseSpaceCounter=treeHeigth/2;
    for (var i=0; i<treeHeigth; i++){
        var star='',
            space='';
        if(!(i%2==0)) {
            continue;
        }
        reverseSpaceCounter=reverseSpaceCounter-1;
        for (var j=0; j<=i; j++){
            star += '*';
        }
        for (var k=0; k<=reverseSpaceCounter; k++){
            space += ' ';
        }        
        console.log(space + star);
    }
}
drawTreeSymmetrical(20);

