import { Mail, MessageSquare } from "lucide-react";

export default function ConnectWithUs() {
  return (
    <footer id="contact" className="bg-[#121212]/80 backdrop-blur-md py-20 px-6 md:px-12 border-t border-white/10 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Connect <br /> <span className="text-red-600">With Us</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-md">
            For business inquiries, brand collaborations, or just to send some love to the Army. Drop a message!
          </p>
          
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@AssassinsARMY" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
              <MessageSquare size={20} />
            </a>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex flex-col items-center justify-center text-center h-full min-h-[400px]">
          <div className="w-20 h-20 bg-red-600/10 text-red-500 rounded-full flex items-center justify-center mb-6 border border-red-500/20 shadow-[0_0_30px_rgba(220,38,38,0.15)]">
            <Mail size={36} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">Business Inquiries</h3>
          <p className="text-gray-400 mb-8 max-w-xs">Prefer direct email? Reach out to us for collaborations and queries.</p>
          <a 
            href="mailto:assassinsarmy7979@gmail.com" 
            className="inline-flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#222] border border-white/10 hover:border-red-500/50 px-6 py-4 rounded-xl text-white font-medium transition-all group w-full justify-center"
          >
            <Mail size={18} className="text-red-500 group-hover:scale-110 transition-transform" />
            <span className="truncate">assassinsarmy7979@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
        <p>Created by maxraj with all copyright of Assassins Army.</p>
        <p>Built with Next.js & Framer Motion</p>
      </div>
    </footer>
  );
}
