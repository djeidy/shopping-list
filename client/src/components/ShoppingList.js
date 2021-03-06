import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'; 
import {CSSTransition, TransitionGroup} from 'react-transition-group'; 
import {connect} from 'react-redux'; 
import { getItems, deleteItem } from './../actions/ItemActions';

class ShoppingList extends Component {
    componentDidMount(){
        this.props.getItems(); 
    }
    onDeleteClick = (id)=>{
        this.props.deleteItem(id); 
    }
    render() {
        const {items} = this.props.item; 
        return (
            <div>
                <Container>
                    <ListGroup>
                        <TransitionGroup className="shopping-list">
                            {items.map(({_id, name})=>(
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            className='remove-btn'
                                            color='danger'
                                            size='sm'
                                            onClick={()=>this.onDeleteClick(_id)}
                                        >&times;</Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        item: state.item
    }
}

export default connect(mapStateToProps, {getItems,deleteItem})(ShoppingList);