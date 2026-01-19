import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { essays } from '../data/mock';

const Essays = () => {
    return (
        <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] font-inter">
            <Header />

            <main className="max-w-2xl mx-auto px-6 pt-32 pb-20">
                <div className="prose prose-lg prose-slate mx-auto">
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-[#404040] tracking-tight font-serif italic mb-12">
                        "This is where ahmed writes his life"
                    </p>

                    <div className="space-y-6">
                        {essays.map((essay) => (
                            <a
                                key={essay.slug}
                                href={essay.slug}
                                className="block text-lg font-light text-[#1A1A1A] hover:text-[#6B7280] transition-colors duration-200 decoration-1 underline-offset-4 hover:underline"
                            >
                                {essay.title}
                            </a>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Essays;
