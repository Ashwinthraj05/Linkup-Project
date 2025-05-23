import React, { useState } from "react";
import { FiBell, FiCheckCircle, FiTrash2 } from "react-icons/fi";

const Dashboard = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New project request from John", avatar: "https://i.pravatar.cc/40?img=1" },
    { id: 2, message: "Your profile was viewed 10 times today", avatar: "https://i.pravatar.cc/40?img=2" },
    { id: 3, message: "Reminder: Meeting at 3 PM", avatar: "https://i.pravatar.cc/40?img=3" },
  ]);

  const handleClearNotifications = () => setNotifications([]);

  return (
    <div className="p-8 max-w-4xl mx-auto bg-base-100 rounded-lg shadow-lg">
      <div className="flex items-center space-x-3 mb-6">
        <FiBell size={28} className="text-primary" />
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <FiBell /> Notifications
        </h2>

        {notifications.length === 0 ? (
          <p className="text-gray-500 italic">No new notifications</p>
        ) : (
          <ul className="space-y-4">
            {notifications.map(({ id, message, avatar }) => (
              <li
                key={id}
                className="flex items-center p-4 bg-base-200 rounded-lg shadow hover:bg-base-300 cursor-pointer transition"
                onClick={() =>
                  setNotifications(notifications.filter((n) => n.id !== id))
                }
                title="Click to mark as read"
              >
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <span className="flex-grow">{message}</span>
                <FiCheckCircle className="text-green-500" size={20} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={handleClearNotifications}
        disabled={notifications.length === 0}
        className="btn btn-warning btn-outline"
      >
        <FiTrash2 className="mr-2" /> Clear All
      </button>
    </div>
  );
};

export default Dashboard;
