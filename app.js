const express = require('express');
var mongoose = require('mongoose');
var app = express();
const TeachingRouter = require('./routes/teaching')
const FreelanceRouter = require('./routes/freelance')
const IndustryRouter = require('./routes/industry')
const ConferencePaperRouter = require('./routes/conferencepaper')
const JournalAritcalRouter = require('./routes/journalarticle')
const ManagementRouter = require('./routes/management')
const DegreeRouter = require('./routes/degree')
const BlogRouter = require('./routes/blog')
const CertificateRouter = require('./routes/certifications');
const FypRouter=require('./routes/fyp');

var cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

const connection = mongoose.connect('mongodb://localhost:27017/Education', { useNewUrlParser: true, useUnifiedTopology: true });
connection.then((db) => {
    console.log("Connected correctly to mongodb");
}, (err) => { console.log(err); });


// app.use('/industry', IndustryRouter);
// app.use('/teaching', TeachingRouter);
// app.use('/management', ManagementRouter);
// app.use('freelance', FreelanceRouter)
// app.use('/journal', JournalAritcalRouter)
// app.use('/conference', ConferencePaperRouter)
 app.use('/degree', DegreeRouter)
// app.use('/blog', BlogRouter)
app.use('/certifications', CertificateRouter)
app.use('/fyp', FypRouter)
app.listen(3000, () => console.log("Connected to server on port: 3000"))