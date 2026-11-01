import React from 'react';
import PageHeader from '../components/PageHeader';
import { Newspaper, ExternalLink, Download, FileText, ShieldAlert, Building2, Globe, TrendingUp } from 'lucide-react';

export default function OilNewsCaliforniaPage({ onNavigate }) {
  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Oil News Around California"
        category="State Industry Intelligence"
        breadcrumbs={[
          { label: "News & Events", path: "/news-events" },
          { label: "Oil News Around California" }
        ]}
        subtitle="Key regulatory updates, carbon capture milestones, and economic reports affecting California’s energy landscape."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Article 1: EPA Class VI Permits (Verbatim Content) */}
        <article className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
            Regulatory Milestone • Elk Hills Field
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy leading-tight font-display">
            U.S. EPA Releases Draft Class VI Permits to CRC’s Carbon TerraVault for CO2 Injection and Storage in California
          </h2>

          <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
            Milestone Represents Nation’s First for Use of Depleted Oil and Natural Gas Fields to Capture CO 2
          </p>

          <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-6">
            <p>
              LONG BEACH, Calif.–(BUSINESS WIRE)– California Resources Corporation (NYSE:CRC) and its carbon management business, Carbon TerraVault (CTV), today announced that the U.S. Environmental Protection Agency (EPA) released draft Class VI well permits for underground carbon dioxide (CO 2 ) injection and storage in CTV’s 26-R reservoir located within the CTV I carbon capture and storage (CCS) vault at the Elk Hills Field in Kern County, California. This marks an important step in advancing the development of clean energy projects in the state.
            </p>

            <p>
              The proposed wells are California’s first draft permits for underground CO 2 sequestration, as well as the first draft permits utilizing a depleted oil and natural gas field in the U.S.
            </p>

            <blockquote className="p-5 bg-brand-light rounded-2xl border-l-4 border-brand-gold text-slate-800 italic">
              “This is a significant milestone for California as it moves to attain its ambitious climate goals,” said Francisco Leon, CRC President and Chief Executive Officer. “We are committed to supporting the state in reaching carbon neutrality and developing a more sustainable future for all Californians.”
            </blockquote>

            <p>
              The 26-R reservoir at Elk Hills has an expected injection rate of 1.46 million metric tons (MT) per annum and a total estimated capacity of up to 38 million MT. The reservoir is part of CTV I which has a total estimated storage of up to 46 million MT. The Elk Hills Field spans nearly 75 square miles and is of particular focus for future CCS projects due to its significant storage potential through multiple depleted hydrocarbon reservoirs and its industrial location. The California Energy Commission has referred to the Elk Hills Field as “one of the premier CO 2 sequestration sites in the U.S. …an optimal site for the safe and secure sequestration of CO 2 .” CTV has partnered with several clean technology companies to develop greenfield projects at Elk Hills. These projects are expected to generate new jobs in new clean energy industries that will rely on the CTV I storage reservoirs.
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
              The draft EPA permits are available for public review (
              <a 
                href="https://www.epa.gov/publicnotices/intent-issue-class-vi-underground-injection-control-permits-carbon-terravault-jv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-navy font-semibold underline break-all"
              >
                https://www.epa.gov/publicnotices/intent-issue-class-vi-underground-injection-control-permits-carbon-terravault-jv
              </a>
              ) and comment for the next 90 days.
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-base font-bold text-brand-navy">About Carbon TerraVault</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Carbon TerraVault (CTV) is CRC’s carbon management business and is developing services to capture, transport and permanently store CO 2 for its customers. CTV is engaged in a series of CCS projects that will inject CO 2 captured from industrial sources into depleted underground reservoirs and permanently store CO 2 deep underground. For more information, visit <a href="http://www.carbonterravault.com" target="_blank" rel="noopener noreferrer" className="text-brand-navy underline">www.carbonterravault.com</a> .
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 space-y-2">
              <div className="font-bold text-slate-700 uppercase tracking-wider">Cautionary Note Regarding Forward-Looking Statements</div>
              <p className="text-[11px] leading-relaxed">
                This press release contains statements that CRC believes to be “forward-looking statements” within the meaning of Section 27A of the Securities Act of 1933 and Section 21E of the Securities Exchange Act of 1934. All statements other than historical facts are forward-looking statements, and include statements regarding CRC’s future financial position, business strategy, projected revenues, earnings, costs, capital expenditures and plans and objectives of management for the future. Words such as “expect,” “could,” “may,” “anticipate,” “intend,” “plan,” “ability,” “believe,” “seek,” “see,” “will,” “would,” “estimate,” “forecast,” “target,” “guidance,” “outlook,” “opportunity” or “strategy” or similar expressions are generally intended to identify forward-looking statements. Such forward-looking statements are subject to risks and uncertainties that could cause actual results to differ materially from those expressed in, or implied by, such statements. Although CRC believes the expectations and forecasts reflected in its forward-looking statements are reasonable, they are inherently subject to numerous risks and uncertainties, most of which are difficult to predict and many of which are beyond CRC’s control. No assurance can be given that such forward-looking statements will be correct or achieved or that the assumptions are accurate or will not change over time. Particular uncertainties that could cause CRC’s actual results to be materially different include: (i) EPA’s decision to issue or withhold final Class VI permits and the availability or timing of, or conditions imposed on, any final Class VI permits issued to CRC; (ii) regulatory actions and changes that affect CRC, including any other permits and approvals necessary for CRC’s carbon management business; (iii) CRC’s ability to claim and utilize tax credits or other incentives in connection with its CCS projects; (iv) CRC’s ability to realize the benefits contemplated by its energy transition strategies and initiatives, including CCS projects and other renewable energy efforts; (v) CRC’s ability to successfully identify, develop and finance carbon capture and storage projects and other renewable energy efforts including those in connection with the Carbon TerraVault; (vi) CRC’s ability to convert its Carbon Dioxide Management Agreements (CDMAs) to definitive agreements and enter into other offtake agreements; (vii) CRC’s ability to maximize the value of its carbon management business and operate it on a stand-alone basis; (viii) CRC’s ability to successfully develop infrastructure projects and enter into third party contracts on contemplated terms; and (ix) those expressed in its forward-looking statements include those factors discussed in Part I, Item 1A – Risk Factors in CRC’s Annual Report on Form 10-K and its other SEC filings available at www.crc.com . CRC cautions you not to place undue reliance on forward-looking statements contained in this press release, which speak only as of the filing date, and CRC undertakes no obligation to update this information. This press release may also contain information from third party sources. This data may involve a number of assumptions and limitations, and CRC has not independently verified them and do not warrant the accuracy or completeness of such third-party information.
              </p>
              <div className="pt-2 text-[11px] font-medium text-slate-600 border-t border-slate-200">
                Richard Venn (Media) 818-661-6014 CRC.Communications@crc.com • Joanna Park (Investor Relations) 818-661-3731 Joanna.Park@crc.com • Source: California Resources Corporation
              </div>
            </div>
          </div>
        </article>

        {/* Article 2: California Climate Lawsuit */}
        <article className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/90 space-y-4">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Legal & Regulatory Analysis</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            California lawsuit puts Big Oil on the hotseat for climate change
          </h2>
          <p className="text-xs text-slate-500">
            External report tracking California legal developments concerning energy producers.
          </p>
          <div className="pt-2">
            <a
              href="https://www.axios.com/2023/09/18/california-newsom-oil-climate-lawsuit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-semibold text-brand-navy hover:underline break-all"
            >
              <span>https://www.axios.com/2023/09/18/california-newsom-oil-climate-lawsuit</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5 shrink-0" />
            </a>
          </div>
        </article>

        {/* Article 3: Kern EDC Manufacturing & Energy Independence Fact Sheet */}
        <article className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/90 space-y-5">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Kern County Economic Development Corporation</span>
          
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Kern EDC’s 2023 Advanced Manufacturing Industry Fact Sheet & Energy Independence Flyer
          </h2>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-slate-700 text-sm leading-relaxed">
            In 2022, California imported a record 74% of its oil from overseas sources. Meanwhile, the state’s annual demand for petroleum remains above 500 million barrels. The U.S. Energy Information Administration recently reported that California is home to over 1.7 billion barrels of proved oil reserves. Check out Kern EDC’s updated energy independence fact sheet.
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <a
              href="https://kernedc.com/wp-content/uploads/2023/08/2023-Kern-EDC-Advanced-Manufacturing-Industry-Fact-Sheet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-semibold text-brand-navy hover:underline break-all"
            >
              <span>https://kernedc.com/wp-content/uploads/2023/08/2023-Kern-EDC-Advanced-Manufacturing-Industry-Fact-Sheet.pdf</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5 shrink-0" />
            </a>
            <div>
              <a
                href="https://kernedc.com/wp-content/uploads/2023/08/2023-Kern-EDC-Advanced-Manufacturing-Industry-Fact-Sheet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2.5 bg-brand-light text-brand-navy font-bold text-xs rounded-xl border border-brand-gold/30 hover:border-brand-gold transition-colors"
              >
                <Download className="w-4 h-4 mr-1.5 text-brand-navy" />
                <span>Download Kern EDC Manufacturing Fact Sheet (PDF)</span>
              </a>
            </div>
          </div>
        </article>

        {/* Article 4: State of American Energy */}
        <article className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/90 space-y-4">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">American Petroleum Institute National Report</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            A GLOBAL ENERGY CRISIS, AN AMERICAN SOLUTION
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            API-SOAE-2023-Executive-Summary — 2023 State of American Energy
          </p>
        </article>
      </div>
    </div>
  );
}
