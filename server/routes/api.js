const express = require('express');
const router = express.Router();

// include the mongoose & connect the mongoDB with connection string
const mongoose = require('mongoose');

// include model
const Video = require('../models/video');
const db = "mongodb://usersandeep:sandeep123@ds011228.mlab.com:11228/videoplayer";

// this avoids warnings given by mongoose
mongoose.Promise = global.Promise;

mongoose.connect(db, { useNewUrlParser: true }, function (err) {
    if (err) {
        console.error('Error !' + err);
    }
});


// for any request
// router.get('/', function (req, res) {
//     res.send('api works !!');
// });

// for get request(all videos)
router.get('/videos', function (req, res) {
    console.log('GET Request for all videos !!');
    Video.find({})
        .exec(function (err, videos) {
            if (err) {
                res.send('Error in retrieving videos');
            } else {
                res.json(videos);
            }
        });
});

// for get request(based on perticular id)
router.get('/videos/:id', function (req, res) {
    console.log('GET Request for a single video !!');
    Video.findById(req.params.id)
        .exec(function (err, video) {
            if (err) {
                res.send('Error in retrieving video');
            } else {
                res.json(video);
            }
        });
});

// for the post request
router.post('/video', function (req, res) {
    console.log('POST a video');
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function (err, insertedVideo) {
        if (err) {
            res.send('Error in saving video');
        } else {
            res.json(insertedVideo);
        }
    });
});

// for the put request
router.put('/video/:id', function (req, res) {
    console.log('Update a video');
    Video.findByIdAndUpdate(
        req.params.id,
        {
            $set: { title: req.body.title, url: req.body.url, description: req.body.description }
        },
        {
            new: true
        },
        function (err, updatedVideo) {
            if (err) {
                res.send('Error in updating video');
            } else {
                res.json(updatedVideo);
            }
        }
    );
});

// for the delete request
router.delete('/video/:id', function (req, res) {
    console.log('Delete a video');
    Video.findByIdAndRemove(req.params.id, function (err, deletedVideo) {
        if (err) {
            res.send('Error in deleting video');
        } else {
            res.json(deletedVideo);
        }
    });
});

// export the router
module.exports = router;