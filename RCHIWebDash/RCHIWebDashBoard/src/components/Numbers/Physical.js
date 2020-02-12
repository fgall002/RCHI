import React from 'react';
import {ResponsivePie} from "@nivo/pie";
import { ResponsiveBar } from '@nivo/bar';

export default class Physical extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            url : this.props.url,
            height : this.props.height,
            mydata : [],
            number: 0,
        }

        this.runTotal = this.runTotal.bind(this)
    }



    async fetchData(){

        var self = this
        await fetch(this.state.url, {
            headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then((data) =>{
                this.setState({mydata:data})
            })
            .catch(err => {
                console.log("no data found")
            })

        console.log("data:")
        console.log(this.state.mydata)





    }

    async componentWillReceiveProps(){
        this.setState({url : this.props.url})
        await this.fetchData()
    }
    async componentWillMount(){
        await this.fetchData()
    }


    round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    runTotal(){

        let percent;
        let i;
        let totalNum;
        for (i = 0; i < this.state.mydata.length; i++) {
            if(this.state.mydata[i].trend === 'Homeless Population ' && this.state.mydata[i].category === "Unsheltered"){
                totalNum = this.state.mydata[i].total;

            }
            if(this.state.mydata[i].category === "Physical Disability"){
                this.state.number = this.state.mydata[i].total;
            }




        }

        console.log(this.state.number);
        console.log(totalNum);
        percent = (this.state.number/totalNum) * 100;
        percent = this.round(percent, 0);


        return (
            <div className = "component-header" style = {{fontSize: "24px"}}>
                18 %
            </div>
        )






    }
    render() {
        return (
            <div style = {{height: this.state.height}}>
                {this.state.mydata ? this.runTotal(): null}
                <span className = "component-header">have physical disability</span>
            </div>

        )
    }
}