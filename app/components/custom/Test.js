var React = require('react');
var ReactRouter = require('react-router');
var Detail = require('../../components/custom/Detail');
var $ = require('jquery');

var Carousel = React.createClass({
getInitialState: function(){
  return {
    ctr  : 0,
    paths: [
      "http://res.cloudinary.com/djmk9vktk/image/upload/v1482991159/arcadebox_slsyln.jpg",
      "http://res.cloudinary.com/djmk9vktk/image/upload/v1483597306/StreetFighter2_kfmo3f.jpg",
      "http://res.cloudinary.com/djmk9vktk/image/upload/v1482990179/carousel_2_lvukal.jpg",
      "http://res.cloudinary.com/djmk9vktk/image/upload/v1482990180/carousel_3_ez6iml.jpg",
      // "http://res.cloudinary.com/djmk9vktk/image/upload/v1482990180/carousel_4_gnmo2p.jpg"
      // "../public/img/carousel_2.jpg",
      // "../public/img/carousel_3.jpg",
      // "../public/img/carousel_4.jpg"
    ]
  }
},
switchSlideLeft: function(inc){
  var newCtr = (this.state.ctr == 3) ? 0 : this.state.ctr + 1;
  this.setState({
    ctr  : newCtr,
    paths: this.state.paths
  });
},
switchSlideRight: function(inc){
  var newCtr = (this.state.ctr == 0) ? 3 : this.state.ctr - 1;
  this.setState({
    ctr  : newCtr,
    paths: this.state.paths
  });
},
componentDidMount: function() {
  var img_array = [1, 2, 3, 4],
         newIndex = 0,
         index = 0,
         interval = 3000;
     (function changeBg() {
             index = (index + 1) % img_array.length;

                 $("#cf7 img").removeClass("opaque");
                 $("#cf7 img").eq(index).addClass("opaque");
                 $("#cf7_controls span").removeClass("selected");
                 $(this).addClass("selected");
                 // console.log(newImage);
         setTimeout(changeBg, interval);
     })();
     this.setState({
       ctr  : newCtr,
       paths: this.props.links
     });
},
render: function(){
    var imgStyle = {height:"100%", padding: "0%", width:"100%"};
return  (
  <div style={{backgroundColor:"#192930", height: "1000px", marginTop:"20px", paddingLeft:"20px", paddingRight:"20px" }} >
//
 </div>
)
}
})
/* Correct one here */
    //  <div style={{height: "500px", width: "100%", backgroundImage: 'url(' + this.state.paths[this.state.ctr] + ')',
    //  backgroundSize: "contain",
    //  backgroundPosition: "center",
    // //  backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat"}}>
    //    <div style={{margin: "30% 0px 30% 10px", verticalAlign: "middle", float: "left", height: "100%"}} ><button  style={{margin:"auto"}}  onClick={this.switchSlideLeft}> {"<"} </button> </div>
    //   <Detail />
    //
    //
    //    <div style={{margin: "30% 10px 30% 0px", marginBottom: "30%", verticalAlign: "middle", float: "right", height: "100%"}} ><button   onClick={this.switchSlideRight}> {">"} </button> </div>
    //  </div>
    //

     /* fun */


    //  <img style={{height:"500px", width:"500px"}} src="/public/img/carousel_2.jpg"/>
    //  </li>
    //  <li>
    //  <img style={{height:"500px", width:"500px"}} src="/public/img/carousel_3.jpg"/>
    //  </li>
    //  <li>
    //  <img  style={{height:"500px", width:"500px"}} src="/public/img/carousel_4.jpg"/>

module.exports = Carousel;
