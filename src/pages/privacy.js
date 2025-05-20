import { Shield } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="container mx-auto px-6 py-10">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Privacy Policy</h1>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Introduction</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Craddule ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and services ("Services"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the application.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Information We Collect</h2>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">Personal Information</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                When you register for an account, we collect personal information that you voluntarily provide to us, such as your name, email address, and phone number.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">Usage Data</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                We may collect usage data, such as your IP address, browser type, operating system, access times, and pages viewed directly before and after accessing the application.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">Cookies</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We may use cookies and similar tracking technologies to track the activity on our application and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. How We Use Your Information</h2>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">Provide and Manage Services</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                We use your information to provide, manage, and improve our Services, including facilitating project creation and collaboration.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">Communication</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                We may use your information to send you updates, newsletters, marketing or promotional materials, and other information that may be of interest to you. You can opt-out of receiving these communications by following the unsubscribe link or instructions provided in any email we send.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">Legal Compliance</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, judicial proceedings, court orders, or legal processes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Data Sharing and Disclosure</h2>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">Service Providers</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and email delivery. These service providers are required to protect your information and may not use it for any other purpose.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">Business Transfers</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                In the event of a merger, acquisition, or asset sale, your personal information may be transferred to the acquiring entity.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">Third-Party Links</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our application may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices or the content of such websites or services. We encourage you to read the privacy policies of any third-party websites or services you visit.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Data Security</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or method of electronic storage is completely secure, and we cannot guarantee the absolute security of your information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Your Rights</h2>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">Access and Update</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                You have the right to access and update your personal information. You can do so by logging into your account or contacting us directly.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">Data Deletion</h3>
                            <p className="text-gray-700 leading-relaxed">
                                You have the right to request the deletion of your personal information, subject to certain exceptions. To request the deletion of your information, please contact us at <span className="text-blue-600 font-medium">privacy@craddule.com</span>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Changes to This Privacy Policy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our application. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at <span className="text-darkBlue font-medium">support@craddule.com</span>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}