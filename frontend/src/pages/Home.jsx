import React from 'react';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <main className="pb-16">
        <Timeline />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Home;
