'use client';

import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';

import enMessages from '@/messages/en.json';
import thMessages from '@/messages/th.json';

type Messages = typeof enMessages;
type Language = 'th' | 'en';

type LanguageContextType = {
  language: Language;
  messages: Messages;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'th',
  messages: thMessages,
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('th');
  const [messages, setMessages] = useState<Messages>(thMessages);

  useLayoutEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
      setMessages(savedLanguage === 'en' ? enMessages : thMessages);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setMessages(lang === 'en' ? enMessages : thMessages);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, messages, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
