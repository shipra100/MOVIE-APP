import {Component} from "react";

class MovieCard extends Component{
    //using state
    
        //one way of binding it is use anywherw it is global which access anywhere without using binding
       // this.addStars = this.addStars.bind(this);
    
//addStars=() => {
    //form1
/*if(this.state.stars >=5){
    return;
}
   this.setState({
        stars: this.state.stars +0.5
}, () => console.log("stars inside callback:" , this.state.stars));
 console.log("stars: ", this.state.stars);
    
}*/
   //second form
  /* if(this.state.stars >=5){
    return;
   }
   this.setState((prevState) => {
    return {
stars: prevState.stars+0.5
    }
   

    //this.state.stars += 0.5;
   // console.log("this.state.stars: ", this.state.stars);
}
   );
}*/
/*decStars=() => {
    if(this.state.stars <=0){
        return;
    }
    this.setState((prevState) => {
return {
    stars : prevState.stars-0.5
} 
    
} );
}

handleFav = () => {
    this.setState({
        fav: !this.state.fav
    })
}
handleADDToCart = () => {
    this.setState({
        cart: !this.state.cart
    })
}*/
render(){
    //deconstructing
    console.log(this.props); 
    
    //const {movies: data} = this.props;
    //console.log(data);
    //const{title,plot,price,rating,stars,fav,cart} = data;
    const {movies, addStars, decStars, toggleFav , toggleCart} = this.props;
    const{title,plot,price,rating,stars,fav,cart} = this.props.movies;
    return (
    <div className="main">
        <div className="movie-card"> 
<div className="left">
    <img alt="Poster" src="https://www.themoviedb.org/t/p/original/kPL3q8MMJnzaHqsaZGv5OqIGAdh.jpg"/>
</div>
<div className="right">
    <div className="title">{title}</div>
    <div className="plot">{plot}</div>
    <div className="price">Rs. {price}</div>

    <div className="footer"><div className="rating">8.9</div>
    <div className="star-dis">
        <img className="str-btn" alt="decrease"   
         src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
         onClick= {() => {decStars(movies)}}/>
            <img alt="star" 
            src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/>
            <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"
           // onClick= {this.addStars.bind(this)}/> it is reference
           onClick = {() => {addStars(movies)}}/>
    <span className="starCount">{stars}</span>
        </div>

        {/*fav? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>: 
        <button className="favourite-btn" onClick={this.handleFav}>Favourite</button> */}

        <button className= {fav?"unfavourite-btn":"favourite-btn"}
        onClick={() => {toggleFav(movies)}}>{fav?"unfavourite":"favourite"}</button>
        
        <button className= {cart?"unfavourite-btn":"cart-btn"}
        onClick={() => {toggleCart(movies)}}>{cart?"Remove from Cart":"Add to cart"}</button>
   
</div>

    
</div>
        </div>
    </div>
    )
}
} 
 
export default MovieCard;