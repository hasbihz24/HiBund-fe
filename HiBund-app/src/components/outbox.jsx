import React, { useState } from 'react';

const Outbox = () => {
  const [outboxMessages, setOutboxMessages] = useState([
    { id: 1, subject: 'Bagaimana Cara menagani baby blues', to: 'Dr.smith', date: '2024-06-25', content: 'Dokter saya baru melahirkan 2 minggu kemarin....' },
    { id: 2, subject: 'Project Proposal', to: 'Client B', date: '2024-06-24', content: 'Attached is the proposal document for review.' },
    { id: 3, subject: 'Follow-up on Meeting', to: 'Client C', date: '2024-06-23', content: 'Here are the meeting notes for your reference.' },
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleShowContent = (id) => {
    const message = outboxMessages.find((msg) => msg.id === id);
    setSelectedMessage(message);
  };

  return (
    <div className="flex bg-white rounded-lg shadow-md w-full max-w-lg mx-auto">
      <div className="w-2/3 bg-white p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Outbox</h2>
        <ul>
          {outboxMessages.map((message) => (
            <li
              key={message.id}
              className="p-4 mb-2 rounded-md flex justify-between items-center bg-gray-100 cursor-pointer"
              onClick={() => handleShowContent(message.id)}
            >
              <div>
                <div className="font-bold">{message.subject}</div>
                <div className="text-gray-600 text-sm">To: {message.to}</div>
                <div className="text-gray-600 text-xs">{message.date}</div>
              </div>
              <button className="px-3 py-1 rounded bg-pink-500 text-white">
                View
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedMessage && (
        <div className="w-1/3 bg-pink-100 p-6">
          <h3 className="font-bold mb-2">{selectedMessage.subject}</h3>
          <div className="text-gray-600 text-sm mb-2">To: {selectedMessage.to}</div>
          <div className="text-gray-600 text-xs mb-2">{selectedMessage.date}</div>
          <p>{selectedMessage.content}</p>
        </div>
      )}
    </div>
  );
};

export default Outbox;
