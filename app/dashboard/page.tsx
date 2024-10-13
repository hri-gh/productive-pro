"use client"

import React from 'react'
// import { MultiselectCombobox } from '@/components/ui/multiselect-combobox'
import { ReusableMultiSelectCombobox, Option } from '@/components/ui/reusable-multiselect-combobox'

const frameworks: Option[] = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

const DashoardPage = () => {
  return (
    <div>
      {/* <MultiselectCombobox /> */}
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-4">Select Frameworks</h1>
          <ReusableMultiSelectCombobox
            options={frameworks}
            placeholder="Select frameworks..."
            emptyMessage="No framework found."
            onSelectionChange={(selectedValues) => {
              console.log("Selected frameworks:", selectedValues)
            }}
          />
        </div>
      </main>
    </div>
  )
}

export default DashoardPage
