exports.getPosts = (req, res) => {
    res.json({
        posts: [
            { title: 'Fist post' },
            { title: 'Second post' }
        ]
    });
};