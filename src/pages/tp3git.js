import React,{Component} from "react";
import { Spinner, Card, Row, Col } from 'reactstrap';
import Moment from 'react-moment';

class Page extends Component{
    


    state = {
        loading: true,
        currentDateTime: Date().toLocaleString()
    }

      
    

  async  componentDidMount() {
      const url = "https://api.github.com/search/repositories?q=created:%3E2020-11-05&sort=stars&order=desc";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ repos: data.items, loading: false });
      console.log(data);
      
      

        


    }
    
    render() {
        if (this.state.loading) {
            return <Spinner className="spinner" color="danger" />;
        }
        if (!this.state.repos) {
            return <div>aucun repos trouve!</div>;
        }
        
        return (<div >
        
            {this.state.repos.map(rep => {
                return (
                    <Card
                        className=" m-5 p-5 border-1">
                        <Row >
                            <Col xs="3">
                                <Card className="">
                                     <img className="mw-100" src={ rep.owner.avatar_url} alt=""/>
                                </Card>
                               
                            </Col>
                            <Col xs="9">
                                <div><h4>{rep.name}</h4>
                                    <p>{rep.description}</p>
                                    <div className="pt-2">
                                         <span className="rounded p-2  bg-warning text-dark font-weight-bold">
                                            Stars: { rep.stargazers_count}
                                        </span>
                                        <span className="rounded p-2 mb-2 m-3 bg-info text-white font-weight-bold">
                                            Open issues : {rep.open_issues}
                                        </span>
                                        <span>
                                            Submitted <Moment diff={rep.created_at} unit="days">{ this.state.currentDateTime }</Moment>  days ago by {rep.full_name}
                                            
                                        </span>
                                    </div>
                                   
                                </div>
                               
                            </Col>

                        </Row>
                        
                      
                    </Card>
                )
            }
            )}

        </div>);
    }
}
export default Page;