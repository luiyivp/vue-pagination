import { Router } from 'express';
const router = Router();

import faker from 'faker';

import Article from '../models/Article';

router.get('/create', async (req, res) => {
    for (let i = 0; i < 100; i++) {
        await Article.create({
            title: faker.name.title(),
            imageURL: faker.image.imageUrl(),
            description: faker.lorem.paragraph()
        });
    }
    res.json({ message: '100 Records Created' });
});

router.get('/articles', async (req, res) => {
    const articles = await Article.find();
    res.json({ articles });
});

export default router;
