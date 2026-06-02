import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon } from 'lucide-react';
import { getAbout, type AboutInfo } from '../admin/utils/storage';

export const About = () => {
  const [data, setData] = useState<AboutInfo>(getAbout());
  const [campusFailed, setCampusFailed] = useState(false);
  const [principalFailed, setPrincipalFailed] = useState(false);

  const campusImageUrl = '/assets/about/jojocampus.jpg';
  const principalImageUrl = '/assets/about/principal.jpg';

  useEffect(() => {
    setData(getAbout());
  }, []);

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Title */}
        <h1 className="section-title">About Buffalo-Nek High School</h1>

        {/* ── Section 1: Our School + Campus Image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch mb-16 sm:mb-24">

          {/* Text */}
          <motion.div
            initial={ { opacity: 0, y: 24 } }
            whileInView={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.35 } }
            viewport={ { once: true } }
            className="flex flex-col justify-center"
          >
            <div className="border-l-4 border-[#009999] pl-5 mb-6">
              <h2 className="text-2xl font-bold text-[#009999]">Our School</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                Buffalo-Nek High School (Buffalo-Nek High School) is a public senior secondary school 
                located at Njijini A/A, Emthonjeni Location, Mount Frere, Eastern Cape. The school serves the 
                Umzimvubu Local Municipality within the Alfred Nzo West Education District 
                and operates as a No-Fee school.
              </p>
              <p>
                Under the inspiring motto "Legacy of Leadership and Learning", Buffalo-Nek High School has built a proud 
                community of learners and a strong culture of unity and academic ambition.
              </p>
              <p>
                With approximately Growing learner community and Dedicated teaching staff, 
                the school offers comprehensive education from Grades 8 to 12.
              </p>
              <p className="text-[#009999] font-semibold">
                "Legacy of Leadership. We don't remember the days — we remember the moments."
              </p>
            </div>
          </motion.div>

          {/* Campus Image (match principal styling + avoid cropping) */}
          <motion.div
            initial={ { opacity: 0, y: 24 } }
            whileInView={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.35, delay: 0.05 } }
            viewport={ { once: true } }
            className="bg-[#FDF9EC] rounded-3xl overflow-hidden shadow-lg border border-[#009999]"
          >
            <div className="bg-[#009999] p-6 sm:p-8">
              {/* Outer holder: rounded + gold frame all around */}
              <div
                className="w-full rounded-3xl bg-[#009999] p-2 sm:p-3"
                style={ { border: '4px solid #D4AF37' } }
              >
                {/* Inner holder: keeps the image nicely clipped on all corners */}
                <div className="w-full rounded-2xl overflow-hidden shadow-xl" style={ { aspectRatio: '4/3' } }>
                  {!campusFailed ? (
                    <img
                      src={campusImageUrl}
                      alt="School campus"
                      className="w-full h-full object-contain bg-[#009999]"
                      onError={() => setCampusFailed(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#009999] via-[#D4AF37] to-[#009999] flex items-center justify-center">
                      <div className="text-center text-white/70 px-6">
                        <div className="mx-auto mb-3 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                          <ImageIcon />
                        </div>
                        <div className="font-semibold">Campus image</div>
                        <div className="text-sm text-white/60 font-mono">public/assets/about/</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Section 2: Principal's Message ── */}
        <motion.section
          initial={ { opacity: 0, y: 24 } }
          whileInView={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.4 } }
          viewport={ { once: true } }
          className="mb-16 sm:mb-24"
        >
          {/* Section heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#009999] mb-2">Principal's Message</h2>
            <div className="w-16 h-1 bg-[#009999] mx-auto rounded-full" />
          </div>

          {/* Card */}
          <div className="bg-[#FDF9EC] rounded-3xl overflow-hidden shadow-lg border border-[#009999]">
            <div className="grid grid-cols-1 md:grid-cols-3">

              {/* Principal Photo Column */}
              <div className="flex flex-col items-center justify-center bg-[#009999] p-8 md:p-10">
                {/* Photo frame */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-xl mb-5">
                  {!principalFailed ? (
                    <img
                      src={principalImageUrl}
                      alt="Principal"
                      className="w-full h-full object-cover object-top"
                      onError={() => setPrincipalFailed(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#009999]">
                      <ImageIcon className="text-white/40" size={40} />
                    </div>
                  )}
                </div>

                {/* Name & Title */}
                <h3 className="text-lg font-bold text-white text-center leading-tight">
                  M.A. Mdondolo
                </h3>
                <p className="text-[#D4AF37] text-sm font-semibold mt-1 text-center">
                  Principal
                </p>

                {/* Decorative divider */}
                <div className="w-10 h-0.5 bg-[#009999] mt-4 rounded-full opacity-60" />
              </div>

              {/* Message Column */}
              <div className="col-span-2 flex flex-col justify-center p-8 md:p-12">
                {/* Opening quote mark — decorative only, not wrapping text */}
                <div className="text-[#009999] text-6xl font-serif leading-none mb-2 opacity-40 select-none">
                  "
                </div>

                <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Welcome to Buffalo-Nek High School. Our institution stands as a 
                    beacon of academic excellence and community spirit in the heart of 
                    Mount Ayliff.
                  </p>
                  <p>
                    At Buffalo-Nek High School, we believe that every learner has the potential to reach 
                    for the sky. Our dedicated team of 46 teachers works tirelessly to 
                    nurture talent, foster creativity, and build responsible citizens.
                  </p>
                  <p>
                    Together, we create an environment where "Legacy of Leadership" is not just 
                    a phrase, but a way of life. Our learners leave Buffalo-Nek High School not only with 
                    knowledge but with values that will serve them throughout their lives.
                  </p>
                </div>

                {/* Closing quote mark — decorative only */}
                <div className="text-[#009999] text-6xl font-serif leading-none mt-2 text-right opacity-40 select-none">
                  "
                </div>
              </div>

            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};
