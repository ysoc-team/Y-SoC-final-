// src/app/contact/page.tsx or where your component is located
"use client";
import type React from "react";
import { useState } from "react";
import { Mail, Send, CheckCircle, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

// Import components and supabase client
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createClient } from "@supabase/supabase-js"; // <-- Import the supabase client

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // (Keep contactCategories and contactInfo arrays the same)
  const contactCategories = [
    { value: "general", label: "General Inquiry" },
    { value: "partnership", label: "Partnership Opportunities" },
    { value: "partnership-proposal", label: "Partnership Proposal" },
    { value: "media", label: "Media & Press" },
    { value: "technical", label: "Technical Support" },
    { value: "feedback", label: "Feedback & Suggestions" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "team@ysoc.in",
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Global Community",
      description: "We're everywhere",
      contact: "25+ countries",
      action: "",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize Supabase client inside the function
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
      const supabase = createClient(supabaseUrl, supabaseAnonKey)

      // Use the Supabase client to insert data
      const { error } = await supabase
        .from("contact_submissions") // <-- Specify your table name
        .insert([formData]); // <-- Insert the form data object

      if (error) {
        throw new Error(error.message || "Failed to save form data");
      }

      console.log("Contact form submitted and saved to Supabase!");
      setIsSubmitted(true);
    } catch (error: any) {
      console.error("Error saving form data:", error);
      alert(`Error saving form data: ${error.message}. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // (The rest of your JSX remains the same)
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 neon-glow">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Message Sent!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Thank you for reaching out to us! Your message has been successfully sent and our team will review it soon.
              </p>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We'll get back to you as quickly as possible. In the meantime, feel free to explore our community and programs!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black scroll-smooth">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 border-2 border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Contact Y-SoC</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions, ideas, or want to get involved? We'd love to hear from you. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden page-transition">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20 max-w-4xl mx-auto mt-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-full text-center rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-gray-300 mb-4">{info.description}</p>
                    <p className="text-blue-400 font-medium mb-6">{info.contact}</p>
                    {info.action && (
                      <Button
                        variant="outline"
                        className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
                        onClick={() => {
                          if (info.title === "Email Us") {
                            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=team@ysoc.in", "_blank");
                          }
                        }}
                      >
                        {info.action}
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="rounded-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm shadow-xl">
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">Send us a Message</h2>
                    <p className="text-gray-300">We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-400" />
                        Contact Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-300 font-medium">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            className="bg-gray-900/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-500/50"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-300 font-medium">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className="bg-gray-900/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-500/50"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-blue-400" />
                        Message Details
                      </h3>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="category" className="text-gray-300 font-medium">Category *</Label>
                          <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                            <SelectTrigger className="bg-gray-900/50 border-gray-600/50 text-white focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-500/50">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-gray-700">
                              {contactCategories.map((category) => (
                                <SelectItem key={category.value} value={category.value} className="text-white hover:bg-blue-500/20 transition-colors duration-150">
                                  {category.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-gray-300 font-medium">Subject *</Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => handleInputChange("subject", e.target.value)}
                            required
                            className="bg-gray-900/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-500/50"
                            placeholder="What's this about?"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-gray-300 font-medium">Message *</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us more about your inquiry..."
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            required
                            className="bg-gray-900/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 min-h-[150px] transition-all duration-200 hover:border-gray-500/50"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 font-semibold py-3"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending Message...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            Send Message <Send className="h-5 w-5" />
                          </div>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}