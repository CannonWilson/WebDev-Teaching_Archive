# Python Sockets

---

To gain a better appreciation for low-level networking concepts, I used
sockets in the Python programming language to create a web server and
to send an email. This was part of a project for a computer networking
class I was taking.

## Web Server

The file 'web-server.py' begins by asking the user to give the program 
a port number (defaults to 8080). These ports (ranging from 0 to 65,535) 
are virtual places managed by the operating system where network connections
start or end. In this case, specifying a port number will allow you to
open up localhost:<port number> and view the 
results of your request.
  
The server sends files located in the same directory as the server file.
For instance, if I specify a port number of 4040, open a browser window,
and type 'localhost:4040/hello.png'. The server will then try to find a file
named 'hello.png' in its directory. If it can find that file, the server will send it
to your machine and your browser will display the image. If no file is found by that
name, the server sends a 404 error (as text, not HTML) instead. The server 
sends file contents as binary data, so it should be able to send any type of file.
The server stops running after receiving one request.
  
## Email Client
  
This file begnins by asking the user for sender and recipient email addresses, as
well as a subject and body for your email. The destination server (such as Google's
SMTP server for gmail can be specified as an IP address or as a fully qualified domain
name, an fqdn).
  
The program sends out your email, waits for the server's response, prints out
the server's response, closes the socket, and exits the program. Thus, this
client only sends one request before halting.
  
Thanks! I hope these files might be of use to someone in the future as they
start exploring socket programming in Python.
