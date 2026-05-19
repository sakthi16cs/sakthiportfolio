import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger 
} from './ui/dialog';
import { Phone, Mail, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactModal({ children }: { children: React.ReactNode }) {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);
    setStatus('idle');

    // These should be environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current?.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      })
      .finally(() => {
          setIsSubmitting(false);
          setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-3xl bg-white/[0.05] border-white/10 backdrop-blur-2xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-black uppercase italic text-white">Get in touch</DialogTitle>
          <DialogDescription className="text-white/40 uppercase tracking-widest text-[10px]">
            Ready to craft something spatial
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
          {/* Left Side: Details */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-accent font-mono text-xs uppercase tracking-widest">Connect Directly</h4>
              <div className="space-y-4">
                <a 
                  href="tel:8778490448" 
                  className="flex items-center gap-4 group cursor-target"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-white/40 tracking-tighter">Mobile</p>
                    <p className="text-sm font-mono text-white">8778490448</p>
                  </div>
                </a>
                <a 
                  href="mailto:cssakthi16@gmail.com" 
                  className="flex items-center gap-4 group cursor-target"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-white/40 tracking-tighter">Email</p>
                    <p className="text-sm font-mono text-white">cssakthi16@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                <p className="text-xs text-white/60 leading-relaxed italic">
                    "I'm always looking for new challenges and opportunities to push digital boundaries."
                </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="space-y-2">
              <input
                required
                type="text"
                name="user_name"
                placeholder="YOUR NAME"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors text-white placeholder:text-white/20"
              />
            </div>
            <div className="space-y-2">
              <input
                required
                type="email"
                name="user_email"
                placeholder="YOUR EMAIL"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors text-white placeholder:text-white/20"
              />
            </div>
            <div className="space-y-2">
              <textarea
                required
                name="message"
                placeholder="YOUR MESSAGE"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors text-white placeholder:text-white/20 resize-none"
              />
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full py-4 rounded-xl bg-white/30 text-white font-mono text-xs uppercase tracking-[0.2em] font-bold hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-target"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-green-400 text-center font-mono"
                >
                  Message sent successfully! Thank you.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-red-400 text-center font-mono"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
