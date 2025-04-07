import React from 'react'
import AnalysisTable from '../components/AnalysisTable';

const MyCases: React.FC = () => {


  const columns = [
    { label: 'Modified', accessor: 'modified' },
    { label: 'Analysis', accessor: 'analysis' },
    { label: '#Samples', accessor: 'samples' },
    { label: 'Status', accessor: 'status' },
    { label: 'Assignment', accessor: 'assignment' },
    { label: 'Subject', accessor: 'subject' },
    {
      label: '', // Empty header for the action column
      accessor: 'action',
      render: () => (
        <a href="#" className="text-blue-600 hover:underline font-medium">
          Analyse
        </a>
      ),
    },
  ];
  const dummyData = [
    {
      modified: '2025-04-06',
      analysis: 'CBC Test',
      samples: 2,
      status: 'Pending',
      assignment: 'Dr. Rohan Mehta',
      subject: 'Anjali Sharma',
    },
    {
      modified: '2025-04-05',
      analysis: 'MRI Scan',
      samples: 1,
      status: 'In Review',
      assignment: 'Dr. Priya Kapoor',
      subject: 'Rahul Verma',
    },
    {
      modified: '2025-04-04',
      analysis: 'Liver Function Test',
      samples: 2,
      status: 'Completed',
      assignment: 'Dr. Neha Joshi',
      subject: 'Sneha Iyer',
    },
    {
      modified: '2025-04-02',
      analysis: 'Blood Sugar',
      samples: 1,
      status: 'Pending',
      assignment: 'Dr. Arjun Deshmukh',
      subject: 'Karan Malhotra',
    },
    {
      modified: '2025-04-01',
      analysis: 'Urine Culture',
      samples: 2,
      status: 'Completed',
      assignment: 'Dr. Meera Nair',
      subject: 'Pooja Reddy',
    },
    {
      modified: '2025-03-31',
      analysis: 'Thyroid Profile',
      samples: 1,
      status: 'In Review',
      assignment: 'Dr. Sandeep Kulkarni',
      subject: 'Abhishek Singh',
    },
    {
      modified: '2025-03-29',
      analysis: 'CT Scan',
      samples: 1,
      status: 'Completed',
      assignment: 'Dr. Kavita Menon',
      subject: 'Nisha Patel',
    },
    {
      modified: '2025-03-27',
      analysis: 'Vitamin D Test',
      samples: 2,
      status: 'Pending',
      assignment: 'Dr. Rajiv Chatterjee',
      subject: 'Varun Bhatia',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-6 px-8">
      <div className='max-w-7xl w-full'>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">
          My Cases
        </h1>
        <AnalysisTable
          data={dummyData}
          columns={columns}
          pageInfo={{ current: 1, total: 6 }}
          onPageChange={(page) => console.log('Go to page:', page)}
          onSearchChange={(query) => console.log('Search:', query)}
        />
      </div>
    </div>
  )
}

export default MyCases