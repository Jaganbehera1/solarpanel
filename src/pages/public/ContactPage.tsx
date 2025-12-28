import { useEffect, useState } from 'react';
import { MapPin, Clock, Phone, Mail, MessageCircle } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { db, ContactInfo } from '../../lib/firebase';

export function ContactPage() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);

  useEffect(() => {
    loadContactInfo();
  }, []);

  const loadContactInfo = async () => {
    try {
      const docSnap = await getDoc(doc(db, 'contact_info', 'default'));
      if (docSnap.exists()) {
        setContactInfo(docSnap.data() as ContactInfo);
      }
    } catch (error) {
      console.error('Error loading contact info:', error);
    }
  };

  const handleCall = () => {
    if (contactInfo?.phone_number) {
      window.location.href = `tel:${contactInfo.phone_number}`;
    }
  };

  const handleEmail = () => {
    if (contactInfo?.email) {
      window.location.href = `mailto:${contactInfo.email}?subject=Solar Panel Installation Enquiry`;
    }
  };

  const handleWhatsApp = () => {
    if (contactInfo?.whatsapp_number) {
      const message = encodeURIComponent(
        'Hello, I am interested in solar panel installation for my home. Please contact me.'
      );
      const whatsappUrl = `https://wa.me/${contactInfo.whatsapp_number.replace(/[^0-9]/g, '')}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      <section className="bg-gradient-to-br from-green-600 to-blue-600 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to make the switch to solar? Connect with our team for a
              free consultation and custom quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <button
              onClick={handleCall}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-left border-2 border-blue-200 hover:border-blue-400 transform hover:-translate-y-1"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our solar experts
              </p>
              <p className="text-xl font-semibold text-blue-600">
                {contactInfo?.phone_number || 'Loading...'}
              </p>
            </button>

            <button
              onClick={handleEmail}
              className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-left border-2 border-red-200 hover:border-red-400 transform hover:-translate-y-1"
            >
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us your inquiries and we'll respond promptly
              </p>
              <p className="text-xl font-semibold text-red-600">
                {contactInfo?.email || 'Loading...'}
              </p>
            </button>

            <button
              onClick={handleWhatsApp}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-left border-2 border-green-200 hover:border-green-400 transform hover:-translate-y-1"
            >
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Chat with us instantly on WhatsApp
              </p>
              <p className="text-xl font-semibold text-green-600">
                {contactInfo?.whatsapp_number || 'Loading...'}
              </p>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl shadow-lg border-l-4 border-green-600">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-4 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Location</h4>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Main Road, Marwadi Patty<br />
                      Khordha, Pin-752055 <br />
                      Odisha, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-4 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h4>
                    <p className="text-gray-600 text-base">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 p-10 rounded-2xl shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8">Why Choose Us?</h3>

                <ul className="space-y-5">
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-3 text-2xl flex-shrink-0">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1 text-lg">Free Consultation</h4>
                      <p className="text-blue-100">No-obligation assessment of your solar potential</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-3 text-2xl flex-shrink-0">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1 text-lg">Custom Solutions</h4>
                      <p className="text-blue-100">Tailored systems designed for your specific needs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-3 text-2xl flex-shrink-0">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1 text-lg">Expert Installation</h4>
                      <p className="text-blue-100">Certified professionals with years of experience</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-3 text-2xl flex-shrink-0">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1 text-lg">Lifetime Support</h4>
                      <p className="text-blue-100">Ongoing maintenance and 24/7 customer service</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Start Your Solar Journey Today
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Contact us using any method above. Our friendly team is ready to help you
            transition to clean, affordable solar energy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleCall}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transform hover:-translate-y-1"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transform hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
