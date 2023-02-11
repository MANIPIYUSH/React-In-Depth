const heading = React.createElement("h1",{
    id:"title"
},
"piyush");

const heading1 = React.createElement("h2",{
    id:"title"
},
"mani");

const container =  React.createElement("h1",{
    id:"container"
},
[heading ,heading1]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container)
