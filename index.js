const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');  

// mongoose.connect('mongodb://localhost:27017/toprobot-projects', {useNewUrlParser: true, useUnifiedTopology: true})
//     .then (() => {
//         console.log("CONNECTION OPEN!!");
//     })
//     .catch(err => {
//         console.log("Error:");
//         console.log(err);
//     });

app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

// app.get('/', (req, res) => {
//     res.render('home', { projectlist });
// })

app.get('/', (req, res) => {
    res.render('construction');
})

app.get('/roadmap', (req, res) => {
    res.render('roadmap', { projectlist });
})

app.get('/donations', (req, res) => {
    res.render('donations', { projectlist });
})

// PROJECT PAGES
// app.get('/projects/:project', (req, res) => {
//     const { project } = req.params;
//     res.render('project', { project, projectlist });
// })

const projectlist = [
    {name:'coffee', 
    blurb:'Automated coffee harvesting with computer vision',
    keypoints: ['Affordable, recycled components','Enabling local manufacturing for small farms']},
    {name:'bananas', 
    blurb:'Organic and delicious banana bread',
    keypoints: ['Using local ingredients from farms in the community','Available for local purchase!']},
    // {name:'bamboo', 
    // blurb:'Ecofriendly and humane textile production',
    // keypoints: ['Enzyme-based production of textiles','Moving away from cotton and towards bamboo']}
];

// {name:'museum', 
//     blurb:'Plans for a science museum in Ponce',
//     keypoints: ['Creating fun science demos','Making science open for underserved communities']}

app.get('/projects/coffee', (req, res) => {
    const project = 'coffee';
    res.render('coffee', { project, projectlist });
})

app.get('/projects/bananas', (req, res) => {
    const project = 'bananas';
    res.render('bananas', { project, projectlist });
})

app.get('/projects/bamboo', (req, res) => {
    const project = 'bamboo';
    res.render('bamboo', { project, projectlist });
})

// app.get('/projects/museum', (req, res) => {
//     const project = 'museum';
//     res.render('museum', { project, projectlist });
// })

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})