// Fetch products from the fake store API
const fetchProducts = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await res.json();
        return data;
    } catch(error) {
        console.error('Failed to fetch products:', error);
        return [];
    }
}

export default fetchProducts;
