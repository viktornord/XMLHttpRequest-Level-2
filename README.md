#XMLHttpRequest Level 2

This is a brief overview of XMLHttpRequest ( **xhr**2 ) in examples

Firstly install all required dependencies

In order to do this run this command in the root of project directory:

 ```npm install```
After installing all dependencies run the project from using this command

```npm start```

Then go to the `localhost:3030` of your browser and you will see the main page

There are four options here:

*   get a string (text **responseType** by default)

*   get an ArrayBuffer object data

*   get a Blob data

*   send files to the server without creating form and any files inputs in the DOM. So you can send files on the fly

Please keep in mind that in order to avoid errors because of *cross domain requests* use urls of images placed on the page for sending it to the server.
You can find images uploaded to server in the **uploads** directory.