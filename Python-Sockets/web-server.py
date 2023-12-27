# Author: Kincannon Wilson
# Date: 01-23-22
# Modified: 02-05-22

# Note: This server receives GET requests for
# a file in the server's directory and returns
# said file. If the file is not found
# or read successfully, a 404 error message is
# sent to the client. The server automatically
# closes after responding to the first request.

# -------------------- #


import socket


def getPort():
    try:
        userInput = input("Please enter a port number (press enter for 8080): ")
        port = None
        
        if len(userInput) > 0:
            port = int(userInput)
        else:
            port = 8080
        
        assert 0 <= port <= 65535
        return port
        
    except:
        print("That input was not valid. Port numbers must be integers between 0 and 65535.")
        return getPort()
  

port = getPort()
socket = socket.socket()
socket.bind(('localhost', port))
socket.listen()
print("Launched server on localhost, port ", port)


while True:
    client, client_address = socket.accept() # client_address holds the client's IP and their port #
    print('Client connected from from', client_address)
    
    data = client.recv(1024).decode() # client should make requests for files in the server file's directory
    
    # Now, we can try to find a file in the current directory by that name.
    # If we can find it, we return the file's contents in html.
    # If we can't find it, we return a '404 Not Found' message
    try:
        # data from GET requests follows this format:
        # GET /favicon.ico HTTP/1.1
        # Host: localhost:8080
        # Connection: keep-alive
        # . . .
        # So, we can get the name of the requested file by splitting
        # on the spaces
        filename = data.split(' ')[1].lstrip('/')
        print('File requested: ', filename)
        
        file = open(filename, 'rb')
        fileContent = file.read(1024)
        client.send(b'HTTP/1.0 200 OK\r\n\r\n')
        while fileContent:
            client.send(fileContent)
            fileContent = file.read(1024)
        
        file.close()
        client.close()
        socket.close()
        print('File successfully served to the client. Server socket is now closed.')
        break # close the while loop to refuse future connections
        
    except Exception as e:
        print(e) # Show error in the terminal
        client.send(b'HTTP/1.0 404 Not Found\r\n\r\n')
        client.send(b'404 error, could not find a file with that name')
        client.close()
        socket.close()
        print('Error finding/reading file. A 404 error message was sent instead. Server socket is now closed.')
        break # close the while loop to block future connections
