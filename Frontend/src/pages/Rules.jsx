import { Link } from 'react-router-dom';

const Rules = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-primary-teal mb-4 sm:mb-6">
          Contest Rules & Guidelines
        </h1>
        <p className="text-base sm:text-lg text-gray-700 font-lora">
          Please read these rules carefully before entering the contest
        </p>
      </div>

      <div className="space-y-8">
        <div className="card">
          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-primary-teal mb-3 sm:mb-4">
            Contest Overview
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              This is a <strong>$10 skill-based contest</strong> designed to showcase participants' 
              abilities and talents. The contest is open to individuals who meet the eligibility 
              requirements and agree to abide by these rules.
            </p>
            <p>
              <strong>Entry Fee:</strong> $10 USD per entry (non-refundable)
            </p>
            <p>
              <strong>Prize Pool:</strong> 80% of total entry fees will be distributed as prizes
            </p>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-primary-teal mb-3 sm:mb-4">
            Eligibility Requirements
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-teal mr-3 mt-1">•</span>
              <span>Must be 18 years of age or older</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-teal mr-3 mt-1">•</span>
              <span>Must be a legal resident of the United States</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-teal mr-3 mt-1">•</span>
              <span>Must provide a valid email address for communication</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-teal mr-3 mt-1">•</span>
              <span>Must agree to these contest rules and terms</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-teal mr-3 mt-1">•</span>
              <span>Employees and immediate family members of the contest organizers are not eligible</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-primary-teal mb-3 sm:mb-4">
            Contest Rules
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Skill-Based Participation</h3>
              <p>
                This contest is strictly skill-based. Participants must rely on their own abilities, 
                knowledge, and skills to complete the contest tasks. The use of artificial intelligence 
                tools, automated systems, or any form of assistance is strictly prohibited.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">AI Tool Prohibition</h3>
              <p>
                <strong>Important:</strong> The use of AI tools, including but not limited to ChatGPT, 
                Claude, Gemini, or any other AI assistance, is strictly forbidden. This includes:
              </p>
              <ul className="mt-2 ml-6 space-y-1">
                <li>• Using AI to generate content or solutions</li>
                <li>• Using AI to analyze or interpret contest materials</li>
                <li>• Using AI to assist in decision-making processes</li>
                <li>• Any other form of AI assistance during the contest</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Monitoring & Verification</h3>
              <p>
                Contest organizers reserve the right to conduct random checks and verification 
                processes to ensure compliance with these rules. This may include:
              </p>
              <ul className="mt-2 ml-6 space-y-1">
                <li>• Review of submitted work for AI-generated content</li>
                <li>• Analysis of response patterns and timing</li>
                <li>• Additional verification procedures as deemed necessary</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Disqualification</h3>
              <p>
                Participants found to be using AI tools or violating any contest rules will be 
                immediately disqualified. In cases of confirmed AI use:
              </p>
              <ul className="mt-2 ml-6 space-y-1">
                <li>• Entry will be voided</li>
                <li>• Any winnings will be reversed</li>
                <li>• Entry fee will not be refunded</li>
                <li>• Participant may be banned from future contests</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-primary-teal mb-3 sm:mb-4">
            Judging Criteria
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Contest entries will be evaluated using a comprehensive three-part judging system:
            </p>
            <div className="bg-gray-50 rounded-soft p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary-teal text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    AI
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">AI Analysis</h3>
                  <p className="text-3xl font-bold text-primary-teal">1/3</p>
                  <p className="text-sm text-gray-600 mt-2">Automated content analysis and pattern detection</p>
                </div>
                <div className="text-center">
                  <div className="bg-accent-gold text-gray-800 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    EXP
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Expert Review</h3>
                  <p className="text-3xl font-bold text-primary-teal">1/3</p>
                  <p className="text-sm text-gray-600 mt-2">Professional evaluation by industry experts</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    VOTE
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Community Voting</h3>
                  <p className="text-3xl font-bold text-primary-teal">1/3</p>
                  <p className="text-sm text-gray-600 mt-2">Public voting and peer evaluation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-primary-teal mb-3 sm:mb-4">
            Contest Process
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="bg-primary-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Entry</h3>
                <p>Pay the $10 entry fee and provide your email address to participate</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Confirmation</h3>
                <p>Receive confirmation email with contest details and instructions</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Participation</h3>
                <p>Complete the contest tasks using only your own skills and abilities</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Results</h3>
                <p>Winners will be announced and prizes distributed according to performance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-primary-teal mb-3 sm:mb-4">
            Prizes & Distribution
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              The prize pool consists of 80% of all entry fees collected. Prizes will be distributed 
              as follows:
            </p>
            <div className="bg-gray-50 rounded-soft p-4">
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>1st Place:</span>
                  <span className="font-semibold">50% of prize pool</span>
                </li>
                <li className="flex justify-between">
                  <span>2nd Place:</span>
                  <span className="font-semibold">30% of prize pool</span>
                </li>
                <li className="flex justify-between">
                  <span>3rd Place:</span>
                  <span className="font-semibold">20% of prize pool</span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-gray-600">
              * Prize amounts are calculated based on total entries and will be announced after 
              the contest closes.
            </p>
          </div>
        </div>

        <div className="card border-l-4 border-accent-gold">
          <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-primary-teal mb-3 sm:mb-4">
            Important Disclaimers
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No Refunds</h3>
              <p>
                The $10 entry fee is non-refundable once payment is processed, except in cases where 
                the contest is cancelled by the organizers.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Contest Modifications</h3>
              <p>
                Contest organizers reserve the right to modify contest rules, dates, or prizes 
                with reasonable notice to participants.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Limitation of Liability</h3>
              <p>
                Contest organizers are not liable for any technical issues, internet connectivity 
                problems, or other circumstances beyond their control that may affect participation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Tax Implications</h3>
              <p>
                Winners are responsible for any applicable taxes on prizes received. Contest 
                organizers will provide necessary documentation for tax purposes.
              </p>
            </div>
          </div>
        </div>

        <div className="card bg-gray-50">
          <h2 className="text-2xl font-playfair font-semibold text-primary-teal mb-4">
            Questions or Concerns?
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these rules or need clarification on any aspect 
            of the contest, please contact us before entering.
          </p>
          <div className="bg-white rounded-soft p-4 border border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>Contact:</strong> support@contestplatform.com<br />
              <strong>Response Time:</strong> We typically respond within 24 hours
            </p>
          </div>
        </div>

        <div className="card border-l-4 border-red-500 bg-red-50">
          <h2 className="text-2xl font-playfair font-semibold text-red-700 mb-4">
            ⚠️ Important Notice
          </h2>
          <div className="text-red-800 space-y-3">
            <p className="font-semibold">
              This is a skill-based contest. No element of chance or lottery is involved.
            </p>
            <p>
              Use of AI tools is at your own risk. Random sample checks may occur. 
              Confirmed AI use may lead to disqualification and reversal of winnings.
            </p>
            <p className="font-semibold">
              By participating, you confirm you are not and will not be using AI for this contest.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Rules;
