import express from 'express';
const router = express.Router();
import { createUsers } from '../controllers/auths.js';


router.get('/', (req, res) => {
    const blogs = [
        { title: 'New blog', snippet: 'new blog', content: 'new blog' },
        { title: 'New blog-1', snippet: 'new blog-1', content: 'new blog-1' },
        { title: 'New blog-2', snippet: 'new blog-2', content: 'new blog-2' },
    ];

    res.send(blogs);
})

router.get('/add-blog', (req, res) => {
    res.send("User Route");
});


router.post('/', createUsers);

export default router;