var React = require('react');
var ReactRouter = require('react-router');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Panel = React.createClass({
        getInitialState: function(){
          return {
            panelData: [
                  {
                    title: "The Adventures of Class 196",
                    description: "The good, the ugly, and the snacks that come with the class.  Read about it here!",
                    img: "http://res.cloudinary.com/djmk9vktk/image/upload/v1482991159/arcadebox_slsyln.jpg",
                    hook: "class"
                  },
                  {
                    title: "MakerFaire & Showcase",
                    description: "The Adventures of Class 196",
                    img: "http://res.cloudinary.com/djmk9vktk/image/upload/v1482990179/carousel_2_lvukal.jpg",
                    hook: "makerfaire"
                  },
                  {
                    title: "Goofy Projects",
                    description: "A Curated selection of cool projects",
                    img: "http://res.cloudinary.com/djmk9vktk/image/upload/v1474080899/FullSizeRender_fbkwke.jpg",
                    hook: "magic"
                  },
                  {
                    title: "ECE Department Explosion",
                    description: "Students run the place - MakerSpace",
                    img: "http://res.cloudinary.com/djmk9vktk/image/upload/v1482990180/carousel_4_gnmo2p.jpg",
                    hook: "ece"
                  }
            ]
          }
        },
        render: function(){
          var list = this.state.panelData.map(function(item){
            return (
              <Link to={"/content/" + item.hook } style={{
                backgroundColor: "black",
                padding: "65px 5px 15px 5px", flex:"1", width: "24%", height: "500px"}} >
                <div style={{backgroundColor: "white", padding: "15px 5px 15px 5px", flex:"1", height: "500px"}} >
                  <img style={{width:"100%", height: "300px"}} src={item.img}></img>
                  <div style={{padding: "5px 40px 5px 40px", textAlign: "center", height: "100px"}}>
                      <h2 style={{color: "black", fontSize: "23px"}}> {item.title} </h2>
                  </div>
                      <p style={{padding: "0px 10px 0px 10px", textAlign: "center", fontSize: "1vw"}}> {item.description} </p>
                </div>
              </Link>
            );
          });

        return(
        		<div style={{display: "flex", width:"100%", height: "700px",
            backgroundColor: "black",
            // backgroundImage: "url(\"http://res.cloudinary.com/djmk9vktk/image/upload/v1482990472/wood_njgiqu.jpg\")" ,
            padding: "0px 50px 0px 50px"}}>

              <div style={{color:"white"}}> {"What's New"}</div>


              {list}
    				</div>
              )
                }
});
module.exports = Panel;
