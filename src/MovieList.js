import {Component} from "react";
import MovieCard from "./Moviecard";


class MovieList extends Component{
     
  /* addStars=() => {
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

     render(){
        
         
        // const{title,plot,price,rating,stars,fav,cart,poster} = this.state.movies; 
       const {movies, addStars ,decStars, toggleFav, toggleCart} =this.props;
       console.log(this.props);
         return (
            <>


  {movies.map((movie) => <MovieCard movies = {movie}
               addStars ={addStars}
               decStars= {decStars}
             toggleCart = {toggleCart}
             toggleFav = {toggleFav}
               
         key={movie.id}/>) }
  

</> 
        )
     }
  
           

   }
export default MovieList;
   