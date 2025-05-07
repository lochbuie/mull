import { useState } from "react";
import { MapPin, Mail, Phone, Clock, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent",
        description: "Thank you for your message. I will get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-block border-b-2 border-dartmouth mb-6">
            <h2 className="font-playfair text-dartmouth text-3xl md:text-4xl">Contact</h2>
          </div>
          <p className="text-lg text-tweed">
            I welcome inquiries from colleagues, journalists, prospective students, and others interested in my research and teaching. Please use the form below or contact me directly at the address provided.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block text-tweed font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full px-4 py-3 border border-tweed/30 focus:border-dartmouth focus:ring-1 focus:ring-dartmouth focus:outline-none bg-cream ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-tweed font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`w-full px-4 py-3 border border-tweed/30 focus:border-dartmouth focus:ring-1 focus:ring-dartmouth focus:outline-none bg-cream ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-tweed font-medium mb-2">Subject</label>
                <select
                  id="subject"
                  {...register("subject")}
                  className={`w-full px-4 py-3 border border-tweed/30 focus:border-dartmouth focus:ring-1 focus:ring-dartmouth focus:outline-none bg-cream ${errors.subject ? "border-red-500" : ""}`}
                >
                  <option value="">Please select a subject</option>
                  <option value="research">Research Inquiry</option>
                  <option value="teaching">Teaching/Supervision</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="media">Media Request</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-tweed font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className={`w-full px-4 py-3 border border-tweed/30 focus:border-dartmouth focus:ring-1 focus:ring-dartmouth focus:outline-none bg-cream ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-dartmouth text-cream px-6 py-3 font-medium rounded hover:bg-dartmouth/90 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
          
          <div className="md:w-1/2">
            <div className="oxford-card bg-white p-8 mb-8">
              <h3 className="font-playfair text-dartmouth text-xl mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-gold mt-1">
                    <MapPin />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-tweed/80">
                      Faculty of History<br />
                      George Street<br />
                      Oxford, OX1 2RL<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-gold">
                    <Mail />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:j.harrington@history.ox.ac.uk" className="text-dartmouth hover:text-dartmouth/80">j.harrington@history.ox.ac.uk</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-gold">
                    <Phone />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-tweed/80">+44 (0)1865 277253</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-gold">
                    <Clock />
                  </div>
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-tweed/80">Tuesdays and Thursdays, 2-4pm<br/>or by appointment</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="oxford-card bg-cream p-8">
              <h3 className="font-playfair text-dartmouth text-xl mb-6">Connect</h3>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-dartmouth text-cream flex items-center justify-center hover:bg-dartmouth/90 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dartmouth text-cream flex items-center justify-center hover:bg-dartmouth/90 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dartmouth text-cream flex items-center justify-center hover:bg-dartmouth/90 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269v10.481H5.242V13.769z"/>
                    <path d="M12 1.294l10.546 8.353-3.788 3.083v9.022H9.242v-9.022l-3.788-3.083L12 1.294M12 0L0 9.5l5.242 4.269v10.481h13.516V13.769L24 9.5 12 0z"/>
                    <path d="M6.5 21h4v-5h3v5h4v-7h2L12 7 5 14h2v7z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dartmouth text-cream flex items-center justify-center hover:bg-dartmouth/90 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.6,0H3.4C1.5,0,0,1.5,0,3.4v9.1C0,14.5,1.5,16,3.4,16h9.1c1.9,0,3.4-1.5,3.4-3.4V3.4C16,1.5,14.5,0,12.6,0z M7.5,13.8
                      c-1.3,0-2.2-0.2-2.9-0.6C4,12.8,3.4,12.2,3.2,11.2c-0.2-0.6-0.3-1.3-0.3-2.2V4.9h2.3v4.3c0,0.6,0.1,1.1,0.2,1.4
                      c0.2,0.6,0.7,0.9,1.6,0.9c0.9,0,1.5-0.3,1.7-0.9c0.1-0.3,0.2-0.8,0.2-1.4V4.9h2.3v5c0,0.9-0.1,1.6-0.3,2.1
                      c-0.2,0.5-0.5,0.9-0.9,1.3c-0.4,0.3-0.9,0.6-1.4,0.7C8,13.7,7.8,13.8,7.5,13.8z"/>
                  </svg>
                </a>
              </div>
              
              <div className="mt-8">
                <p className="text-sm text-tweed/80 italic">
                  For media inquiries, please contact Oxford University Press Office at press.office@admin.ox.ac.uk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
