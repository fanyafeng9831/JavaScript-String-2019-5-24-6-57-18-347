// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
name.toUpperCase（）;
console.log(name);
// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var a=sentence.split(' ');
for(var i=0;i<a.length;i++){
    var str1=a[i].substring(0,1).toUpperCase();
    var str2=a[i].substring(1).toLowerCase();
     a[i]=str1+str2;
}
console.log(a.join(' '));

// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
var num = money.split("￥")[1]
console.log(num);
