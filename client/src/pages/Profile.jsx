import React, { useState } from "react";
import { FiEdit, FiSave, FiXCircle, FiUser, FiMail, FiInfo } from "react-icons/fi";

const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Ashwinth Raj",
    email: "ashwinth@example.com",
    bio: "Full-stack developer passionate about clean code and cool UI!",
    avatar: defaultAvatar,
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser(formData);
    setEditing(false);
  };

  const handleCancel = () => {
    setFormData(user);
    setEditing(false);
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-base-100 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={user.avatar}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-primary"
        />
        <h1 className="text-3xl font-bold">Your Profile</h1>
      </div>

      {!editing ? (
        <div className="space-y-5">
          <p className="flex items-center space-x-3 text-lg">
            <FiUser className="text-primary" /> <span>{user.name}</span>
          </p>
          <p className="flex items-center space-x-3 text-lg">
            <FiMail className="text-primary" /> <span>{user.email}</span>
          </p>
          <p className="flex items-center space-x-3 text-lg">
            <FiInfo className="text-primary" /> <span>{user.bio}</span>
          </p>
          <button
            className="btn btn-primary flex items-center space-x-2 hover:scale-105 transition-transform duration-150"
            onClick={() => setEditing(true)}
          >
            <FiEdit /> <span>Edit Profile</span>
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold flex items-center space-x-2">
              <FiUser /> <span>Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold flex items-center space-x-2">
              <FiMail /> <span>Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold flex items-center space-x-2">
              <FiInfo /> <span>Bio</span>
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              rows={3}
            />
          </div>

          <div className="flex space-x-4">
            <button
              className="btn btn-success flex items-center space-x-2 hover:scale-105 transition-transform duration-150"
              onClick={handleSave}
            >
              <FiSave /> <span>Save</span>
            </button>
            <button
              className="btn btn-outline btn-error flex items-center space-x-2 hover:scale-105 transition-transform duration-150"
              onClick={handleCancel}
            >
              <FiXCircle /> <span>Cancel</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
