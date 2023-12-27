# Author: Kincannon Wilson
# Date: 01-23-22
# Modified: 02-05-22

# Note: The program gets user input on the command
# line and then connects to the specified IP on
# port 25. The program sends the user's input
# and prints out the server's response before
# the program exits.

# Example Input (code works with below):
# Sender email: CWilson1901@gmail.com
# Recipient email: CannonGWilson@gmail.com
# Subject: Testing Python Email
# Body: Sending this email from my Terminal :)
# IPv4: 173.194.207.27 (Gmail server)
# OR
# fqdn: gmail-smtp-in.l.google.com

# -------------------- #

import socket
import sys


###### User Input

def check(inputStr, type="text"):
    if len(inputStr) < 1:
        print("This field cannot be empty. Exiting the program.")
        sys.exit()
    if type=="email":
        if "@" not in inputStr or "." not in inputStr:
            print("That is not a valid email. Exiting the program.")
            sys.exit()
    if type=="IP":
        if (inputStr.count('.') != 3 # check IPv4
            and inputStr.count(':') < 5): # check IPv6
            print("Invalid IPv4 address. Exiting the program.")
            sys.exit()
    
    
sender = input("Sender email address: ")
check(sender, "email")

recipient = input("Recipient email address: ")
check(recipient, "email")

subject = input("Subject: ")
check(subject)

body = input("Body: ")
check(body)



###### Sockets

IP = ""
    
serverInput = input("Type 'fqdn' or 'IP' to specify how you will locate the destination server: ")
if serverInput == "fqdn":
    # domain name specified
    fqdn = input("fqdn (resolves to IPv4 by default): ")
    # socket.getaddrinfo and socket.gethostbyname both work, but the latter is simpler while the former supports IPv6
    _, _, _, _, sockaddr = socket.getaddrinfo(fqdn, 25)[0]
    # IP = sockaddr[0]
    IP = socket.gethostbyname(fqdn)
    
elif serverInput == "IP":
    # IP address specified
    IP = input("IPv4/IPv6 address: ")

else:
    print("That is not a valid destination type. Exiting the program.")
    sys.exit()

check(IP, "IP")

print('All input appears to be valid. Attempting to send your email now. If the destination server is not valid, a timeout error will occur.')


socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
socket.connect((IP, 25))
print("Connected to ", IP, " on port 25")

data = {'sender': sender, 'recipient': recipient, 'subject': subject, 'body': body}
socket.send(str(data).encode())

received = socket.recv(1024).decode()
print("Server reponse: ", received)
print("Message sent and response received. Exiting program now.")
socket.close()
sys.exit()
