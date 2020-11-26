import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class MovieItem extends React.Component {

    constructor() {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    DeleteMovie(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/movies/' + this.props.movie._id)
            .then()
            .catch();
    }
        <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
Server Changes:
//server.js
app.delete('/api/movies/:id', function (req, res) {
    console.log(req.params.id);
    MovieModel.deleteOne({ _id: req.params.id },
        function (err, data) {
            if (err)
                res.send(err);
            res.send(data);
        })
})


render() {
    return (
        <div>
            <Card>
                <Card.Header>{this.props.movie.Title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={this.props.movie.Poster} width="200" height="200"></img>
                        <footer className="blockquote-footer">
                            {this.props.movie.Year}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}
}
