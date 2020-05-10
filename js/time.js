

/*
<!--Hide the script from old browsers Stop hiding the script -->
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



now = new Date();
localtime = now.toString();
document.write(localtime + "<br/>" + "<br/>");
