// toastPreset.tsx
import React from 'react';
import { toast, ToastOptions } from 'react-toastify';
// import Icon from '@/components/Icon';

export type ToastKey =
    | 'successful_operation'
    | 'error_network'
    | 'unsuccessful_operation'
    | 'no_data';

type ToastConfig = {
    message: React.ReactNode;
    className: string;
    type?: ToastOptions['type'];
};

const toastConfig: Record<ToastKey, ToastConfig> = {
    successful_operation: {
        message: (
            <div className="flex items-center gap-2 text-secondary">
                {/* <Icon icon="check-01" className="ms-2" color="secondary" /> */}
                <span>عملیات با موفقیت انجام شد</span>
            </div>
        ),
        className: 'bg-green-50 text-green-800 font-semibold',
        type: 'success',
    },
    error_network: {
        message: (
            <div className="flex items-center gap-2 text-warning">
                {/* <Icon icon="Disconnect-01" className="ms-2" color="warning" /> */}
                <span>خطا در برقراری ارتباط!</span>
            </div>
        ),
        className: 'bg-red-50 text-red-800 font-semibold',
        type: 'warning',
    },
    unsuccessful_operation: {
        message: (
            <div className="flex items-center gap-2 text-danger">
                {/* <Icon icon="error-01" className="ms-2" color="danger" /> */}
                <span>عملیات با خطا مواجه شد!</span>
            </div>
        ),
        className: 'bg-yellow-50 text-yellow-800 font-medium',
        type: 'error',
    },
    no_data: {
        message: (
            <div className="flex items-center gap-2">
                {/* <Icon icon="info" className="text-blue-600 w-5 h-5" /> */}
                <span>App updated to latest version.</span>
            </div>
        ),
        className: 'bg-blue-50 text-blue-800 font-medium',
        type: 'info',
    },
    // info_update: {
    //   message: (
    //     <div className="flex items-center gap-2">
    //       <Icon icon="info" className="text-blue-600 w-5 h-5" />
    //       <span>App updated to latest version.</span>
    //     </div>
    //   ),
    //   className: 'bg-blue-50 text-blue-800 font-medium',
    //   type: 'info',
    // },
    // deleted_successfully: {
    //   message: (
    //     <div className="flex items-center gap-2">
    //       <Icon icon="trash" className="text-gray-600 w-5 h-5" />
    //       <span>Item deleted.</span>
    //     </div>
    //   ),
    //   className: 'bg-gray-100 text-gray-800 font-medium',
    //   type: 'default',
    // },
    };

    export function showToast(key: ToastKey) {
    const config = toastConfig[key];

    toast(config.message, {
        type: config.type ?? 'default',
        icon: false,
        className: `${config.className} rounded-3 m-3 w-auto px-3`,
        // bodyClassName: 'flex items-center gap-2',
        hideProgressBar: true,
        closeButton: false,
        autoClose: 3000,
        // position: 'bottom-center',
    } as ToastOptions);
}
