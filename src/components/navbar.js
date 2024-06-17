import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menubar as PrimeMenubar } from 'primereact/menubar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../components/main.scss'

const Navbar = () => {
    const navigate = useNavigate();
    const items = [
        {
            label: 'HOME',
            id: 'menu-navbar',
            command: () => navigate('/'),
        },
        {
            label: 'BÁO CÁO',
            id: 'menu-navbar',
            items: [
                {
                    label: 'Trung tâm',
                    id: 'menu-items',
                    command: () => navigate('/report/center'),
                    
                },
                {
                    label: 'Phòng',
                    id: 'menu-items',
                    command: () => navigate('/report/room'),
                },
                {
                    label: 'Tổ',
                    id: 'menu-items',
                    command: () => navigate('/report/nest'),
                },
                {
                    label: 'Tỉnh',
                    id: 'menu-items',
                    command: () => navigate('/report/province'),
                },
                {
                    label: 'Huyện',
                    id: 'menu-items',
                    command: () => navigate('/report/district'),
                },
                {
                    label: 'Trạm',
                    id: 'menu-items',
                    items: [
                        {
                            label: 'CELL OFF',
                            id: 'menu-items',
                            command: () => navigate('/station/cell_of'),
                        },
                        {
                            label: 'TRẠM MFĐ',
                            id: 'menu-items',
                        },
                        {
                            label: 'TRẠM MLL',
                            id: 'menu-items',
                        },
                        {
                            label: 'TRẠM MĐ',
                            id: 'menu-items',
                        },
                        {
                            label: 'VHKT TRẠM',
                            id: 'menu-items',
                        },
                    ],
                },
                {
                    label: 'Truyền dẫn',
                    id: 'menu-items',
                    items: [
                        {
                            label: 'Trung tâm',
                            id: 'menu-items',
                        },
                        {
                            label: 'Phòng',
                            id: 'menu-items',
                        },
                        {
                            label: 'Tổ',
                            id: 'menu-items',
                        },
                        {
                            label: 'Tỉnh',
                            id: 'menu-items',
                        },
                        {
                            label: 'Nguyên nhân trạm RAN MLL do truyền dẫn',
                            id: 'menu-items',
                        },
                    ],
                },
                {
                    label: 'BC VHKT',
                    id: 'menu-items',
                    items: [
                        {
                            label: 'Trung tâm',
                            id: 'menu-items',
                        },
                        {
                            label: 'RAN-DVT',
                            id: 'menu-items',
                        },
                        {
                            label: 'RAN-TVT',
                            id: 'menu-items',
                        },
                        {
                            label: 'CORE-Mien',
                            id: 'menu-items',
                        },
                        {
                            label: 'CORE-Node',
                            id: 'menu-items',
                        },
                        {
                            label: 'Tỉnh',
                            id: 'menu-items',
                        },
                        {
                            label: 'Huyện',
                            id: 'menu-items',
                        },
                    ],
                },
                {
                    label: 'Tồn tại về chất lượng',
                    id: 'menu-items',
                    items: [
                        {
                            label: 'Cảnh báo chất lượng',
                            id: 'menu-items',
                        },
                        {
                            label: 'Sự cố chất lượng',
                            id: 'menu-items',
                        },
                    ],
                },
                {
                    label: 'Import NN MLL',
                    id: 'menu-items',
                },
                {
                    label: 'Tác động nguy cơ cao',
                    id: 'menu-items',
                    items: [
                        {
                            label: 'Trung tâm',
                            id: 'menu-items',
                        },
                        {
                            label: 'TTNOC',
                            id: 'menu-items',
                        },
                        {
                            label: 'TTML',
                            id: 'menu-items',
                        },
                        {
                            label: 'Cá nhân',
                            id: 'menu-items',
                        },
                    ],
                },
                {
                    label: 'Quản lý truy cập',
                    id: 'menu-items',
                },
                {
                    label: 'Giảm trừ MLL',
                    id: 'menu-items',
                },
            ],
        },
        {
            label: 'TRỰC CA',
            id: 'menu-navbar',
            items: [
                {
                    label: 'Components',
                    id: 'menu-items',
                },
                {
                    label: 'Blocks',
                    id: 'menu-items',
                },
                {
                    label: 'UI Kit',
                    id: 'menu-items',
                },
                {
                    label: 'Templates',
                    id: 'menu-items',

                    items: [
                        {
                            label: 'Apollo',
                            id: 'menu-items',
                        },
                        {
                            label: 'Ultima',
                            id: 'menu-items',
                        },
                    ],
                },
            ],
        },
        {
            label: 'CẢNH BÁO',
            id: 'menu-navbar',
        },
        {
            label: 'ĐH&VHKT',
            id: 'menu-navbar',
        },
        {
            label: 'TÀI NGUYÊN',
            id: 'menu-navbar',
        },
        {
            label: 'PAKH',
            id: 'menu-navbar',
        },
        {
            label: 'QUẢN TRỊ',
            id: 'menu-navbar',
        },
        {
            label: 'SỔ TAY CALLFLOW',
            id: 'menu-navbar',
        },
        {
            label: 'TRỢ GIÚP',
            id: 'menu-navbar',
        },
        {
            label: 'SMARTF',
            id: 'menu-navbar',
        },
        {
            label: 'HỖ TRỢ KHÁCH HÀNG',
            id: 'menu-navbar',
        },
    ];

    return (
        <div className="card">
            <PrimeMenubar model={items} className="custom-menubar pl-2 border-none" />
        </div>
    );
};



export default Navbar;
