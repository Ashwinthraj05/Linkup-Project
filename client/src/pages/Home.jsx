// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChatAlt2Icon, UsersIcon, ClipboardListIcon } from '@heroicons/react/outline';

const features = [
  {
    icon: <UsersIcon className="h-12 w-12 text-primary" />,
    title: "Find Collaborators",
    description: "Search and connect with like-minded students and developers."
  },
  {
    icon: <ClipboardListIcon className="h-12 w-12 text-primary" />,
    title: "Post Projects",
    description: "Share your ideas and find teammates to help you build."
  },
  {
    icon: <ChatAlt2Icon className="h-12 w-12 text-primary" />,
    title: "Team Chat",
    description: "Collaborate instantly with project teammates."
  }
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6">Connect. Collaborate. Create.</h1>
        <p className="text-lg text-gray-400 mb-8">
          Find project collaborators and hackathon teammates effortlessly.
        </p>
        <Link
          to="/register"
          className="btn btn-primary btn-lg"
        >
          Get Started
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {features.map(({ icon, title, description }, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-left hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
          >
            <div className="mb-3">{icon}</div>
            <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
