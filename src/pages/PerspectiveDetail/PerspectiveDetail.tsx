import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { ProgressCircle } from '../../components/common/ProgressCircle';
import { TabNavigation } from '../../components/common/TabNavigation';
import { DataTable } from '../../components/common/DataTable';
import { StatusBadge } from '../../components/common/StatusBadge';
import { evidenceDocuments } from '../../data/mockData';
import Files from '../../assets/icons/files_icon.svg'
import FileValidation from '../../assets/icons/file_validation.svg'
import FileExport from '../../assets/icons/file_export.svg'
import SearchFile from '../../assets/icons/search_file_icon.svg'
import SendIcon from '../../assets/icons/hugeicons_sent.svg'
import AhmedIcon from '../../assets/images/leader-1.png'

export const PerspectiveDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'evidence', label: 'Evidence' },
  ];

  const evidenceCounts = {
    total: 4,
    underReview: 3,
    inProgress: 2,
    completed: 1,
  };

  const columns = [
    { key: 'documentNumber', label: 'Document Number' },
    { key: 'documentName', label: 'Document Name' },
    { key: 'documentLead', label: 'Document Lead' },
    { key: 'documentPreparer', label: 'Document Preparer' },
    { key: 'date', label: 'Date' },
    { key: 'dueDate', label: 'Due Date' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => <StatusBadge status={value as any} size="sm" />,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft size={16} />
          </button>
          <h1 className="text-base font-bold">Digital Transformation Strategic Planning</h1>
        </div>
      </div>

      <Card>
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs text-gray-600 bg-transparent px-3 py-1 rounded-full border-200 border">
              Strategy & Planning
            </span>
            <h2 className="text-base font-bold text-navy-900 mt-3">
              Digital Transformation Strategic Planning
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals
            </p>
          </div>
          <ProgressCircle percentage={100} size="md" />
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <div className="flex items-center gap-3">
            <img src={Files} alt="" />
            <div>
              <p className="text-2xl font-bold text-navy-900">{evidenceCounts.total}</p>
              <p className="text-sm text-gray-600">Total Evidence</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <img src={SearchFile} alt="" />
            <div>
              <p className="text-2xl font-bold text-navy-900">{evidenceCounts.underReview}</p>
              <p className="text-sm text-gray-600">Under Review Evidence</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <img src={FileExport} alt="" />
            <div>
              <p className="text-2xl font-bold text-navy-900">{evidenceCounts.inProgress}</p>
              <p className="text-sm text-gray-600">In Progress Evidence</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <img src={FileValidation} alt="" />
            <div>
              <p className="text-2xl font-bold text-navy-900">{evidenceCounts.completed}</p>
              <p className="text-sm text-gray-600">Completed Evidence</p>
            </div>
          </div>
        </Card>
      </div>

      <TabNavigation tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'overview' && (
        <>
          <Card>
            <div className="space-y-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-navy-900 bg-[#1B3557]/5 rounded-xl px-6 py-3">Objective</div>
                <div className="col-span-3 text-navy-900 bg-gray-300 rounded-xl px-6 py-3">
                  Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-navy-900 bg-[#1B3557]/5 rounded-xl px-6 py-3">Implementation Requirements</div>
                <div className="col-span-3 text-navy-900 bg-gray-300 rounded-xl px-6 py-3">
                  <p className="mb-2">Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:</p>
                  <p className="mb-1">A. The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.</p>
                  <p className="mb-1">B. Strategic Initiatives, Programs, And Performance Indicators.</p>
                  <p className="mb-1">C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy's Objectives.</p>
                  <p className="mb-1">D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy's Objectives.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-navy-900 bg-[#1B3557]/5 rounded-xl px-6 py-3">Evidence Documents</div>
                <div className="col-span-3 text-navy-900 bg-gray-300 rounded-xl px-6 py-3">
                  Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-navy-900 bg-[#1B3557]/5 rounded-xl px-6 py-3">Related Regulations</div>
                <div className="col-span-3 text-navy-900 bg-gray-300 rounded-xl px-6 py-3">
                  Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-navy-900 bg-[#1B3557]/5 rounded-xl px-6 py-3">Scope</div>
                <div className="col-span-3 text-navy-900 bg-gray-300 rounded-xl px-6 py-3">
                  All Government Entities.
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <h3 className="font-bold mb-4">Leaders</h3>
            <div className="flex gap-6">
              <div className="flex items-center gap-3 bg-gray-300 rounded-xl px-4 py-3">
                <img
                  src={AhmedIcon}
                  alt="Leader"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium text-navy-900">Ahmed Al-Ali</p>
                  <p className="text-sm text-gray-600">Strategy Perspective</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-300 rounded-xl px-4 py-3">
                <img
                  src={AhmedIcon}
                  alt="Leader"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium text-navy-900">Ahmed Al-Ali</p>
                  <p className="text-sm text-gray-600">Strategy Perspective</p>
                </div>
              </div>
            </div>
          </Card>
        </>
      )}

      {activeTab === 'evidence' && (
        <>
          <Card padding="md">
            <DataTable columns={columns} data={evidenceDocuments} />
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className='md:col-span-2'>
              <Card>
                <h3 className="font-bold text-navy-900 mb-4">Comments</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 border-gray-200 border rounded-xl p-4">
                    <div className="w-[24px] h-[24px] bg-gray-200 rounded-full flex items-center justify-center font-medium text-gray-600">
                      E
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium">Sara Ibrahim</p>
                        <span className="text-sm text-gray-500">2025-08-05</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">
                        Ensure The Plan Includes A Clear Governance Model.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-gray-200 border rounded-xl p-4">
                    <div className="w-[24px] h-[24px] bg-gray-200 rounded-full flex items-center justify-center font-medium text-gray-600">
                      E
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium">Sara Ibrahim</p>
                        <span className="text-sm text-gray-500">2025-08-05</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">
                        Ensure The Plan Includes A Clear Governance Model.
                      </p>
                    </div>
                  </div>

                  <textarea
                    className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Add a comment..."
                  />
                  <button className="bg-navy-900 text-white px-4 py-2 rounded-lg hover:bg-navy-800 transition-colors flex items-center gap-2">
                    <img src={SendIcon} alt="" />
                    Post Comment
                  </button>
                </div>
              </Card>
            </div>
            <Card>
              <h3 className="text-base font-bold mb-4 border-b border-gray-200 pb-3">Recent Activities</h3>
              <div className="space-y-3">
                <div className="flex gap-3 border-b border-gray-200 pb-3">
                  <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0" />
                  <div className='flex items-start justify-between gap-6 w-full'>
                    <p className="text-base text-navy-900 max-w-[80%]">Roadmap_Version1.Docx Uploaded By Rami AlSharif</p>
                    <p className="text-xs text-[#8597A8] w-fit mt-1">5 Mins Ago</p>
                  </div>
                </div>
                <div className="flex gap-3 border-b border-gray-200 pb-3">
                  <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0" />
                  <div className='flex items-start justify-between gap-6 w-full'>
                    <p className="text-base text-navy-900 max-w-[80%]">KPI_Framework.xlsx uploaded by Mona Hamed</p>
                    <p className="text-xs text-[#8597A8] w-fit mt-1">20 mins ago</p>
                  </div>
                </div>
                <div className="flex gap-3 border-b border-gray-200 pb-3">
                  <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0" />
                  <div className='flex items-start justify-between gap-6 w-full'>
                    <p className="text-base text-navy-900 max-w-[80%]">Digital_Transformation_Plan.pdf approved by Advisory Team</p>
                    <p className="text-xs text-[#8597A8] w-fit mt-1">1 hour ago</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};