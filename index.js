import express, { request, response } from "express";
import data from "./data/mock.json" assert { type: "json" };

const app = express();
const PORT = 3000;
// app.use(express.static('public'));
app.use(express.json());
// app.use('/images', express.static('images'));
// app.use(express.static('images'));
// app.get('/class/:id', (request, response) => {
//   console.log(request.params);
//   const studentId = Number(request.params.id);
//   const student = data.filter((student) => student.id === studentId);
//   response.send(student) 
// });
// app.get('/next', (request, response, next) => {
//   console.log('Response will be sent in next function');
//   const studentId = Number(request.params.id);
//   next(); 
// },
//   (request, response) => {
//     response.send('I just set up a route with second callback');
//   }
// );
// app.get('/download', (request, response) => {
//   response.download("images/hello.png");
// })
// app.get('/redirect', (request, response) => {
//   response.redirect("https://www.google.com");
// // })
// app.route('/class')
// .get((request, response) => {
//     throw new Error();
//     response.send("Get method");
//   })
//   .post((request, response) => {
//     response.send("Create method");
//   })
//   .put((request, response) => {
//     response.send("Update method");
//   });
//   app.use((err,req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('something went wrong');
//   });
// app.use(express.urlencoded( {extended: true}));
app.get('/', (request, response) => {
  // response.send(data);
  response.json(data);
})
// app.get('/items', (request, response) => {
//   response.send(request.body);
// })
// app.post('/create', (request, response) => {
//   response.send('This is post request');
// })
// app.put('/edit', (request, response) => {
//   response.send('This is put request');
// })
// app.delete('/delete', (request, response) => {
//   response.send('This is delete request');
// })
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(data);
});