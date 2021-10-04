import Subnav from '../../resusable/Subnav';
import dummyNav from '../../dummy/dummy_nav';
import Feature from '../../resusable/feature';
import Header from '../../shared/Header/Header';



const Home = ()=>{
    return(
     <>
        <Header/>
        <div className="sub-nav">
            {dummyNav.map((obj,index)=><Subnav key={index} image={obj.image} Pname={obj.product_name}/> )}     
        </div>
        <Feature field={'clothing'} title={"Today's Clothing Deals"} />
        <Feature field={'gadgets'} title={"Today's Gadgets Deals"}/>
        <Feature field={'personal Care and Grooming'} title={"Personal Care and Grooming"} />
       
     </>)
}

export default Home;