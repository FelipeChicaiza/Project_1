import React from 'react'

const EventsCard = ({title,date,image,foodType,url}) => {
    const Cardstyle ={
        flex: '1 0 20%',
        width: '300px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#A2F5E4',
        margin: '10px',
        marginBottom: '20px',
        padding: '10px',
    }

    const imgStyle = {
        width: '100%',
        height: '60%',
        objectFit: 'cover',
        borderRadius: '8px 8xp 0 0',
    }

    const buttonClick = () => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

  return (
    <div className='events-card' style={Cardstyle}>
        <img style={imgStyle} src={image} alt={title} />
        <div>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{foodType}</p>
                <button onClick={buttonClick}>
                WEB
                </button>
        </div>
    </div>
  )
}

export default EventsCard;
