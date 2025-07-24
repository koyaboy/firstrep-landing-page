import Link from "next/link";
import {
  Heart,
  ArrowLeft,
  Shield,
  Eye,
  Lock,
  Database,
  Mail,
  MapPin,
  ShieldCheck,
  UserCheck,
  Cookie,
  Baby,
  Globe,
  Archive,
  FileEdit,
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white">
      {/* Header */}
      <header className="border-b border-[#242935] sticky top-0 z-50 bg-[#1a1f2e]/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="h-5 w-5 text-gray-300" />
            <Heart className="h-6 w-6 text-[#ff6b53]" />
            <span className="text-xl font-bold">FirstRep</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6b53]/20 rounded-full mb-6">
            <Shield className="h-8 w-8 text-[#ff6b53]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300 mb-2">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-400">Last updated: July 24, 2025</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Eye className="h-6 w-6 text-[#ff6b53] mr-3" />
              Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#ff6b53]">
                  User Provided Information
                </h3>
                <p className="text-gray-300 mb-4">
                  The Application collects the information you provide when you
                  access or register for the service, whether via the mobile app
                  or web platform. Registration with the Service Provider is not
                  mandatory; however, please note that certain features may not
                  be available unless you register.
                </p>
                <p className="text-gray-300">
                  The Service Provider may also use the information you provide
                  to contact you from time to time with important updates, legal
                  notices, or marketing communications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#ff6b53]">
                  Automatically Collected Information
                </h3>
                <p className="text-gray-300">
                  In addition, the Application may collect certain information
                  automatically, including, but not limited to, the type of
                  mobile device you use, your mobile devices unique device ID,
                  the IP address of your mobile device, your mobile operating
                  system, the type of mobile Internet browsers you use, and
                  information about the way you use the Application.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Database className="h-6 w-6 text-[#ff6b53] mr-3" />
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>We use your information to:</p>
              <ul className="space-y-2">
                <li>
                  • Provide and improve our fitness accountability services
                </li>
                <li>• Connect you with compatible workout buddies</li>
                <li>• Send you personalized reminders and notifications</li>
                <li>
                  • Provide important information, required notices and
                  marketing promotions
                </li>
                <li>
                  • Analyze user behavior and improve the Application's
                  performance
                </li>
                <li>• Ensure the security and integrity of our platform</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <MapPin className="h-6 w-6 text-[#ff6b53] mr-3" />
              Location Information
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                This Application does not gather precise information about the
                location of your mobile device.
              </p>
              <p>
                This Application collects your device's location, which helps
                the Service Provider determine your approximate geographical
                location and make use of in below ways:
              </p>
              <ul className="space-y-2">
                <li>
                  • <strong>Geolocation Services:</strong> The Service Provider
                  utilizes location data to provide features such as
                  personalized content, relevant recommendations, and
                  location-based services.
                </li>
                <li>
                  • <strong>Analytics and Improvements:</strong> Aggregated and
                  anonymized location data helps the Service Provider to analyze
                  user behavior, identify trends, and improve the overall
                  performance and functionality of the Application.
                </li>
                <li>
                  • <strong>Third-Party Services:</strong> Periodically, the
                  Service Provider may transmit anonymized location data to
                  external services. These services assist them in enhancing the
                  Application and optimizing their offerings.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Lock className="h-6 w-6 text-[#ff6b53] mr-3" />
              Information Sharing
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Only aggregated, anonymized data is periodically transmitted to
                external services to aid the Service Provider in improving the
                Application and their service.
              </p>
              <p>
                The Service Provider may disclose User Provided and
                Automatically Collected Information:
              </p>
              <ul className="space-y-2">
                <li>
                  • As required by law, such as to comply with a subpoena, or
                  similar legal process
                </li>
                <li>
                  • When they believe in good faith that disclosure is necessary
                  to protect their rights, protect your safety or the safety of
                  others, investigate fraud, or respond to a government request
                </li>
                <li>
                  • With their trusted services providers who work on their
                  behalf, do not have an independent use of the information we
                  disclose to them, and have agreed to adhere to the rules set
                  forth in this privacy statement
                </li>
              </ul>
              <div className="bg-[#1a1f2e] p-4 rounded-lg border border-[#ff6b53]/20">
                <p className="text-[#ff6b53] font-semibold">
                  We never sell your personal information to third parties.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <ShieldCheck className="h-6 w-6 text-[#ff6b53] mr-3" />
              Data Security
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The Service Provider are concerned about safeguarding the
                confidentiality of your information. The Service Provider
                provide physical, electronic, and procedural safeguards to
                protect information we process and maintain.
              </p>
              <p>
                For example, we limit access to this information to authorized
                employees and contractors who need to know that information in
                order to operate, develop or improve their Application.
              </p>
              <p>
                Please be aware that, although we endeavor provide reasonable
                security for information we process and maintain, no security
                system can prevent all potential security breaches.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <UserCheck className="h-6 w-6 text-[#ff6b53] mr-3" />
              Your Rights
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>You have the right to:</p>
              <ul className="space-y-2">
                <li>
                  • <strong>Opt-out:</strong> You can halt all collection of
                  information by the Application easily by uninstalling the
                  Application
                </li>
                <li>
                  • <strong>Data Deletion:</strong> Contact us at
                  koya@firstrep.xyz to delete User Provided Data that you have
                  provided via the Application
                </li>
                <li>
                  • <strong>Access your data:</strong> Request information about
                  what data we have collected
                </li>
                <li>
                  • <strong>Data Portability:</strong> Request a copy of your
                  data in a portable format
                </li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                Please note that some or all of the User Provided Data may be
                required in order for the Application to function properly.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Cookie className="h-6 w-6 text-[#ff6b53] mr-3" />
              Cookies and Tracking
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>We use cookies and similar technologies to:</p>
              <ul className="space-y-2">
                <li>• Remember your preferences and settings</li>
                <li>• Analyze app usage and performance</li>
                <li>• Provide personalized experiences</li>
                <li>• Ensure security and prevent fraud</li>
              </ul>
              <p>
                You can control cookie settings through your browser or device
                settings.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Baby className="h-6 w-6 text-[#ff6b53] mr-3" />
              Children's Privacy
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The Service Provider does not use the Application to knowingly
                solicit data from or market to children under the age of 13.
              </p>
              <p>
                The Service Provider does not knowingly collect personally
                identifiable information from children. The Service Provider
                encourages all children to never submit any personally
                identifiable information through the Application and/or
                Services.
              </p>
              <p>
                You must also be at least 16 years of age to consent to the
                processing of your personally identifiable information in your
                country (in some countries we may allow your parent or guardian
                to do so on your behalf).
              </p>
              <p>
                If you have reason to believe that a child has provided
                personally identifiable information to the Service Provider
                through the Application and/or Services, please contact the
                Service Provider at koya@firstrep.xyz so that they will be able
                to take the necessary actions.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Globe className="h-6 w-6 text-[#ff6b53] mr-3" />
              International Users
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                FirstRep is operated from Nigeria. However, your information may
                be transferred to, stored, and processed on servers located
                outside Nigeria, including in countries such as the United
                States or others where our service providers are based. By using
                our service, you consent to this transfer and processing of your
                data in accordance with this Privacy Policy.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Archive className="h-6 w-6 text-[#ff6b53] mr-3" />
              Data Retention Policy
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The Service Provider will retain User Provided data for as long
                as you use the Application and for a reasonable time thereafter.
              </p>
              <p>
                The Service Provider will retain Automatically Collected
                information for up to 24 months and thereafter may store it in
                aggregate.
              </p>
              <p>
                If you'd like the Service Provider to delete User Provided Data
                that you have provided via the Application, please contact them
                at koya@firstrep.xyz and we will respond in a reasonable time.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FileEdit className="h-6 w-6 text-[#ff6b53] mr-3" />
              Changes to This Policy
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                This Privacy Policy may be updated from time to time for any
                reason. The Service Provider will notify you of any changes to
                the Privacy Policy by updating this page with the new Privacy
                Policy.
              </p>
              <p>
                You are advised to consult this Privacy Policy regularly for any
                changes, as continued use is deemed approval of all changes.
              </p>
              <p>This privacy policy is effective as of July 24, 2025.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#ff6b53]/10 to-[#ff6b53]/5 rounded-xl p-8 border border-[#ff6b53]/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Mail className="h-6 w-6 text-[#ff6b53] mr-3" />
              Contact Us
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have questions about this privacy policy or our data
                practices, please contact us:
              </p>
              <div className="space-y-2">
                <p>• Email: koya@firstrep.xyz</p>
                <p>• Company: FirstRep Limited</p>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                We aim to respond to all privacy inquiries within 30 days.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 bg-[#ff6b53] text-white rounded-md font-medium transition-all duration-300 hover:bg-[#ff6b53]/90 hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to FirstRep
          </Link>
        </div>
      </main>
    </div>
  );
}
