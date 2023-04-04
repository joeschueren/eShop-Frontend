import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Featured from "./Featured";
import Carousel from "./Carousel";
import Itemrow from "./Itemrow";

function Home(props)
{
    const { number } = useParams();
    const navigate = useNavigate()
    const location = useLocation()
    let startAt = 0;
    if(location.pathname !== "/"){
        startAt = 5 + ( 9 * (parseInt(number)-1));
    }
    else{
        startAt = 5
    }
    if(startAt >= 19){
        navigate("/");
    }

    let pageOne = "page-handler";
    let pageTwo = "page-handler";
    if(parseInt(number) !== 2){
        pageOne = "page-handler-active";
    }
    else{
        pageTwo = "page-handler-active";
    }



    return(
    <div>
    <section id="item-carousel" className="section">
    <div className="container-fluid">
        <h1 className="section-title carousel-title">Featured Products -</h1>
        <div className="header-underline"></div>
    </div>
    <Carousel 
        products={[props.products[0], props.products[1], props.products[2]]}
        passProps={props.passProps}/>
</section>
<section id="featured" className="section">
    <div>    
        <h1 className="section-title">Exclusive Deals -</h1>
        <div className="header-underline"></div>
    </div>

    <div className="container-fluid">
            <div className="row row-eq-height">
                <Featured 
                    products={props.products[3]}
                    discount={.20}
                    passProps={props.passProps}/>
                <Featured 
                    products={props.products[4]}
                    discount={.15}
                    passProps={props.passProps}/>
            </div>
    </div>
</section>
<section id="items" className="section">
    <div>
        <h1 className="section-title">All Products -</h1>
        <div className="header-underline"></div>
    </div>
    <Itemrow key="1" products=
    {[props.products[startAt],
      props.products[startAt+1] || [],
      props.products[startAt+2] || []]}
      passProps={props.passProps}/>
    <Itemrow key="2" products=
    {[props.products[startAt+3] || [],
      props.products[startAt+4] || [],
      props.products[startAt+5] || []]}
      passProps={props.passProps}/>
    <Itemrow key="3" products=
    {[props.products[startAt+6] || [],
      props.products[startAt+7] || [],
      props.products[startAt+8] || []]}
      passProps={props.passProps}/>
    <div className="container-fluid">
        <div className="row">
            <div className="page-handler-container col-lg-12">
                <a href="/" className={pageOne}>1</a>
                <a href="/2" className={pageTwo}>2</a>
            </div>
        </div>
    </div>
</section>
</div>);
}

export default Home;