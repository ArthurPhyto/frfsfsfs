import React from 'react';
import { RandomURL } from '../types';
import { Link2, Trash2 } from 'lucide-react';

interface URLTableProps {
  urls: RandomURL[];
  onDelete: (id: string) => void;
}

export const URLTable = ({ urls, onDelete }: URLTableProps) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Random URL
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Target URLs
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Distribution
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {urls.map((url) => (
            <tr key={url.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-2">
                  <Link2 size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-900">{url.path}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  {url.targets.map((target) => (
                    <div key={target.id} className="text-sm text-gray-500">
                      {target.url}
                    </div>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  {url.targets.map((target, index) => (
                    <div
                      key={target.id}
                      className="bg-orange-600 h-2.5 rounded-full"
                      style={{
                        width: `${target.percentage}%`,
                        marginLeft: index > 0 ? `${-100}%` : 0,
                      }}
                    />
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => onDelete(url.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};