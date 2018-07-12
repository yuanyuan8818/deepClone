/* 深度克隆  
1. 挨个循环对象属性 ：for in 
2. 检查类型 ：typeof()可以检查出是否是对象或原始值
3， 如果是原始值，直接赋值
4.  如果是引用值，创建对象
5.  再回到 1 递归
*/

var obj = {
    name: '13',
    age:'123',
    sex:'male',
    cards: ['visa','unionpay'],
    wife:{
        name:'efg',
        age:'123',
        son:{
            age:'12',
            sex:'male'
        }
    }
}

function deepClone(target,origin){
    var target = target || {};
    var str = '[object Array]';
    var obS = Object.prototype.toString;
    for(var prop in origin){
        if(origin[prop]!== 'null' && typeof(origin[prop]) == 'object'){
            target[prop] = (obS.call([]) == str) ? [] : {};
            deepClone(target[prop],origin[prop]);
        }else{
            target[prop] = origin[prop];
        }
    
    } 
    
    return target;

}

var obj1 = deepClone(obj1,obj);