import { Thread } from "../thread/thread.model";
import { User } from "../user/user.model";
import { Message } from "../message/message.model";
import { uuid } from "../utils/uuid";
import * as ThreadActions from "../thread/thread.actions";
import * as UserActions from "../user/user.actions";
import * as moment from 'moment';
import { Store } from "redux";
import { AppState } from "../app.reducer";
import { getAllMessages } from "../thread/threads.reducer";

// the person using the app is Juliet
export  const me: User = {
    id: uuid(),
    isClient: true, // <-- notice we're specifying the client as this User
    name: 'Juliet',
    avatarSrc: 'https://compresspng.com/images/compresspng/icon.png'
  };
  
  const ladycap: User = {
    id: uuid(),
    name: 'Lady Capulet',
    avatarSrc: 'https://png.pngitem.com/pimgs/s/53-532486_transparent-fishes-png-transparent-background-animated-fish-png.png'
  };
  
  const echo: User = {
    id: uuid(),
    name: 'Echo Bot',
    avatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8mwlqbfaulBGifoX4XexEdlIGOlHxu9slqd5i6SLgAFyz3yEBAOw-zy6Lip-c0R0yFI&usqp=CAU'
  };
  
  const rev: User = {
    id: uuid(),
    name: 'Reverse Bot',
    avatarSrc: 'https://e7.pngegg.com/pngimages/199/234/png-clipart-piglet-small-pig-sitting-animals-pigs.png'
  };
  
  const wait: User = {
    id: uuid(),
    name: 'Waiting Bot',
    avatarSrc: 'https://w7.pngwing.com/pngs/846/267/png-transparent-computer-icons-house-symbol-small-icons-angle-building-triangle-thumbnail.png'
  };
  
export const tLadycap: Thread = {
    id: 'tLadycap',
    name: ladycap.name,
    avatarSrc: ladycap.avatarSrc,
    messages: []
  };
  
  const tEcho: Thread = {
    id: 'tEcho',
    name: echo.name,
    avatarSrc: echo.avatarSrc,
    messages: []
  };
  
  const tRev: Thread = {
    id: 'tRev',
    name: rev.name,
    avatarSrc: rev.avatarSrc,
    messages: []
  };
  
  const tWait: Thread = {
    id: 'tWait',
    name: wait.name,
    avatarSrc: wait.avatarSrc,
    messages: []
  };

  export function ChatExampleData(store: Store<AppState>) {

    // set the current User
    store.dispatch(UserActions.setCurrentUser(me));
  
    // create a new thread and add messages
    store.dispatch(ThreadActions.addThread(tLadycap));
    store.dispatch(ThreadActions.addMessage(tLadycap, {
      author: me,
      sentAt: moment().subtract(45, 'minutes').toDate(),
      text: 'Yet let me weep for such a feeling loss.'
    }));
    store.dispatch(ThreadActions.addMessage(tLadycap, {
      author: ladycap,
      sentAt: moment().subtract(20, 'minutes').toDate(),
      text: 'So shall you feel the loss, but not the friend which you weep for.'
    }));
  
    // create a few more threads
    store.dispatch(ThreadActions.addThread(tEcho));
    store.dispatch(ThreadActions.addMessage(tEcho, {
      author: echo,
      sentAt: moment().subtract(1, 'minutes').toDate(),
      text: 'I\'ll echo whatever you send me'
    }));
  
    store.dispatch(ThreadActions.addThread(tRev));
    store.dispatch(ThreadActions.addMessage(tRev, {
      author: rev,
      sentAt: moment().subtract(3, 'minutes').toDate(),
      text: 'I\'ll reverse whatever you send me'
    }));
  
    store.dispatch(ThreadActions.addThread(tWait));
    store.dispatch(ThreadActions.addMessage(tWait, {
      author: wait,
      sentAt: moment().subtract(4, 'minutes').toDate(),
      text: `I\'ll wait however many seconds you send to me before responding.` +
        ` Try sending '3'`
    }));
  
    // select the first thread
    store.dispatch(ThreadActions.selectThread(tLadycap));
  
    // Now we set up the "bots". We do this by watching for new messages and
    // depending on which thread the message was sent to, the bot will respond
    // in kind.
  
    const handledMessages = {};
  /*
    store.subscribe( () => {
      getAllMessages(store.getState())
        // bots only respond to messages sent by the user, so
        // only keep messages sent by the current user
        .filter(message => message.author.id === me.id)
        .map(message => {
  
          // This is a bit of a hack and we're stretching the limits of a faux
          // chat app. Every time there is a new message, we only want to keep the
          // new ones. This is a case where some sort of queue would be a better
          // model
          
        //   if (handledMessages.hasOwnProperty(message.id)) {
        //     return;
        //   }
        //   handledMessages[message.id] = true;
  
          switch (message.thread.id) {
            case tEcho.id:
              // echo back the same message to the user
              store.dispatch(ThreadActions.addMessage(tEcho, {
                author: echo,
                text: message.text
              }));
  
              break;
            case tRev.id:
              // echo back the message reveresed to the user
              store.dispatch(ThreadActions.addMessage(tRev, {
                author: rev,
                text: message.text.split('').reverse().join('')
              }));
  
              break;
            case tWait.id:
              let waitTime: number = parseInt(message.text, 10);
              let reply: string;
  
              if (isNaN(waitTime)) {
                waitTime = 0;
                reply = `I didn\'t understand ${message}. Try sending me a number`;
              } else {
                reply = `I waited ${waitTime} seconds to send you this.`;
              }
  
              setTimeout(
                () => {
                  store.dispatch(ThreadActions.addMessage(tWait, {
                    author: wait,
                    text: reply
                  }));
                },
                waitTime * 1000);
  
              break;
            default:
              break;
          }
        });
    });
    */
  }