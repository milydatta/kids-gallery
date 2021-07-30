import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import Product from '../Product/Product';



const Home = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const products =[
        {   imgUrl:'https://ae01.alicdn.com/kf/HTB1gfRiaU_rK1Rjy0Fcq6zEvVXaa.jpg',
            name:'Sweet Hammer',
            price: '$ 100'  
        },
        {
           imgUrl:'https://i.pinimg.com/originals/41/d2/b8/41d2b8e34019f9947619e65ddde4a14d.jpg',
           name:'Kitchen Set',
           price: '$ 340'
        },
        {
            imgUrl:'https://cf.shopee.com.my/file/e884a77d6928c3b6e38621702e5cf073',
            name:'Funny Crocodile',
            price:'$ 245'
         },
         {
            imgUrl:'https://images.all-free-download.com/images/graphicthumb/elephant_toy_203055.jpg',
            name:'Soft Toy',
            price:'$ 80'
         },
         {
            imgUrl:'https://static-01.daraz.com.bd/p/4f40fbd3d5a13b9867f74c5375fcbdad.jpg',
            name:'Binocular',
            price:'$ 190'
         },
         {
            imgUrl:'https://image.made-in-china.com/202f0j00zuHGgrsyJRcB/Lovely-Toddlerand-Baby-Musical-Toy-Small-Size-Learning-Toys-for-1-3-Year-Old-Kids-H8732260.jpg',
            name:'Guitar',
            price:'$ 260'
         },
         {
            imgUrl:'https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH27f97d9ae90c414a95d3f00142fe7beaT.jpg_480x480.jpg',
            name:'Lovely Block',
            price:'$ 490'
         },
         {
            imgUrl:'https://5.imimg.com/data5/LK/NU/MY-62045652/china-shooters-kids-toy-500x500.jpg',
            name:'Small Shooter',
            price:'$ 150'
         },
         {
            imgUrl:'https://sc04.alicdn.com/kf/HTB1Jx9AacfrK1Rjy1Xdq6yemFXaP.jpg',
            name:'Toy Set',
            price:'$ 120'
         }
     ]
    return (
        <div>
            <Header/>
            <h3 className="mail">Email:{loggedInUser.email}</h3>
            <div className="container">
                <div className="row">
                    
                    
                         {
                             products.map(product => <Product key={product} product={product}></Product>)
                         }
                    
                </div>
            </div>
        </div>
    );
};

export default Home;

//imgUrl: 'https://ibb.co/ZSBgk11',