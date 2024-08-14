import React from 'react'

const Cert = () => {
  return (
    <div>

<div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4">
              <div class="flex min-w-72 flex-col gap-3">
                <p class="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight">Certificate Verification</p>
                <p class="text-[#49779c] text-sm font-normal leading-normal">
                  Your certificate is unique and can be verified here. You will need the certificate ID to verify your certificate.
                </p>
              </div>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#0d151c] text-base font-medium leading-normal pb-2">Enter Certificate ID</p>
                <input
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d151c] focus:outline-0 focus:ring-0 border-none bg-[#e7eef4] focus:border-none h-14 placeholder:text-[#49779c] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex px-4 py-3">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#2094f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Verify Certificate</span>
              </button>
            </div>
        
            </div>
            </div>

    </div>
  )
}

export default Cert