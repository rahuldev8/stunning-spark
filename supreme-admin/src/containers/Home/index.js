import React from 'react';
import Layout from '../../components/Layout';

/**
* @author
* @function Home
**/

export const Home = (props) => {
  return(
    <Layout>
      <div class="jumbotron" style={{margin: '5rem', background: '#fff'}}> 
      <h1>
        Welcome to Admin DashBoard
      </h1>
      <p>
      The iPhone 14 Plus went on sale around the world including India on Friday, bringing a mid-range 
      6.7-inch iPhone model to the 
      masses for the first time. Until now, the 6.7-inch screen size was limited to 
      the high-end iPhone Pro Max, thus limiting the 
      big-screen iPhone experience to Pro users. The iPhone 14 Plus joins the rest of 
      the iPhone 14 lineup, which includes the standard iPhone 14, iPhone 14 Pro and iPhone 14 Pro Max.
      </p>
      </div>
    </Layout>
   )

 }

export default Home