import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props
        if(location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const {location} = this.props;
        if(location.state){
        return (
            <div className="detail__container">
                <img src={location.state.poster} alt={title} title={title}/>
                <span>{location.state.title}</span>
                <h5 className="movie__year">{location.state.year}</h5>
                        <p className="movie__summary">{location.state.summary}</p>
            </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;