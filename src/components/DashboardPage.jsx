'use client'

import { Suspense, lazy } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
const MaturityChart = lazy(() => import("../components/charts/MaturityChart"))
const CapabilitiesChart = lazy(() => import('../components/charts/CapabilitiesChart'))
const LifecycleChart = lazy(() => import('../components/charts/LifecycleChart'))
const ROIChart = lazy(() => import('../components/charts/ROIChart'))

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6 ml-[85px]">
      {/* Top Row Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Maturity Index Card */}
        <Card>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Maturity Index</h2>
              <button className="text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm font-medium">Technology Sourcing Strategy</span>
              <select className="text-sm bg-gray-50 border-none rounded-md px-3 py-1">
                <option>Intermediate</option>
              </select>
            </div>
            <Suspense fallback={<div className="w-full h-[300px] animate-pulse bg-gray-200 rounded-full" />}>
              <MaturityChart />
            </Suspense>
            <p className="text-sm text-gray-500 text-center mt-4">
              Your grade ranks in the top 50% of companies in your revenue bracket.
            </p>
          </div>
        </Card>

        {/* Build vs Buy vs Partner Card */}
        <Card>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Build vs. Buy vs Partner (BBP): Capabilities Count</h2>
              <button className="text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Suspense fallback={<div className="w-full h-[300px] animate-pulse bg-gray-200 rounded-lg" />}>
              <CapabilitiesChart />
            </Suspense>
          </div>
        </Card>

        {/* Lifecycle Capabilities Card */}
        <Card>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Capability BBP Lifecycle: Capab.</h2>
              <button className="text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Suspense fallback={<div className="w-full h-[300px] animate-pulse bg-gray-200 rounded-lg" />}>
              <LifecycleChart />
            </Suspense>
          </div>
        </Card>
      </div>

      {/* Analysis Table */}
      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">BBP Analysis & Decision Framework: Evaluation Phase</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b">
                  <th className="pb-2">Capabilities</th>
                  <th className="pb-2">Differentiator</th>
                  <th className="pb-2">Speed To Market</th>
                  <th className="pb-2">Strategic Alignment</th>
                  <th className="pb-2">Team Maturity</th>
                  <th className="pb-2">Build</th>
                  <th className="pb-2">Buy</th>
                  <th className="pb-2">Partner</th>
                  <th className="pb-2">Recommended Actions</th>
                  <th className="pb-2">Select</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((capability) => (
                  <tr key={capability} className="border-b">
                    <td className="py-4">Capability {capability}</td>
                    <td className="py-4">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '65%'}}></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </td>
                    <td className="py-4">$2.0m</td>
                    <td className="py-4">$1.1m</td>
                    <td className="py-4">$1.5m</td>
                    <td className="py-4">{['Buy', 'Build', 'Partner'][capability - 1]}</td>
                    <td className="py-4">
                      {capability === 2 && (
                        <div className="w-6 h-6 bg-green-500 rounded-sm"></div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <button className="bg-green-100 text-green-600 px-4 py-2 rounded-md text-sm">
              Implement
            </button>
          </div>
        </div>
      </Card>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Insights Card */}
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">Insights and Actions</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">AI Insight: BI Projected delay of 2 months. Need ML skills</h4>
                </div>
                <button className="bg-red-100 text-red-600 px-3 py-1 rounded-md text-sm">
                  Approve hire
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Capability 3: ROI needs to be captured in business case.</h4>
                </div>
                <button className="bg-green-100 text-green-600 px-3 py-1 rounded-md text-sm">
                  Go to ROI page
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Capability 2: BBP decision date is due in 2 weeks.</h4>
                </div>
                <button className="bg-red-100 text-red-600 px-3 py-1 rounded-md text-sm">
                  Review with team
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">AI Insight: Copilot being built cost projections at 125%</h4>
                </div>
                <button className="bg-red-100 text-red-600 px-3 py-1 rounded-md text-sm">
                  Finance Review
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Risk: Vendor sunsetting features for search engine</h4>
                </div>
                <button className="bg-green-100 text-green-600 px-3 py-1 rounded-md text-sm">
                  Revert Decision
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* ROI Chart Card */}
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">ROI for BBP</h2>
            <Suspense fallback={<div className="w-full h-[300px] animate-pulse bg-gray-200 rounded-lg" />}>
              <ROIChart />
            </Suspense>
          </div>
        </Card>
      </div>
    </div>
  )
}