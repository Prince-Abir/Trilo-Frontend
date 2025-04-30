import ProductCard from './Card'
import NavBar from './NavBar';

function Home() {
    const demoProduct = {
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Wireless Earbuds',
        category: 'Electronics',
        price: 89.99,
        rating: 4,
        reviewCount: 215,
        colors: ['#000000', '#6c757d', '#e83e8c'],
        isOnSale: true
    };

    return (


        <main>
            <div>

                <NavBar />
            </div>

            <div className="container py-5">
                <h1>Flash Sale!</h1>
                <div className="row">
                    <ProductCard product={demoProduct} />
                    <ProductCard product={demoProduct} />
                    <ProductCard product={demoProduct} />
                    <ProductCard product={demoProduct} />
                    <ProductCard product={demoProduct} />
                    <ProductCard product={demoProduct} />
                    <ProductCard product={demoProduct} />
                    <ProductCard product={demoProduct} />
                    <ProductCard product={demoProduct} />
                    <ProductCard product={demoProduct} />
                    <ProductCard product={demoProduct} />
                    <ProductCard product={demoProduct} />
                </div>
            </div>


        </main>
    );
}

export default Home;