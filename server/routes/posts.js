import express from 'express';


// File name POSTS should be changed accordingly

const router = express.Router();

router.get('/', (req, res) => {
    res.send('THIS WORKS!');
  });

export default router;