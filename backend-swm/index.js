const server = require('./config/database');
const Product = require('./models/productModel')

server.get('/products', async (req,res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})


server.listen(process.env.PORT || '3001', () => {
    console.log(`Server listening on port`,  process.env.PORT || '3001');
})


