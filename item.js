const express = require('express');
const router = new express.Router();

const ITEMS = [
    { id: 1, name: "popsicle" },
    { id: 2, name: "cheerios" },
]

router.get('/', (req, res) => {
    res.json({ items: ITEMS })
})


router.get('/:id', (req, res) => {
    const user = ITEMS.find(u => u.id === +req.params.id)
    res.json({ user })
})



module.exports = router;