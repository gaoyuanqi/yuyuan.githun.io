

/*
<!--Hide the script from old browsers Stop hiding the script -->
localtime = now.toString();
hours = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
utctime = now.toGMTString();
document.write("<strong>UTC time:</strong>" + utctime);
document.write("<h1>");
document.write(hours + ":" + mins +":" + secs);
document.write("</h1>");
document.write("<strong>Local time:</strong>" + localtime + "<br/>");
*/



now = new Date();
document.write(document.lastModified + "<br/>");
