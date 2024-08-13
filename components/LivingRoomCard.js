import React from 'react';

function LivingRoomCard({ room }) {
  return (
    <div className="card">
      <img src={room.imageUrl || 'https://via.placeholder.com/150'} alt={room.title} />
      <h2>{room.title}</h2>
      <p>{room.description}</p>
      <button>Save</button>
      <button>Share</button>
    </div>
  );
}

export default LivingRoomCard;
