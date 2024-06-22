import React, { useState } from 'react';
import Inbox from '../components/inbox';
import Outbox from '../components/outbox';
import ComposeMessage from '../components/ComposeMessage';

const InboxApp = () => {
  const [showInbox, setShowInbox] = useState(true);
  const [showOutbox, setShowOutbox] = useState(false);
  const [showCompose, setShowCompose] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, { ...newMessage, date: new Date().toISOString().slice(0, 10) }]);
    setShowCompose(false);
    setShowOutbox(true);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <button
            onClick={() => {
              setShowInbox(true);
              setShowOutbox(false);
              setShowCompose(false);
            }}
            className={`px-4 py-2 rounded ${
              showInbox ? 'bg-pink-400 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Inbox
          </button>
          <button
            onClick={() => {
              setShowInbox(false);
              setShowOutbox(true);
              setShowCompose(false);
            }}
            className={`px-4 py-2 rounded ${
              showOutbox ? 'bg-pink-400 text-white' : 'bg-gray-200 text-gray-700'
            } ml-2`}
          >
            Outbox
          </button>
          <button
            onClick={() => {
              setShowInbox(false);
              setShowOutbox(false);
              setShowCompose(true);
            }}
            className={`px-4 py-2 rounded ${
              showCompose ? 'bg-pink-400 text-white' : 'bg-gray-200 text-gray-700'
            } ml-2`}
          >
            Compose
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {showInbox && <Inbox />}
          {showOutbox && <Outbox />}
          {showCompose && <ComposeMessage onSubmit={handleSendMessage} />}
        </div>
      </div>
    </div>
  );
};

export default InboxApp;
