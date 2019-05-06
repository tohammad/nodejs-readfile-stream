# nodejs-readfile-stream

Read Huge Text File using streams



# Write text to dummy file on windows:

echo "This is just a sample line appended to create a big file.. " > dummy.txt
for /L %i in (1,1,14) do type dummy.txt >> dummy.txt

# Commands

* command to install nc (net client globally): npm i nc -g
* command to listen tcp server: node with-stream.js
* command for tcp client : nc localhost 8000


