import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://png.pngtree.com/thumb_back/fw800/back_our/20190617/ourmid/pngtree-shopping-mall-poster-background-template-image_127386.jpg" alt="" />
            <div className="home__row">
                <Product
                    id="1232123"
                    title="The Lean Startup"
                    price="2500"
                    rating={5}
                    image="https://2y74re2whhs715gxj621k1u4-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/inspired.jpg"
                />
                <Product
                    id="1232123"
                    title="The Lean Startup"
                    price="2500"
                    rating={5}
                    image="https://cdn.brandfolder.io/F97BMUF5/at/q6xz3f-hd2bc-701jdb/Hello-Awesome-Mockup.jpg"
                />
                <Product
                    id="1232123"
                    title="The Lean Startup"
                    price="2500"
                    rating={5}
                    image="https://cdn.shopify.com/s/files/1/0051/7692/products/aba-000004-pp-3_660x@2x.progressive.jpg?v=1482333028"
                />
                {/* <Product
                    id="1232123"
                    title="The Lean Startup"
                    price="2500"
                    rating={5}
                    image="https://blog.getenjoyhq.com/content/images/2019/03/inspired-how-to-create-tech-products-customer-love-cover.jpg"
                /> */}
            </div>
        </div>
    )
}

export default Home;
