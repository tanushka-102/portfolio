import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_5ywxzyf',
        'template_q80uerb',
        formData,
        'hXwJhinyFyACNbHgT'
      )
      .then(
        () => {
          toast({
            title: '✅ Message Sent',
            description: 'Thank you for reaching out. I will get back to you soon.'
          });

          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        },
        () => {
          toast({
            title: '❌ Failed to Send',
            description: 'Something went wrong. Please try again later.'
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT INFO */}
          <motion.div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white">
                <Mail className="text-blue-400" />
                tanushkaverma102@gmail.com
              </div>
              <div className="flex items-center gap-4 text-white">
                <Phone className="text-blue-400" />
                +91 8115620493
              </div>
              <div className="flex items-center gap-4 text-white">
                <MapPin className="text-blue-400" />
                Ghaziabad, India
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div>
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800/50 border border-blue-400/20 rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <div className="space-y-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 bg-slate-900 text-white rounded-lg"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 bg-slate-900 text-white rounded-lg"
                />

                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-slate-900 text-white rounded-lg"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message..."
                  required
                  className="w-full px-4 py-3 bg-slate-900 text-white rounded-lg resize-none"
                />

                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 w-full py-6"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
