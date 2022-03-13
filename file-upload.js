//Adding image picker on the frontend

{
  //    <input type = "file" accept = "image/*" onChange = {(e) => handleChange}></input>
  //    const [file, setFile] = useState();
  //    const handleChange = (e) => {
  //         setFile(e.target.files[0]);
  //    }
  //Once submit/Add Image is clicked, pass the file into that event handler function whoch makes a
  //post request to our backend API
}

//AWS logic

//Create an s3 bucket
//Create a new policy with the s3 bucket
//Add a user (Attach an existing policy)

//Upload logic

const aws = require('aws-sdk');
const accessKeyId = process.env.accessKeyId;
const secretKey = process.env.secretKey;

const s3 = new aws.S3({
  accessKeyId,
  secretKey,
});

var params = {
  Bucket: 'Name of bucket',
  Key: 'Secret Key (Not sure)',
  Body: 'Payload, in our case its the image file',
};

app.use('/upload', (req, res, next) => {
  s3.getSignedUrl('putObject', params, (err, val) => {
    const preSignedUrl = val;
  });
});
