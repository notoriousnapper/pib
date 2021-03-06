
/* About.js */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Frame = require('../../components/Frame');
var Bar = require('../../components/Bar');
var TextComponent = require('../../components/custom/TextComponent');
var Carousel = require('../../components/custom/Carousel');
var Panel = require('../../components/homepage/Panel');
// var LabelCarousel = require('../../components/custom/LabelCarousel');
// var BookingFrame = require('../../components/aboutpage/BookingFrame');

var Label = React.createClass({
  render: function(){
    var labelStyle = {
      backgroundColor: "white",
      height: "20px"
    }
    return (<div>{this.props.label}</div>);
  }
})
// <Carousel />
var About = React.createClass({

        render: function(){
				var textStyle = {
          margin: "0 auto",
          width: "40%",
					// backgroundColor: "white",
          textAlign: "center",
          marginTop: "20px",
					fontSize:"14px",
					fontFamily: "\'Montserrat\', sans-serif",
          color: "#7691AA"
				};

        var textStyle2 = {
          ...textStyle, ...{marginTop:"0"}
        };



				var boldStyle = {
					fontSize:"36px",
					fontWeight: "bold", //400 normal, 700 bold
					fontFamily: "\'Montserrat\', sans-serif",
					textAlign: "center",
					// backgroundColor: "white",
          color: "#164065"
				};
				var bgStyle = {
          padding: "0px 50px 0",
          // backgroundColor: "white",
  				// backgroundImage: "url(\"http://res.cloudinary.com/djmk9vktk/image/upload/v1487692846/bgyellow_nevfha.jpg\")",
          backgroundColor: "#EEEEEE"
				};
				var bgImgStyle = {
				padding: "10px 10%",
			  height:  "800px",
			  height: "100vh",
			  maxWidth: "80%",
			  // backgroundImage: "url('/public/img/landingpage.jpg')", // figure out fast load
				backgroundImage: "url(\"http://res.cloudinary.com/djmk9vktk/image/upload/v1472778560/landingpage.jpg\")",
			  backgroundSize: "cover",
			  opacity: "0.8",
			  zIndex:"1" ,
			  display:"flex",
			  flexDirection: "column",
				flex:"1"
		};
				var bgImgStyle2 = {
			  height:  "500px",
			  height: "100vh",
			  maxWidth: "80%",
				width: "auto",
			  // backgroundImage: "url('/public/img/landingpage.jpg')", // figure out fast load
				backgroundImage: "url(\"http://res.cloudinary.com/djmk9vktk/image/upload/v1482990180/carousel_4_gnmo2p.jpg\")",
			  backgroundSize: "cover",
			  opacity: "0.8",
			  zIndex:"1" ,
			  display:"flex",
			  flexDirection: "column"
                // <img style={{display:"inline-block", float:"right", height:"400px", width:"400px"}} src={'/public/img/girl_graphic.png'}/>
                // <img style={{display:"inline-block", float:"left",height:"400px", width:"400px"}} src={'/public/img/boy_graphic.png'}/>
		};
        return(
        <div style={bgStyle}>
          <div style={{backgroundColor:"#E2E7E9", height: "1800px"}}>
          <div id="panelOne" style={{backgroundColor:"#656786",
            // backgroundImage: "url('http://res.cloudinary.com/djmk9vktk/image/upload/v1484795377/wood_ahxhaq.jpg')",
                height: "720px", color: "white", paddingTop:"120px"}}>
                <TextComponent id="title" style={{...boldStyle, ...{fontSize:"35px", color:"#DCDDE1"}}} message={'ABOUT US'}/>
              <div style={{margin:"0 auto"}}>
                <img style={{display:"block", margin:"0 auto", marginTop:"20px", height:"400px", width:"400px"}} src={'http://res.cloudinary.com/djmk9vktk/image/upload/v1488857527/arcade-emulator/boy_graphic.png'}/>
                <TextComponent style={{...textStyle,...{color:"#DCDDE1", fontSize:"20px"}}} message={"Hi There! We are Project-In-A-Box, and we promote hands-on learning for ECE students through projects"}/>
              </div>
          </div>
          <div id="panelTwo" style={{display:"block", width:"100%", height: "900px"}}>
              <div style={{height: "60px", marginTop: "30px"}}></div>
                <TextComponent style={boldStyle} message={'Our Goal:'}/>
                <TextComponent style={boldStyle} message={'To Bridge Lecture Learning With Application'}/>
                <div style={{margin: "0 auto", height: "45px", width:"50px"}} >
                </div>

                <div id="centerFold" style={{display:"flex", padding:"10px 30px"}}>
                  <div style={{flex:"1", width: "80%", margin: "0 auto", height: "300px"}}>
                    <img style={{height:"100%"}}   src="http://res.cloudinary.com/djmk9vktk/image/upload/v1472778560/landingpage.jpg" style={{width:"80%",height:"100%",margin:"2.5%"}}/>
                    <img style={{height:"100%"}}   src="http://res.cloudinary.com/djmk9vktk/image/upload/v1485133458/arcade-emulator/IMG_2504_w7gudt.jpg" style={{width:"80%",height:"100%",margin:"2.5%"}}/>
                  </div>

                <div id="centerText" style={{flex:"1", paddingTop:"20px"}}>
                  <TextComponent style={{...{fontSize:"14px", fontFamily: "\'Montserrat\', sans-serif", color: "#164065",fontSize:"20px", padding:"0px"}}} message={" Project-In-A-Box is an engineering program started by UCSD's ECE department to give undergraduates more hands-on projects to learn from."} />
                  <br/>
                  <br/>
                  <TextComponent style={{...{fontFamily: "\'Montserrat\', sans-serif", color: "#164065",fontSize:"20px", padding:"0px"}}} message={ "  The program began when Professor Truong Nguyen noticed that students were taking many theoretical classes without application, or seeing the concepts in action.  Working together with various student orgs, he started this program focusing on a student-first environment with a selection of projects made by students, for students"}/>
                  <br/>
                  <br/>
                  <TextComponent style={{...{fontFamily: "\'Montserrat\', sans-serif", color: "#164065",fontSize:"20px", paddingLeft:"0px", paddingRight:"0px"}}} message={"Since its inception in 2015, the program has now grown to host more than 35 tutors, and also includes an upper-divison ECE class for undergraduates."} />
                </div>
                </div>
            </div>
            </div>

        </div>
              )
                }
});
module.exports = About;

              // <img style={{height:"100%"}}   src="http://res.cloudinary.com/djmk9vktk/image/upload/v1472778560/landingpage.jpg" style={{width:"45%",height:"100%",margin:"2.5%"}}/>

            /* Background Stretch */
            //   <div id="bgImg" style={{marginTop: "40px", height: "400px", width: "100%", backgroundImage:
            //   "url(\"http://res.cloudinary.com/djmk9vktk/image/upload/v1487696496/bgabout_nsjx3k.jpg\")",
            //   backgroundSize: "cover"
            // }}> </div>



              // <img src="http://res.cloudinary.com/djmk9vktk/image/upload/v1472778560/landingpage.jpg" style={{minHeight:"100%", maxHeight: "100%"}}/>
            // <TextComponent style={textStyle} message={'Projects bring a dimension of learning and growth that crucial to an engineers growth.  That\'s why there\'s Project-in-a-box, a program designed to help students engage and learn while having fun.'}/>
              // <Carousel style={{flex:"1"}}/>
              // <Panel style={{flex:"1" }}/>
            // <embed src="http://www.apa.org/pubs/journals/features/hea-a0034406.pdf" width="550" height="750"/>
              // <div style={{width:"100%", backgroundColor: "#F1C232", height:"60px", flex:"1"}}></div>


              /* Flex */
              // <div style={{display: "flex"}}>
              //   <div style={{flex: "1"}}>
              //   <TextComponent style={boldStyle} message={'Educational, Personal, and Fun'} />
              //   <TextComponent style={textStyle} message={'Projects bring a dimension of learning and growth that crucial to an engineerse growth.  That\'s why there\'s Project-in-a-box, a program designed to help students engage and learn while having fun.'}/>
              //   </div>
              //   <div style={{flex: "1"}}>
              //     <img src="http://res.cloudinary.com/djmk9vktk/image/upload/v1472778560/landingpage.jpg" style={{width:"45%",height:"45%",margin:"2.5%"}}/>
              //     <img src="http://res.cloudinary.com/djmk9vktk/image/upload/v1482990180/carousel_4_gnmo2p.jpg" style={{width:"45%",height:"45%",margin:"2.5%"}}/>
              //     <div style={textStyle}> {'“It was a chill class. I appreciated being able to come into class and go straight into working on projects. I loved the vibe and intimate environment I had with my classmates and professor/TA/tutors.  Hearing what Professor Nguyen had to say about the direction he wants the department to go to was amazing. I\'ve been recommending this class to my ECE friends.'} </div>
              //     <div style={textStyle}> {'-Luzanne Batoon'} </div>
              //   </div>
              // </div>
              //








              //
            	// <Frame style={{paddingLeft: "100px", paddingRight: "100px"}}>
              // <div style={{width:"600px", height:"auto", margin: "auto"}}>
	            // 	<TextComponent style={{textAlign: "center", margin:"auto", fontSize:"30px", fontWeight: "bold"}} message= {'Welcome to Project in a Box'} />
              // </div>
              //
              //
            	// 	<div style={{display:"flex", flexDirection: "column"}}>
              //   <br/>
	            // 	<TextComponent message= {'Project-in-a-box is an idea – that students should have more opportunities to learn through  hands-on experience.  We know how tough it is to go through some tutorials to learn: lack of documentation, lack of help and support, and sometimes, trouble ordering and finding the right parts.'}/>
	            // 	<TextComponent message ={'So Professor Nguyen, and a handful of UCSD students worked to change that.  Project-in-a-box holds projects designed by students, for students. We provide the projects and the parts, as long as you bring the enthusiasm to get your hands dirty!'}/>
	            // 	<TextComponent message = {'Our goal is to promote hands-on learning through project experience, Providing quality instruction, support, and open-ended projects that students can take further on their own.'}/>
	            // 	<TextComponent message = {'Eventually, we will reach out to neighboring universities and community colleges, to provide The parts and a variety of projects that professors can order for classes & enhance their learning opportunities.'}/>
	            // 	<TextComponent mesage ={'If you’re interested, sign up for upcoming news and access to become a project-in-a-box, where you can watch your project go live and get its own special package!'}/>
	            // 	</div>
            	// </Frame>
              //
