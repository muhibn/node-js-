function add(a, b)
{
    return a+b;
}

const sub=(a,b) => {
    
    return a-b;
}

// module.exports =add;

//module.exports.add1=add;
//module.exports.sub1=sub;
const value="Export value ";
module.exports ={add,sub, value};
