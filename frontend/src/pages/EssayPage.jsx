import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EssayPage = ({ title, content }) => {
    return (
        <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] font-inter">
            <Header />

            <main className="max-w-2xl mx-auto px-6 pt-32 pb-20">
                <div className="prose prose-lg prose-slate mx-auto">
                    <h1 className="text-3xl font-light tracking-tight text-[#1A1A1A] mb-8 font-serif italic">
                        {title}
                    </h1>

                    <div className="space-y-6">
                        {content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="font-light leading-relaxed text-[#404040] tracking-tight">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default EssayPage;
