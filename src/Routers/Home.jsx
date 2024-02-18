import Products from '../Components/Products';
import Categories from '../Components/Categories';

const Home = () => {
    return (
        <div className='p-2 p-md-3 p-lg-4'>
            <Categories/>
            <Products/>
        </div>
    );
};

export default Home;