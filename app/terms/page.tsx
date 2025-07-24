import Link from "next/link";
import {
  Heart,
  ArrowLeft,
  FileText,
  AlertTriangle,
  Users,
  Shield,
  CreditCard,
  Gavel,
} from "lucide-react";

export default function TermsOfService() {
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
            <FileText className="h-8 w-8 text-[#ff6b53]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-300 mb-2">
            Please read these terms carefully before using FirstRep. By using
            our service, you agree to these terms.
          </p>
          <p className="text-sm text-gray-400">Last updated: July 24, 2025</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                These terms and conditions apply to the FirstRep platform,
                including both the mobile application and web application
                (collectively referred to as the “Application”), developed and
                operated by FirstRep Limited (hereby referred to as the “Service
                Provider”) as a Freemium service.
              </p>
              <p>
                By downloading, accessing, or using the Application on any
                device or browser, you agree to be bound by these terms. We
                strongly recommend that you read and understand these terms
                before using the Application.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="h-6 w-6 text-[#ff6b53] mr-3" />
              Description of Service
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                FirstRep is a fitness accountability platform created by
                FirstRep Limited as a Freemium service that helps users:
              </p>
              <ul className="space-y-2">
                <li>
                  • Build consistent fitness habits through accountability
                </li>
                <li>• Connect with workout buddies for mutual support</li>
                <li>• Track fitness progress and maintain workout streaks</li>
                <li>• Access workout guides and educational content</li>
                <li>• Receive personalized reminders and notifications</li>
              </ul>
              <p>
                The Service Provider is dedicated to ensuring that the
                Application is as beneficial and efficient as possible. As such,
                they reserve the right to modify the Application or charge for
                their services at any time and for any reason.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#ff6b53]">
                  Account Creation
                </h3>
                <ul className="space-y-2">
                  <li>
                    • You must be at least 13 years old to create an account
                  </li>
                  <li>• You must provide accurate and complete information</li>
                  <li>
                    • You are responsible for maintaining account security
                  </li>
                  <li>• One person may not maintain multiple accounts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#ff6b53]">
                  Account Responsibilities
                </h3>
                <ul className="space-y-2">
                  <li>• Keep your login credentials secure</li>
                  <li>• Notify us immediately of any unauthorized access</li>
                  <li>• Update your information to keep it current</li>
                  <li>
                    • You are liable for all activities under your account
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <AlertTriangle className="h-6 w-6 text-[#ff6b53] mr-3" />
              Acceptable Use
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>You agree NOT to use the Service to:</p>
              <ul className="space-y-2">
                <li>• Harass, abuse, or harm other users</li>
                <li>• Share inappropriate, offensive, or illegal content</li>
                <li>• Impersonate others or provide false information</li>
                <li>• Spam or send unsolicited messages</li>
                <li>• Attempt to hack, disrupt, or damage the Service</li>
                <li>
                  • Use the Service for commercial purposes without permission
                </li>
                <li>• Violate any applicable laws or regulations</li>
              </ul>
              <div className="bg-[#1a1f2e] p-4 rounded-lg border border-[#ff6b53]/20">
                <p className="text-[#ff6b53] font-semibold">
                  Violation of these terms may result in account suspension or
                  termination.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Health and Safety Disclaimer
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
                <p className="text-yellow-200 font-semibold mb-2">
                  Important Health Notice:
                </p>
                <ul className="space-y-2 text-yellow-100">
                  <li>
                    • FirstRep is not a substitute for professional medical
                    advice
                  </li>
                  <li>
                    • Consult your doctor before starting any fitness program
                  </li>
                  <li>
                    • Stop exercising if you experience pain or discomfort
                  </li>
                  <li>
                    • We are not responsible for injuries or health issues
                  </li>
                </ul>
              </div>
              <p>
                You acknowledge that fitness activities carry inherent risks and
                you participate at your own risk. FirstRep provides general
                fitness guidance and accountability tools, not personalized
                medical advice.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <CreditCard className="h-6 w-6 text-[#ff6b53] mr-3" />
              Subscription and Payments
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#ff6b53]">
                  Free and Premium Plans
                </h3>
                <ul className="space-y-2">
                  <li>• Free plan includes basic features with limitations</li>
                  <li>• Premium plan requires monthly subscription payment</li>
                  <li>• Prices are subject to change with 30 days notice</li>
                  <li>• Subscriptions auto-renew unless cancelled</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#ff6b53]">
                  Billing and Cancellation
                </h3>
                <ul className="space-y-2">
                  <li>
                    • Payments are processed securely through third-party
                    providers
                  </li>
                  <li>• You can cancel your subscription at any time</li>
                  <li>
                    • Cancellation takes effect at the end of the current
                    billing period
                  </li>
                  <li>• No refunds for partial months or unused features</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Unauthorized copying, modification of the Application, any part
                of the Application, or our trademarks is strictly prohibited.
                Any attempts to extract the source code of the Application,
                translate the Application into other languages, or create
                derivative versions are not permitted.
              </p>
              <p>
                All trademarks, copyrights, database rights, and other
                intellectual property rights related to the Application remain
                the property of the Service Provider.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Privacy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Your privacy is important to us. Please review our{" "}
                <Link
                  href="/privacy"
                  className="text-[#ff6b53] hover:underline"
                >
                  Privacy Policy
                </Link>
                , which also governs your use of the Service, to understand our
                practices.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We may terminate or suspend your account and access to the
                Service immediately, without prior notice, for:
              </p>
              <ul className="space-y-2">
                <li>• Violation of these Terms</li>
                <li>• Fraudulent or illegal activity</li>
                <li>• Harm to other users or the Service</li>
                <li>• Non-payment of subscription fees</li>
              </ul>
              <p>
                Upon termination, your right to use the Service will cease
                immediately. You may delete your account at any time through the
                app settings.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="h-6 w-6 text-[#ff6b53] mr-3" />
              Disclaimers and Limitation of Liability
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#ff6b53]">
                  Service Availability
                </h3>
                <p>
                  The Service is provided "as is" without warranties of any
                  kind. We do not guarantee that the Service will be
                  uninterrupted, secure, or error-free.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#ff6b53]">
                  Limitation of Liability
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    The Service Provider cannot always assume responsibility for
                    your usage of the application. For instance, it is your
                    responsibility to ensure that your device remains charged.
                    If your device runs out of battery and you are unable to
                    access the Service, the Service Provider cannot be held
                    responsible.
                  </p>
                  <p>
                    In terms of the Service Provider's responsibility for your
                    use of the application, it is important to note that while
                    they strive to ensure that it is updated and accurate at all
                    times, they do rely on third parties to provide information
                    to them so that they can make it available to you.
                  </p>
                  <p>
                    The Service Provider accepts no liability for any loss,
                    direct or indirect, that you experience as a result of
                    relying entirely on this functionality of the application.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="h-6 w-6 text-[#ff6b53] mr-3" />
              Device Security and Data
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The Application stores and processes personal data that you have
                provided to the Service Provider in order to provide the
                Service. It is your responsibility to maintain the security of
                your phone and access to the Application.
              </p>
              <p>
                The Service Provider strongly advise against jailbreaking or
                rooting your phone, which involves removing software
                restrictions and limitations imposed by the official operating
                system of your device. Such actions could expose your phone to
                malware, viruses, malicious programs, compromise your phone's
                security features, and may result in the Application not
                functioning correctly or at all.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Internet Connection and Data Usage
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Please be aware that the Service Provider does not assume
                responsibility for certain aspects. Some functions of the
                Application require an active internet connection, which can be
                Wi-Fi or provided by your mobile network provider.
              </p>
              <p>
                The Service Provider cannot be held responsible if the
                Application does not function at full capacity due to lack of
                access to Wi-Fi or if you have exhausted your data allowance.
              </p>
              <p>
                If you are using the application outside of a Wi-Fi area, please
                be aware that your mobile network provider's agreement terms
                still apply. Consequently, you may incur charges from your
                mobile provider for data usage during the connection to the
                application, or other third-party charges.
              </p>
              <p>
                By using the application, you accept responsibility for any such
                charges, including roaming data charges if you use the
                application outside of your home territory without disabling
                data roaming.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">
              App Updates and Termination
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The Service Provider may wish to update the application at some
                point. The application is currently available as per the
                requirements for the operating system (and for any additional
                systems they decide to extend the availability of the
                application to) may change, and you will need to download the
                updates if you want to continue using the application.
              </p>
              <p>
                The Service Provider does not guarantee that it will always
                update the application so that it is relevant to you and/or
                compatible with the particular operating system version
                installed on your device. However, you agree to always accept
                updates to the application when offered to you.
              </p>
              <p>
                The Service Provider may also wish to cease providing the
                application and may terminate its use at any time without
                providing termination notice to you. Unless they inform you
                otherwise, upon any termination, (a) the rights and licenses
                granted to you in these terms will end; (b) you must cease using
                the application, and (if necessary) delete it from your device.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Gavel className="h-6 w-6 text-[#ff6b53] mr-3" />
              Governing Law
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the Federal Republic of Nigeria, without regard
                to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or the Service will be
                resolved through binding arbitration in Lagos, Nigeria.
              </p>
            </div>
          </div>

          <div className="bg-[#242935] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The Service Provider may periodically update their Terms and
                Conditions. Therefore, you are advised to review this page
                regularly for any changes.
              </p>
              <p>
                The Service Provider will notify you of any changes by posting
                the new Terms and Conditions on this page.
              </p>
              <p>
                These terms and conditions are effective as of July 24, 2025.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#ff6b53]/10 to-[#ff6b53]/5 rounded-xl p-8 border border-[#ff6b53]/20">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4 text-gray-300">
              <p>If you have questions about these Terms, please contact us:</p>
              <div className="space-y-2">
                <p>• Email: koya@firstrep.xyz</p>
                <p>• Company: FirstRep Limited</p>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                We aim to respond to all legal inquiries within 30 days.
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
