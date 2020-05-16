

/*
 //Stop hiding the script -->
localtime = now.toString();
hours = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
utctime = now.toGMTString();
document.write(document.lastModified + "<br/>");
document.write("<strong>UTC time:</strong>" + utctime);
document.write("<h1>" + hours + ":" + mins +":" + secs + "</h1>");
document.write("<strong>Local time:</strong>" + localtime + "<br/>");
*/




/*百度网站统计代码*/
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?0abbef102c5013638e122e5e9f0fb3e0";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

/*显示中国标准时间*/
now = new Date();
localtime = now.toString();
document.write(localtime + "<br/>" + "<br/>");


