import React from "react";
import { Link } from "react-router-dom";

class cordinatorlist extends React.Component {

    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("http://localhost:5000/Disp_cordinator")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }



    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "product-list">
            <h1> Photo list </h1>  
                <ul>
                 <li>Index no.</li>
                 <li>fname</li>
                 <li>lname</li>
                 <li>address</li>
                 <li>cityid</li>
                 <li>contact</li>
                 <li>email</li>
                 <li>deptid</li>
                 <li>Photo</li>
                 <li>Operation</li>
             </ul>
    {
             items.map((item,index)=>
             <ul key={item}>
                 <li>{index+1}</li>
                 <li>{item.fname}</li>
                 <li>{item.lname}</li>
                 <li>{item.address}</li>
                 <li>{item.cityid}</li>
                 <li>{item.contact}</li>
                 <li>{item.email}</li>
                 <li>{item.deptid}</li>
                 <li><img src={item.profimg} alt="dp"></img></li>
                 <li><button  >Delete</button></li>
             </ul>
             )

          }
            
        </div>
    );
}
}
export default cordinatorlist;

