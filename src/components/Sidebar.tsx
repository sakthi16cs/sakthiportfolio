import { motion } from 'motion/react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.122.554 4.197 1.604 6.04L0 24l6.104-1.602a11.803 11.803 0 005.944 1.597h.005c6.634 0 12.032-5.396 12.035-12.032a11.761 11.761 0 00-3.475-8.52"/>
  </svg>
);

export default function Sidebar() {
  const socials = [
    { icon: Github, link: 'https://github.com/sakthi16cs' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/sakthi16' },
    { icon: WhatsappIcon, link: 'https://wa.me/918778490448' },
    { icon: Instagram, link: '#' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8 items-center"
    >
      <div className="w-[1px] h-20 bg-white/20" />
      {socials.map((social, i) => (
        <a 
          key={i} 
          href={social.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-transparent hover:border-white hover:bg-white opacity-40 hover:opacity-100 hover:text-accent transition-all duration-300 cursor-target"
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
      <div className="w-[1px] h-20 bg-white/20" />
    </motion.div>
  );
}
