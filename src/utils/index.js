import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};

export const showNotification = (title, options) => {
  const notification = new Notification(title, options);

  notification.onclick = () => {
    window.focus();
  };
};

setTimeout(async () => {
  showNotification("Hello!", {
    body: "This is a desktop notification from your React app!",
    icon: "https://example.com/icon.png",
  });
}, 5000);
