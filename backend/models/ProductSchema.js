const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema;

const productSchema = new mongooseSchema({
    name: {
        type: String,
        required: [true, 'Please enter product name.'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 charactres.']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price.'],
        trim: true,
        maxLength: [5, 'Product price cannot exceed 100 charactres.']
    },
    description: {
        type: String,
        required: [true, 'Please enter product description.']
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message: 'Please select correct category for product'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter product seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0
    },
    numOfReview: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            userName: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

//product is our collection name(table name), so make sure it's appropriate.
const productModel = mongoose.model('product', productSchema);
module.exports = productModel
