import React, { useState, useCallback } from 'react';
import { queryResumeWithGemini, isGeminiAvailable } from '../services/geminiService';
import { PortfolioData } from '../types';
import Section from './Section';
import Card from './Card';
import { SpinnerIcon } from './icons';

const AiQueryIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-8 h-8"}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5M19.5 8.25h-1.5m-15 3.75h1.5m15 0h1.5M12 12a2.25 2.25 0 00-2.25 2.25V18a2.25 2.25 0 002.25 2.25h.01M12 12a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 012.25 2.25h.01M12 12a2.25 2.25 0 00-2.25-2.25H7.5A2.25 2.25 0 005.25 12v.01M12 12a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25v.01" /></svg>
)

interface AiQueryBoxProps {
  portfolioData: PortfolioData;
}

const AiQueryBox: React.FC<AiQueryBoxProps> = ({ portfolioData }) => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const geminiConfigured = isGeminiAvailable();

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!geminiConfigured) {
        setError("AI query feature is not available. API key might be missing.");
        return;
    }
    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }
    setIsLoading(true);
    setError('');
    setAnswer('');
    try {
      const result = await queryResumeWithGemini(question, portfolioData);
      setAnswer(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [question, portfolioData, geminiConfigured]);

  if (!geminiConfigured) {
    return (
        <Section id="ai-query" title="Ask AI About My Resume" icon={<AiQueryIcon />}>
            <Card className="bg-slate-800">
                <p className="text-center text-slate-400">
                    The AI query feature is currently unavailable. Please ensure the Gemini API key is configured.
                </p>
            </Card>
        </Section>
    );
  }

  return (
    <Section id="ai-query" title="Ask AI About My Resume" className="bg-indigo-950/30" icon={<AiQueryIcon />}>
      <Card className="bg-slate-800 shadow-purple-600/20">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="aiQuestion" className="block text-sm font-medium text-slate-300 mb-1">
              Your Question: (e.g., "What are Tarini's key AI/ML projects?" or "Describe Tarini's experience with Python.")
            </label>
            <input
              type="text"
              id="aiQuestion"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask something..."
              className="w-full px-3 py-2 border border-slate-600 bg-slate-700 text-slate-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder-slate-400"
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-4 rounded-md transition duration-150 ease-in-out flex items-center justify-center disabled:opacity-60"
            disabled={isLoading}
          >
            {isLoading ? <SpinnerIcon className="w-5 h-5 mr-2 text-white"/> : null}
            {isLoading ? 'Asking AI...' : 'Ask AI'}
          </button>
        </form>
        {error && <p className="mt-4 text-sm text-red-300 bg-red-700/30 p-3 rounded-md">{error}</p>}
        {answer && !error && (
          <div className="mt-6">
            <h4 className="text-md font-semibold text-slate-200 mb-2">AI's Response:</h4>
            <div className="bg-slate-700/50 p-4 rounded-md border border-slate-600 whitespace-pre-wrap text-slate-200 leading-relaxed max-h-60 overflow-y-auto">
                {answer}
            </div>
          </div>
        )}
      </Card>
    </Section>
  );
};

export default AiQueryBox;