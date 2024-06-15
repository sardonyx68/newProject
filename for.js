const contlist = [ 'a', 'b', 'c' ];
const countobj = {
    "nm" : "돌돌이",
    "age" : 7
};

for ( x in contlist ) {
    //console.log( x )
    console.log( `${x}번째 값은 ${contlist[x]}입니다.` )
}

 for ( x in countobj ) {
     console.log( `${x}는(은) ${countobj[x]}입니다.` )
 }


//console.log( `${countobj.nm}의 나이는 ${countobj.age}입니다.` )
