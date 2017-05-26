var React = require('react');
var ReactDOM = require('react-dom');
var ProjectListing = require('./AdminProjectList');
var devUrl = 'http://localhost:3000/get';
var devUrl2 = 'http://localhost:3000/get';
var prodUrl = 'https://still-forest-90731.herokuapp.com';


var ImageboxComponent = React.createClass({
    render: function(){
        var buttonStyle={
            width: "100px",
            height: "50px",
            padding: "10px 20px"
        }
        var bgStyle={
            backgroundImage: "url(../public/img/pepper.png)",
            backgroundSize: "300px 400px",
            width:"300px",
            height:"400px"
        };
        var textStyle_Big={fontSize:"23pt", color: "white"  };
        var textStyle_Small={ fontSize:"15pt", color: "white"  };
        return(
            <div style={bgStyle}>
                <TextComponent style={textStyle_Big}
                               message="Pepper"/>
                <TextComponent style={textStyle_Small}
                               message="by SoftBank"/></div>
        )
    }
});

var TextComponent = React.createClass({
    render: function(){
        var message = this.props.message;
        return (
            <div style={ this.props.style}>{message} </div>
        );
    }
});

/* Test Data */
var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen'];
var listContainer = React.createClass({
    render:function(){
        return
        (
            <div>listContainer</div>
        );
    }
});
var exampleJSON = {
    "name": "Pepper",
    "author": "Raul Pegan",
    "likes": 3
}

var ProjectSearchList = React.createClass({
    getInitialState:function(){
        return({
            val:1
        });
    },
    one: function(){
        this.setState({
            val:1
        });
    },
    two: function(){
        this.setState({
            val:2
        });
    },
    render: function(){
        var containerStyle= { borderStyle: "none", margin: "0", padding: "0px 0px 0px 30px", width:"100%", display:"flex",
            flexWrap:"wrap",
            height: "800px"
        };

        var projectListJSON = this.props.projectListData; //Includes array of objects
        console.log("Full filtered JSON");
        // console.log(JSON.stringify(projectListJSON, null,4));
        /* Should only get first 9 from list based off http request when you have that up */
        var projectSearchList;
        var temp = [];
        var temp2;
        if(this.state.val==1){
            projectSearchList= projectListJSON.map(function(projectJSON){
                return  (
                    <ProjectListing
                        projectDetails={projectListJSON}
                        views={projectJSON.views}
                        id={projectJSON._id} url={ projectJSON.url }
                        name={ projectJSON.name} author={projectJSON.author}/>
                );
            });
        }
        if(this.state.val==2){
            projectSearchList= projectListJSON.map(function(projectJSON){
                return  (
                    <ProjectListing
                        projectDetails={projectListJSON}
                        views={projectJSON.views}
                        id={projectJSON._id} url={ projectJSON.url }
                        name={ projectJSON.name} author={projectJSON.author}/>
                );
            });

            var temp = []
            var len = projectSearchList.length;
            temp.push(projectSearchList[len-1]);
            temp.push(projectSearchList[len-2]);
            projectSearchList = temp;
        }


        return(
            <div style={containerStyle}>
                {projectSearchList}

                <button style={{width: "100px", height: "50px"}} onClick={this.one}> 1 </button>
                <button style={{width: "100px", height: "50px"}} onClick={this.two}> 2 </button>

            </div>);
    }
});

module.exports = ProjectSearchList;