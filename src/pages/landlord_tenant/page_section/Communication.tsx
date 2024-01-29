import React from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

interface Message {
  id: number;
  content: string;
  sender: 'admin';
  timestamp: number; // Assuming timestamp is a Unix timestamp in seconds
}

interface CommunicationProps {
  messages: Message[];
}

const messages: Message[] = [
  { id: 1, content: 'Hello there!', sender: 'admin', timestamp: 1643621227 },
  { id: 2, content: 'Welcome to the system.', sender: 'admin', timestamp: 1643621527 },
  { id: 3, content: 'How can I assist you today?', sender: 'admin', timestamp: 1643621827 },
  // Add more messages as needed
];

const formatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  return date.toLocaleString(); // Adjust formatting as needed
};

const Communication: React.FC = () => {
  return (
    <div className='w-full m-2'>
      <List>
        {messages.map((message) => (
          <React.Fragment key={message.id}>
            <ListItem>
              <ListItemText
                primary={message.content}
                secondary={`Admin | ${formatTimestamp(message.timestamp)}`}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Communication;
