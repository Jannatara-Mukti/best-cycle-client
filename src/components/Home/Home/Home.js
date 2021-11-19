import React from 'react';
import Banner from '../Banner/Banner';
import LatestNews from '../LatestNews/LatestNews';
import Products from '../Products/Products';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ShowReview></ShowReview>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;