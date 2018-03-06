const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre =require('./models/genre');
Book =require('./models/book');
Expositor = require('./models/expositores');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/Registro');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/books or /api/genres or /api/expositores');
});

app.get('/api/genres', (req, res) => {
	Genre.getGenres((err, genres) => {
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

app.post('/api/genres', (req, res) => {
	var genre = req.body;
	Genre.addGenre(genre, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.put('/api/genres/:_id', (req, res) => {
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.delete('/api/genres/:_id', (req, res) => {
	var id = req.params._id;
	Genre.removeGenre(id, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.get('/api/books', (req, res) => {
	Book.getBooks((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/books/:_id', (req, res) => {
	Book.getBookById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/books', (req, res) => {
	var book = req.body;
	Book.addBook(book, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.put('/api/books/:_id', (req, res) => {
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/books/:_id', (req, res) => {
	var id = req.params._id;
	Book.removeBook(id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

// Gets y post para expositores
app.get('/api/expositores', (req, res) => {
	Expositor.getExpositores((err, expositores) => {
		if(err){
			throw err;
		}
		res.json(expositores);
	});
});

app.get('/api/expositores/:_id', (req, res) => {
	Expositor.getExpositorById(req.params._id, (err, expositor) => {
		if(err){
			throw err;
		}
		res.json(expositor);
	});
});

app.post('/api/expositores', (req, res) => {
	var expositor = req.body;
	Expositor.addExpositor(expositor, (err, expositor) => {
		if(err){
			throw err;
		}
		res.json(expositor);
	});
});

app.put('/api/expositores/:_id', (req, res) => {
	var id = req.params._id;
	var expositor = req.body;
	Expositor.updateExpositor(id, expositor, {}, (err, expositor) => {
		if(err){
			throw err;
		}
		res.json(expositor);
	});
});

app.delete('/api/expositores/:_id', (req, res) => {
	var id = req.params._id;
	Expositor.removeExpositor(id, (err, expositor) => {
		if(err){
			throw err;
		}
		res.json(expositor);
	});
});

app.listen(3000);
console.log('App running on port 3000...');
