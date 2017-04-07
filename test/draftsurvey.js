Survey.Survey.cssType = "bootstrap";

var surveyJSON = {pages:[{elements:[{type:"radiogroup",choices:[{value:"1",text:"Male"},{value:"2",text:"Female"},{value:"3",text:"Other"}],name:"What is your sex?"},{type:"radiogroup",choices:[{value:"1",text:"15-19"},{value:"2",text:"20-24"},{value:"3",text:"25-29"},{value:"4",text:"30-34"},{value:"5",text:"35-39"},{value:"6",text:"40-44"},{value:"7",text:"45-49"},{value:"8",text:"50-54"},{value:"9",text:"55-59"},{value:"10",text:"60-64"},{value:"11",text:"65-69"},{value:"12",text:"70-74"},{value:"13",text:"75-79"},{value:"14",text:"80-84"},{value:"15",text:"85-89"},{value:"16",text:"90-94"},{value:"17",text:"95-99"},{value:"18",text:"100+"}],name:"What age range are you in?"},{type:"radiogroup",choices:[{value:"1",text:"Now married"},{value:"2",text:"Widowed "},{value:"3",text:"Divorced "},{value:"4",text:"Separated "},{value:"5",text:"Single"}],name:"Marital Status"},{type:"radiogroup",choices:[{value:"1",text:"Middle School"},{value:"2",text:"High school graduate "},{value:"3",text:"Some college credit"},{value:"4",text:"Associate degree"},{value:"5",text:"Bachelor's degree"},{value:"6",text:"Master's degree "},{value:"7",text:"Professional degree"},{value:"8",text:"Doctorate degree "}],name:"What is the highest degree or level of school you have completed? If currently enrolled, mark the previous grade or highest degree received.",title:"Education\n"},{type:"radiogroup",choices:[{value:"2",text:"Employeed"},{value:"3",text:"Unemployeed"},{value:"4",text:"Student"},{value:"5",text:"Retired "},{value:"5",text:"Disabled "}],name:" Employment Status",title:" Employment Status"},{type:"radiogroup",choices:[{value:"1",text:"American Indian or Alaska Native"},{value:"2",text:"Asian"},{value:"3",text:"Black or African American"},{value:"4",text:"Native Hawaiian or Other Pacific Islander"},{value:"5",text:"White"}],name:"Race"},{type:"radiogroup",choices:[{value:"1",text:"Less than $10,000"},{value:"2",text:"$10,000 to $19,999"},{value:"3",text:"$20,000 to $29,999"},{value:"4",text:"$30,000 to $39,999"},{value:"5",text:"$40,000 to $49,999"},{value:"6",text:"$50,000 to $59,999"},{value:"7",text:"$60,000 to $69,999"},{value:"8",text:"$70,000 to $79,999"},{value:"9",text:"$80,000 to $89,999"},{value:"10",text:"$90,000 to $99,999"},{value:"11",text:"$100,000 to $149,999"},{value:"12",text:"$150,000 or more"}],name:"Household Income ",title:"Household Income"}],name:"Democracy Survey ",title:"Demographic Survey "}]}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(s.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
