export const showNotification = (title, options) => {
    const notification = new Notification(title, options);
  
    notification.onclick = () => {
      window.focus();
    };
  };
  