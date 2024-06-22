import React, { useState } from 'react';

const Inbox = () => {
  const [inboxMessages, setInboxMessages] = useState([
    { id: 1, subject: 'Cara untuk menjaga mental anak', from: 'Dr.Smith', date: '2024-06-25', read: false, content: 'Meeting details: 10 AM, Conference Room' },
    { id: 2, subject: 'Cara mencegah Baby Blues', from: 'Dr.Swarma', date: '2024-06-30', read: true, content: 'Klik Link dibawah ini' },
    { id: 3, subject: 'Holiday Schedule', from: 'HR Department', date: '2024-06-23', read: false, content: 'Upcoming holidays and office closures.' },
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);

  const markAsRead = (id) => {
    setInboxMessages(
      inboxMessages.map((message) =>
        message.id === id ? { ...message, read: true } : message
      )
    );
  };

  const handleShowContent = (id, read) => {
    const message = inboxMessages.find((msg) => msg.id === id);
    if (!message.read) {
      markAsRead(id); // Mark the message as read if it's unread
    }
    setSelectedMessage(message);
  };

  return (
    <div className="flex bg-white rounded-lg shadow-md w-full max-w-lg mx-auto">
      <div className="w-2/3 p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Inbox</h2>
        <ul>
          {inboxMessages.map((message) => (
            <li
              key={message.id}
              className={`p-4 mb-2 rounded-md flex justify-between items-center cursor-pointer ${
                message.read ? 'bg-gray-200' : 'bg-gray-100'
              } hover:bg-gray-300`}
              onClick={() => handleShowContent(message.id, message.read)}
            >
              <div>
                <div className="font-bold">{message.subject}</div>
                <div className="text-gray-600 text-sm">{message.from}</div>
                <div className="text-gray-600 text-xs">{message.date}</div>
              </div>
              <button
                className={`px-3 py-1 rounded ${
                  message.read ? 'bg-pink-500 text-white' : 'bg-blue-500 text-white'
                }`}
              >
                {message.read ? 'Read' : 'Unread'}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedMessage && (
        <div className="w-1/3 p-6 bg-pink-100">
          <h3 className="font-bold mb-2">{selectedMessage.subject}</h3>
          <div className="text-gray-600 text-sm mb-2">{selectedMessage.from}</div>
          <div className="text-gray-600 text-xs mb-2">{selectedMessage.date}</div>
          <p>{selectedMessage.content}</p>
        </div>
      )}
    </div>
  );
};

export default Inbox;
