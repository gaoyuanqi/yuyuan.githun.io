
//<!--Hide the script from old browsers
now = new Date();
hours = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
localtime = now.toString();
document.write("<strong>Local time:</strong>" + localtime + "<br/>");

/*
  utctime = now.toGMTString();
  document.write("<strong>UTC time:</strong>" + utctime);
  document.write(document.lastModified + "<br/>");
*/

  document.write("<h1>");
  document.write(hours + ":" + mins +":" + secs);
  document.write("</h1>");
  // Stop hiding the script -->
