import { motion } from 'motion/react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.122.554 4.197 1.604 6.04L0 24l6.104-1.602a11.803 11.803 0 005.944 1.597h.005c6.634 0 12.032-5.396 12.035-12.032a11.761 11.761 0 00-3.475-8.52"/>
  </svg>
);

export default function Footer() {
  const socialLinks = [
    { icon: Github, link: 'https://github.com/sakthi16cs' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/sakthi16' },
    { icon: WhatsappIcon, link: 'https://wa.me/918778490448' },
    { icon: Instagram, link: '#' },
  ];

  return (
    <footer id="contact" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-32">
          <div className="max-w-xl">
            <h2 className="text-6xl sm:text-8xl italic mb-8">
              Let's craft <br /> something <span className="text-accent underline underline-offset-8">spatial</span>
            </h2>
            <p className="text-xl font-light opacity-60">
              Open for collaborations, creative experimentations, and high-end web experiences.
            </p>
          </div>
          
          <motion.a
            href="https://wa.me/918778490448"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-accent text-white font-mono text-sm uppercase tracking-widest rounded-full cursor-target flex items-center gap-4 h-fit"
          >
            <WhatsappIcon className="w-5 h-5 flex-shrink-0" />
            <span>Get in touch</span>
          </motion.a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <div className="text-sm font-mono opacity-40 uppercase">
            © {new Date().getFullYear()} Sakthi / ALL RIGHTS RESERVED
          </div>
          
          <div className="flex gap-8">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-40 hover:opacity-100 transition-opacity"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <div className="text-sm font-mono opacity-40">
           BUILT WITH INNOVATION AND LOVE.
          </div>
        </div>
      </div>
    </footer>
  );
}
