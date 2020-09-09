# Simple image upload server

Simple image upload server(Node.js base) that can be used for various purposes.

## How to use

- To start the server, enter `node index.js` in command line. The server will be started on 4998 port. You can easily change port in `index.js`.
- To upload an image, Go to `/upload.html`.
- To upload an image programmatically, send a `POST` request with `enctype="multipart/form-data"` to `/upload` (See [public/upload.html](public/upload.html)).
- When you upload an image, the server will return the image name in JSON format. Below is an example.

```JSON
{"filename":"imgs/837225f0d8b9053f07cc09e36b3f4ba5"}
```

- You can access the filename directly, or view the image uploaded through the query string in the index.html file, such as `/index.html?img=imgs/837225f0d8b9053f07cc09e36b3f4ba`.
