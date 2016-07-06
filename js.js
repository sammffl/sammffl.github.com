/**
 * Created by SamMFFL on 2016/6/27.
 */
var person = {
    name: "Nicholas",
    age: 27,
    job: "Software Engineer",
    sayName: function () {
        console.log(this.name)
    }
}

Object.defineProperty(person, "name", {
    writable: false,
    value: "Sam"
});

person.sayName();
person.name = "sss";
person.sayName();


function Person(name, age, job) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.sayName = function () {
        console.log(this.name);
    }
}

var per1 = new Person("sam", 26, "front end engineer")


per1.sayName();

console.log(per1.constructor == Person)
console.log(per1 instanceof Person)
console.log(typeof per1);

var o = new Object()
Person.call(o, "sami", 26, "Engineer");
o.sayName()

console.log(false && true)


function Test() {
}
Test.prototype = {
    te1: 1,
    te2: 2
};
var t1 = new Test()
console.log(t1.te1)

var a = [1, 2, 3, 4]
var b = ["a", "b", "c", "d"]
a.push.apply(a, b);

console.log(typeof "ss");
var s

s += 'sdf'


var arr = [12, 4, 123, 44, 99]
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);
console.log(s)


function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {//IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        }

    } else {
        script.onload = function () {
            callback();
        }
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}


var url = '/data.php';
var params = [
    'id=454',
    'limit=20'
];

var req = new XMLHttpRequest();
req.onreadystatechange = function () {
    if (req.readyState === 4) {
        var responseHeaders = req.getAllResponseHeaders();//获取响应头信息
        var data = req.responseText;//获取数据
    }
}

req.open('GET', url + '?' + params.join("&"), true);
req.setRequestHeader('X-Requested-Width', 'XMLHttpRequest');//设置请求头信息
req.send(null);


function set(key) {
    var img = document.createElement('img');
    img.addEventListener('load', function () {
        var imgCanvas = document.createElement("canvas"),
            imgContext = imgCanvas.getContext('2d');
        imgCanvas.width = this.width;
        imgCanvas.height = this.height;

        imgContext.drawImage(this, 0, 0, this.width, this.height);
        var imgAsDataURL = imgCanvas.toDataURL("image/png");
        try {
            localStorage.setItem(key, imgAsDataURL);
        } catch (e) {
            console.log("storage failed: " + e);
        }
    }, false);
    img.src = src;
}

function get(key) {
    var srcStr = localStorage.getItem(key);
    var imgObj = document.createElement('img');
    imgObj.src = srcStr;
    document.body.appendChild(imgObj)
}






